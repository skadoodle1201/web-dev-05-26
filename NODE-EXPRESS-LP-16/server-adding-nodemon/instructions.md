# Adding Nodemon

What/Problem it solves ?

We need to manually restart server/application if any changes occurs.
Nodemon watch the files and restart the server on any change in file.

## Instructions

1. Install nodemon using npm install either globally in the system or in the application.

   [->] Global `npm install -g nodemon`

   [->] Local `npm install nodemon`

2. Update the start/dev script in the package.json like `"dev": "nodemon index.js"`
