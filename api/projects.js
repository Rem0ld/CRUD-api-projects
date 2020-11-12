const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
}

function validProject(project) {
  const hasWebiste =
    typeof project.websiteUrl == "string" && project.websiteUrl.trim() != "";
  const hasImage =
    typeof project.imageUrl == "string" && project.imageUrl.trim() != "";
  const hasAlt =
    typeof project.altImage == "string" && project.altImage.trim() != "";

  return hasAlt && hasImage && hasWebiste;
}

router.get("/", (req, res) => {
  queries.getAll().then((projects) => {
    res.json(projects);
  });
});

router.get("/:id", isValidId, (req, res) => {
  queries.getOne(req.params.id).then((project) => {
    res.json(project);
  });
});

router.post("/", (req, res, next) => {
  if (validProject(req.body)) {
    queries.create(req.body).then((project) => {
      res.json(project[0]);
    });
  } else {
    next(new Error("Invalid Project"));
  }
});

router.put("/:id", isValidId, (req, res) => {
  if (validProject(req.body)) {
    queries.update(req.params.id, req.body).then((projects) => {
      res.json(projects[0]);
    });
  } else {
    next(new Error("Invalid Project"));
  }
});

router.delete("/:id", isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true,
    });
  });
});

module.exports = router;
