# Pharmacy Management System
for a hospital

Prerequisites
----------------
             1. Mongodb installed and running
             2. Nodejs installed

Running the app 
--------------   
1. In app directory , open cmd and type npm install (to install the dependencies defined in package.json file)
1. In app directory , open cmd and type node server.js and go to the browser and type localhost:3000 to run the application.  
                                        --------------

Deploying steps
---------------

1. Package the app directory into the production system excluding "node modules" directory.
2. On your production system, run  npm install in cmd to install dependencies.  
                                   -----------
3. And finally type NODE_ENV=production node server.js in cmd.
                    ----------------------------------
