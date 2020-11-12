const knex = require("./knex"); // the connection !

module.exports = {
  getAll() {
    return knex("project"); // shorcut for knex.select(*)
  },
  getOne(id) {
    return knex("project").where("id", id).first();
  },
  create(project) {
    return knex("project").insert(project, "*"); // * means it returns the object created
  },
  update(id, project) {
    return knex("project").where("id", id).update(project, "*");
  },
  delete(id) {
    return knex("project").where("id", id).del();
  },
};
