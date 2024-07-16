const express = require("express")
const { add, getAllRecipe, getRecipeById, getRecipeByUserId, savedRecipeById, getSavedRecipe } = require("../controllers/recipe")

const {Authenticate} = require("../middlewares/auth")


const router = express.Router()

//create recipe
router.post('/add',Authenticate,add)

//get all recipe
router.get("/",getAllRecipe)

//get all saved recipe
router.get('/saved',getSavedRecipe)


//get recipe by id
router.get("/:id",getRecipeById)

//get recipe by userid
router.get('/user/:id',getRecipeByUserId)

//savedRecipe by id
router.post('/:id',Authenticate,savedRecipeById)





module.exports = router;


