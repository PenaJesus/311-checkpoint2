let express = require("express");

//created a router method
let router = new express.Router();

//brings in our controller file
let controller = require("./controllers")

let auth = require("./auth")

//gets all recipes using our imported controller
//specify a query param that only displays the recipes a user liked
//param that specifies a category

router.post("/signup", auth.signup) //works

router.post("/login", auth.login) //works

router.get("/recipes", controller.getRecipes); //works

//gets the recipe with given id
router.get("/recipes/:id", controller.getOneRecipe); //works

//adds a recipe
router.post("/recipes", auth.checkJWT, controller.addRecipe); //works

//updates the recipe with given id
router.put("/recipes/:id", auth.checkJWT, controller.updateRecipe); //works

//deletes the recipe with given id
router.delete("/recipes/:id", auth.checkJWT, controller.deleteRecipe) //works

//*****search for recipe using post method. returning recipe based on content of search ("/recipes/search", controller.searchRecipe)

//adds the recipe the user liked to the database
// router.post("/recipes/liked/:recipeID", auth.checkJWT, controller.likedRecipe)

//displays the categories
router.get("/categories", controller.getCategories)//working

//allows an admin to add categories **MAYBE
// router.post("/categories", auths.CheckJWT, auths.checkAdmin, controller.addCategory)


//this allows the user to add an ingredient
router.post("/ingredient", auth.checkJWT, controller.addIngredient) //works

//This returns a list of ingredients
router.get("/ingredient",auth.checkJWT, controller.getIngredient) //works

//allows the user to remove the like from a recipe by its id
// router.delete("/recipes/liked/:recipeID", auth.checkJWT, controller.removeLike)

//*****search is normally a post



 //allows our router to be used in other files 
module.exports = router