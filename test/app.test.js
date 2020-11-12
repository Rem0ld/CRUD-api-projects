const request = require("supertest");
const expect = require("chai").expect;
const knex = require("../db/knex");

const app = require("../app");

const fixtures = require("./fixtures");

describe("CRUD Projects", () => {
  before((done) => {
    knex.migrate
      .latest()
      .then(() => {
        return knex.seed.run();
      })
      .then(() => {
        done();
      });
  });

  it("Lists all Records", (done) => {
    request(app)
      .get("/api/v1/projects")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("array");
        done();
      });
  });

  it("Lists one Records", (done) => {
    request(app)
      .get("/api/v1/projects/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("object");
        done();
      });
  });

  it("Create a record", (done) => {
    request(app)
      .post("/api/v1/projects")
      .set("Accept", "application/json")
      .send(fixtures.project)
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Updates a record", (done) => {
    fixtures.project.altImage = "updated alt image";
    request(app)
      .put("/api/v1/projects/15")
      .set("Accept", "application/json")
      .send(fixtures.project)
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("Deletes a record", function (done) {
    request(app)
      .delete("/api/v1/projects/18")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.deep.equal({
          deleted: true,
        });
        done();
      });
  });
});
