// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://pierre:test@localhost/pierresdb"
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
