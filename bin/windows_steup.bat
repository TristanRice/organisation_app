@echo off

set /p mongo_uri="Enter the mongo uri: "

IF [%mongo_uri%] == [] GOTO :mongo_uri_not_entered
ELSE GOTO :b

:mongo_uri_not_entered
  set mongo_uri="mongodb+srv://nmika:YeLWO8yJzKeSejpm@cluster0-fch54.mongodb.net/organisation_app"

:b
  setx MOGNO_URI %mongo_uri%

setx SITE_KEY "6LeYjqkUAAAAAGxYAm6Ta8RhR3oY8gLnJolmjiMP"

echo "done"

@echo off
