exports.up = function (knex) {
  return knex.schema.createTable("project", (table) => {
    table.increments();
    table.text("websiteUrl");
    table.text("codeUrl");
    table.text("imageUrl");
    table.text("altImage");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("project");
};
