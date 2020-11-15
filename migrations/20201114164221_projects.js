
exports.up = function(knex) {
  return knex.schema.createTable("project", (table) => {
	table.increments();
	table.text("websiteUrl");
	table.text("codeUrl");
	table.text("imageUrl");
	table.text("altImage");
	table.text("stack");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("project");
};

