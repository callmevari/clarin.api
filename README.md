# Clarín API
This is a test project based on Node.js (with the minimal framework of Express.js) along with a MongoDB instance, and a frontend based on React.js (updated to Hooks) with the Server-Side Rendering (SSR) technique.
The app has webpack and babel configured in the root of the project.

The app's objective is manage the holidays of the years, between 2011 and the selected year by the admin. We recommend to set the YEAR_LIMIT to a value of 2021, because the No-Laborables API seems tu return a simple calculation above 2021.

You need to have Node.js installed on your computer, that's the only requirement. 

# local install
To get the project running locally, you'll need to clone the repo and run the following command inside the project folder: npm install

This'll install all the dependencies of the project.

# .env file
You need to rename the .env.example file to .env. It already has MongoDB Atlas database credentials and the YEAR_LIMIT env var setted as 2021.

# MongoDB 
The project is connected to a test database in MongoDB Atlas to be fast handle. The test database is already empty, so you'll need to run the following command inside the project folder: npm run migrate

This'll run the migration.js and populate the first load of information in the db.

# run the project
You can run the project in development mode or in production mode.
For development mode: open two terminals and run these commands, both in the root of the project. The first if for run the node app, and the second is for generate the webpack bundles.


npm run start-dev

npm run watch


For production mode, is only one command:


npm run start

There are little things changed in production mode, like the UglifyJsPlugin running with webpack and another stuff.
After that, you'll be able to go to and enjoy the app.

# Docker launch
Also, you can run the project with Docker. It's easy as run two commands:

docker build -t clarin.api:v1 .

After create the image, run it with the following command:

docker run -t -d -i -p 5000:5000 --name clarin.api clarin.api:v1

After launch the container, go to http://localhost:5000 and enjoy the app. If the app is not yet served, wait a few minute until npm install all the stuff and the app connect to the database.

# MongoDB with Docker
If you choose the way of Docker launch, you'll need to populate the first load of information in the database through the container. To do that, see the following instructions:

First, execute the command: docker ps

in order to get the CONTAINER ID of the instance you launched before.
Once you got it (it's a hash similar to 9f83cb4b8d82, for example) you need to enter into the container, with the command: 

docker exec -it <container_id> bash

replacing <container_id> with your hash.
Once you are inside the container, run the last command: 

npm run migrate

An wait until the process end to see the application with information.
