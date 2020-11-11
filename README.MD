# Node.js Express JSON API - CRUD Stickers

We'll be using:

- Postgres for our database
- knex.js for our database migrations, seeds and queries.
- express.js for our JSON routes
- Mocha, Chai and SuperTest to test our routes

- Prerequisites (Mac OS Commands)
  - Latest version of Node.js
    - brew install node
  - Postgres
    - brew install postgres
    - brew services start postgres
    - createdb
  - Express Generator
    - npm install -g express-generator
  - Knex installed globaly
    - npm install -g knex

## Server Check List

- [x] Create a server folder
  - [x] Generate Express App (command express)
  - [x] initialize git repo
- [x] Create database (commant createdb)
- [x] Initialize knex project
  - [x] Install knex and pg (npm command)
  - [x] Create knexfile.js (knex init then clean up file make sure to be connected to right database)
- [ ] Create sticker table migration
- [ ] Seed sticker table with sample data
- [ ] Convert Express App to JSON API
  - [x] Remove view rendering
  - [x] Remove routes folder
  - [x] Remove static serve and public folder
  - [x] Update error handler
- [ ] Add api folder and create/mount router
- [ ] Connect to the database'
  - [ ] Create database connection file
  - [ ] Create a queries file
- [ ] List all records with GET /api/v1/stickers
  - [ ] Create query
  - [ ] Create route
- [ ] Setup tests
  - [ ] Install mocha, chai and supertest
  - [ ] Add a test database connection
  - [ ] Add npm test script
    - [ ] Drop/Create database
  - [ ] Create before
    - [ ] Run migrations/seeds on test db
- [ ] Make sure the tests are working!
- [ ] List all records with GET /api/v1/stickers
  - [ ] Add test
- [ ] Show one record with GET /api/v1/stickers/:id
  - [ ] Validate id
  - [ ] Create query
  - [ ] Create route
  - [ ] Add test
- [ ] Create a record with POST /api/v1/stickers
  - [ ] Create route
  - [ ] Validate sticker!
  - [ ] Create query
  - [ ] Add test
- [ ] Update a record with PUT /api/v1/stickers/:id
  - [ ] Create route
  - [ ] Validate id
  - [ ] Validate updates
  - [ ] Create query
  - [ ] Add test
- [ ] Delete a record with DELETE /api/v1/stickers/:id
  - [ ] Create route
  - [ ] Validate id
  - [ ] Create query
  - [ ] Add test
