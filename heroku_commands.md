heroku login # login once
heroku create [name] # Initializes heroku app and adds remote
heroku addons:create heroku-postgresql # add a postgres db addon to your heroku app
heroku logs [--tail] # Shows heroku server terminal
heroku pg:psql # connect to heroku addon database server
heroku config # shows heroku environment variables

- heroku config:set clown=party # set a config variable
  git push heroku master # deploy latest code to heroku
  heroku open # open url in browser
  heroku run knex migrate:latest # run migrations on production db
  heroku run knex seed:run # run seeds on production db
