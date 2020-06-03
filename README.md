title 

workout-tracker

Summary
This project emphasizes the use of PWA using npm compression, manifest.webmanifest on an existing app that uses MongoDB, mongoose, morgan, and express, to dynamically update a fitness tracking app

To use,
To Demo: follow Herokuapp for demo,
To run: run npm init, npm install to initialize, connect to mongoDB, run using npm start in terminal

This project has the following features:

An Server JS document
This provides the logic for the client side of the app, in this case, it used the backend through Node JS.
Public Folder
Contains client side code
manifest.webmanifest
serviceworker.js
Routes Folder
Contains entry points and api calls for both server side and client side code
Package.JSON
JSON and NPM packages and dependencies

Psuedo code:
Write a new applcation, or convert an existing with the following:
The app should be installable as a PWA
The app should have API routes and HTML routes
Parts of the application should work offline
The application should look the same online or offline

You will need to implement:
manifest.webmanifest
service-worker.js
Implement the compression npm library
Deploy your application to heroku
Test your application with lighthouse

This project has script features of:
Variable declaration area with required entry points
Mongoose schema and seed files
Models for index and workouts
GET, POST, PUT call back functions
Functions for populating tables
manifest.webmanifest and service-worker.js documents

This project features responsive design
Has responsive layout for:
Provided by bootstrap grid
To Execute File:
Open in browser

Features:
File directory:
├── Models │   ├── index.js │   └── workout.js │  ├── Public | └── Images | └── Logo.svg | └── Audit-screenshots | │   └── api.js │ └── exercise.html | └── index.html | └── index.js | └── stats.html | └── stats.js | └── style.css | └── workout-style.css | └── workout.js | └── manifest.webmanifest | └── Service-worker.js | ├── Seeders │   ├── seed.js │ ├── Routes │   └── html-routes.js │   └── api-routes.js │  ├── node_modules │  ├── package.json │ ├── server.js

