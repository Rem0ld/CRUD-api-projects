// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://pierre:963254@localhost/projects"
  },
  test: {
    client: "pg",
    connection: "postgres://localhost/test-projects",
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};
