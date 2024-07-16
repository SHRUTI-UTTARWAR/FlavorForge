const {Recipe} = require("../Models/Recipe")
const {Savedrecipe} = require("../Models/SavedRecipe")

const add = async(req,res)=>{
    const {title, ist ,ing1 ,ing2 ,ing3 ,ing4 ,qty1, qty2 ,qty3, qty4, imgUrl} = req.body;

    try{

        const recipe = await Recipe.create({
            title, ist ,ing1 ,ing2 ,ing3 ,ing4 ,qty1, qty2 ,qty3, qty4, imgUrl, user:req.user,
 
        });

        res.json({message:"Recipe Created Successfully.. ",recipe})

    }catch(error){

        res.json({message:error})
        
    }
}

const getAllRecipe = async(req,res)=>{
    const recipe = await Recipe.find();
    res.json({recipe})
}

const getRecipeById = async(req,res)=>{
    const id = req.params.id;;
    try{

        let recipe = await Recipe.findById(id);

        if(!recipe) res.json({message:"Recipe not exist"})

        res.json({message:"Recipe by id",recipe})

    }catch(error){
        res.json({message:error})

    }
}

const getRecipeByUserId = async(req,res) =>{
    const userId = req.params.id;;
    try{

        let recipe = await Recipe.find({user:userId});

        if(!recipe) res.json({message:"Recipe not exist"})

        res.json({message:"Recipe by id",recipe})

    }catch(error){
        res.json({message:error})

    }
}

const savedRecipeById = async(req,res)=>{
    const id = req.params.id;

    let recipe = await Savedrecipe.findOne({recipe:id})

    if(recipe) return res.json({message:"recipe already saved"})

    recipe = await Savedrecipe.create({recipe:id})
    res.json({message:"Recipe Saved Successfully.."})
}

const getSavedRecipe = async(req,res)=>{
    const recipe = await Savedrecipe.find()

    res.json({recipe})
}









module.exports = {add , getAllRecipe,getRecipeById,getRecipeByUserId,getRecipeByUserId,savedRecipeById,getSavedRecipe}

