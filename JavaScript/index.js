// THIS IS A SERVER //
// package.json is your project's configuration 

// WHY using Node?
    // To create a server i.e an app that runs and listens for requests (people who want to connect to this server)
    // The server is the central repository of the data of my app

// We are going to use Express, a node package, to create our web server

// npm manages our node packages. You need package.json to use npm 
// package.json is a configuration file for our project. It contains all the metadata for our project, including the necessary node package

// Importing express node package
const express = require('express');
const dataStore = require('nedb');
const cors = require('cors')
const axios = require('axios')

// A web app that call the whole express library as a function through a var called app
const app = express();

// Listen for requests at a specific port (address num)
// Provide a callback function i.e the callback that happens when the server is listening
app.listen(3000, () => console.log('listening at 3000'));

// Our server's functionality
    // 1. Serve webpages (eg: index.html)
    // 2. Save data into the database
    // 3. Retrieve data from the database
    // 4. Authentication (control client's acess to files and content)

// 1. Serve webpages
app.use(express.static('public'));
app.use(express.json({limit: '100mb'}));
app.use(cors());

// Routing
app.post('/api', (request, response) => {
    console.log(request.body);
    response.json({
        status: "success!",
        fname: request.body['fname'],
        lname: request.body['lname']
    })
});

// 2. Saving data into a db
const database = new dataStore('database.db')
database.loadDatabase()
database.insert({
    fname: "Beatrice",
    lname: "Ndalichako"
})