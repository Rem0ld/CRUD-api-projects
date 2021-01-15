> Created following the tutorial provided by [The Coding Garden](https://www.youtube.com/playlist?list=PLM_i0obccy3uwR6ZYa7QE03xDRAqs4Aso) a wonderful teacher/youtuber!

# Node.js Express JSON API - CRUD Projects

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
- [x] Create database (command createdb)
- [x] Initialize knex project
  - [x] Install knex and pg (npm command)
  - [x] Create knexfile.js (knex init then clean up file make sure to be connected to right database)
- [x] Create projects table migration (knex migrate:make "name of table" knex migrate:latest)
- [x] Seed projects table with sample data (knex seed:make 01_project knex seed:run)
- [x] Convert Express App to JSON API
  - [x] Remove view rendering
  - [x] Remove routes folder
  - [x] Remove static serve and public folder
  - [x] Update error handler
- [x] Add api folder and create/mount router
- [x] Connect to the database
  - [x] Create database connection file
  - [x] Create a queries file
- [x] List all records with GET /api/v1/projects
  - [x] Create query
  - [x] Create route
- [x] Setup tests
  - [x] Install mocha, chai and supertest
  - [x] Add a test database connection
  - [x] Add npm test script
    - [x] Drop/Create database
  - [x] Create before
    - [x] Run migrations/seeds on test db
- [x] Make sure the tests are working!
- [x] List all records with GET /api/v1/projects
  - [x] Add test
- [x] Show one record with GET /api/v1/projects/:id
  - [x] Validate id
  - [x] Create query
  - [x] Create route
  - [x] Add test
- [x] Create a record with POST /api/v1/projects
  - [x] Create route
  - [x] Validate projects!
  - [x] Create query
  - [x] Add test
- [x] Update a record with PUT /api/v1/projects/:id
  - [x] Create route
  - [x] Validate id
  - [x] Validate updates
  - [x] Create query
  - [x] Add test
- [x] Delete a record with DELETE /api/v1/projects/:id
  - [x] Create route
  - [x] Validate id
  - [x] Create query
  - [x] Add test
  
  
  
  
  > Created following the tutorial provided by [The Coding Garden](https://www.youtube.com/playlist?list=PLM_i0obccy3uwR6ZYa7QE03xDRAqs4Aso) a wonderful teacher/youtuber!
