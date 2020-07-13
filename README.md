# Clarín API
This is a test project based on Node.js (with the minimal framework of Express.js) along with a MongoDB instance, and a frontend based on React.js (updated to Hooks) with the Server-Side Rendering (SSR) technique.
The app has webpack and babel configured in the root of the project.

The app's objective is manage the holidays of the years, between 2011 and the selected year by the admin. We recommend to set the YEAR_LIMIT to a value of 2021, because the No-Laborables API seems tu return a simple calculation above 2021.

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
