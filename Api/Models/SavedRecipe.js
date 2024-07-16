const mongoose = require("mongoose")

const savedRecipeSchema = new mongoose.Schema({
    recipe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"recipe"

    }
})

const Savedrecipe = new mongoose.model("SavedRecipe",savedRecipeSchema)

module.exports = {Savedrecipe}