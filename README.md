# Pharmacy Management System

# Introduction

The system will manage all the pharmaceutical operations to provide comprehensive pharmacy services. Basic features of this system would be managing the drug inventory, patient medical profiles, drug dispensing and prescription management. The main users of this system would be the chief pharmacist, assistant pharmacists, and doctors. They have to login to the system in order to use the services available.

The main benefits of this system are reducing manual data entry, reducing human errors, saves time, and increased efficiency. The system is able to generate customized reports on each of the services when required.

# Technologies Used

AngularJS for the front end
Github 
MongoDB ,Mongoose Library,  ExpressJS and NodeJS for the backend.
JetBrains WebStorm IDE

Backend is an API running JSON based web services. The front-end application communicates with the back end only using these web services. 

# Testing Steps

Prerequisites
----------------
             1. Mongodb installed and running
             2. Nodejs installed

Running the app 
--------------   
1. In app directory , open cmd and type npm install (to install the dependencies defined in package.json file)
1. In app directory , open cmd and type node server.js and go to the browser and type localhost:3000 to run the application.  

Deploying steps
---------------

1. Package the app directory into the production system excluding "node modules" directory.
2. On your production system, run  npm install in cmd to install dependencies.  
                                   -----------
3. And finally type NODE_ENV=production node server.js in cmd.
      
