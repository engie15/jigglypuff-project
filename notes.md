# package.json
- original auth-plates boilerplate package.json has the following under scripts:
    "h:deploy": "git push heroku master",
    "h:migrate": "heroku run knex migrate:latest",
    "h:rollback": "heroku run knex migrate:rollback",
    "h:seed": "heroku run knex seed:run"
  But removed from ours. May need when deploy to heroku?