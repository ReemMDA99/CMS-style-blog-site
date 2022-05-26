# CMS-style-blog-site

## Description

This project uses the Model-View-Controller (MVC) paradigm to create a blog-style website where developers can create an account, edit their information, make posts, edit posts, delete comments and comment on other user's posts.

## License

Licensed under the MIT 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshots
![image](./assets/Picture1.png)
![image](./assets/Picture2.png)
![image](./assets/Picture3.png)

## Technologies Used

- JavaScript ES6
- Node.js
- Express.js
- dotenv
- MySQL
- Sequelize
- bcrypt
- handlebars.js
- Heroku
- JawsDB
- jest
- Insomnia

## Npm packages installed

- npm init
- npm install mysql2: to create database 
- npm install sequelize: to connect to a MySQL database for your Models
- npm install express: to create API for your Controllers.
- npm install express-handlebars: to use Handlebars.js for your Views
- npm install jest: to test the application
- npm install dotenv: to use environment variables
- npm install bcrypt: to hash passwords
- npm install express-session : The express-session (Links to an external site.) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session.
- npm install connect-session-sequelize: to add authentication.
- npm install --save-dev nodemon: nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.


## User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions


## Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments



## Submission
- The URL of the functional, deployed application on Heroku: https://cms-style-tech-blog-reem.herokuapp.com/

- The URL of the GitHub repository: https://github.com/ReemMDA99/CMS-style-blog-site