# 311-checkpoint2
Second checkpoint for 311

***Grading Rubric***
* 15pts Database Layout Diagram - This can be done using Excel, Pen and Paper, UML
diagrams, or any other way that includes the following.
○ What tables you have
○ What kind of data the tables hold
○ How are the tables related to each other
○ The appropriate "CREATE TABLE" sql statements that can be used to create
your tables
* COMPLETED

* 15pts Listing of your routes and what they mean. Please include all the routes that you
plan to support and what the expected input and output of each route is. Some
examples:
○ GET /recipes - This route returns an array of recipe objects that hold the id,
name and description of each recipe. This route does not need any input
○ GET /recipes/:recipeId - This route returns a single recipe object that includes
all the details of a recipe including the list of ingredients and instructions. This
route takes in the recipe id as a path parameter.
○ POST /recipe - This route adds a new recipe to the database. It takes in the
details of the recipe as input in the request body. The body of the recipe
includes the name and the description of the recipe.
○ PUT /recipe/:recipeId - This route updates an existing recipe. It takes in the id
of the recipe to update as a path parameter, and the new recipe name and
description in the request body.
○ DELETE /recipe/:recipeId - This route deletes an existing recipe. It takes in the
id of the recipe to delete as a path parameter.
* Completed


* 10pts Implement User Creation/Registration - Provide a mechanism to create users.
○ User authentication info (password/password hash) can be stored in your own
database or using an Auth0 provider
○ You must have a route that can be used to add users, such as /createUser,
/register, /signUp, etc ... 
* Completed

* 10pts Show that you have user authentication set up -
○ Note that your routes do not need to all be protected and require user
authentication. But there needs to be at least one example of a route protected
by user authentication.
○ This is done through your middleware
○ This can be done using either Auth0 provider or your own User password store
○ Your must have a login route
* completed

* 10pts have your backend express code deployed to a cloud provider

* 10pts have your database deployed to a cloud provider 
* COMPLETED

* 10pts Presentation - Present your application idea, database layout and design on the
last day of class for discussion. You do not need to show your routes all working.
*COMPLETED

* 20pts Implementation - Have the majority of your routes implemented. Please
implement at least 75% of the routes that you think you will need for your design
* COMPLETED 83% of routes

*********
Core Functionality

1: User should be able to create, update, and delete a recipe along with getting a list of other created recipes. Only the user that published the recipe is allowed to delete/update the recipe.

2: User should be able to get a list of ingredients along with deleting, updating, and adding ingredients. The database will hold repeat ingredients in case a user adds an ingredient that is already in DB...enhance ingredient table if we want to have an ingredient page

3: User should be able to get a list of categories to help find a certain recipe. Filtered by category tags from DB

4: user should be able to login and sign up for the application

5: user should be able to search for recipes. Searching by name of ingredient. If searched chicken then chicken recipes should pop up

FEEDBACK

For the search feature think of maybe starting by searching with recipe name for simplicity. 

