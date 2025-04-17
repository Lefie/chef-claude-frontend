import { useState } from "react"
import IngredientsList from "../components.jsx/IngredientsList"
import ClaudeRecipe from "../components.jsx/ClaudeRecipe"
import GetRecipe from "../utils.js"

export default function Main() {
    const [ingredients, setIngredients] = useState([] )

    const [recipe, setRecipe] = useState('')


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function generateRecipe() {
        console.log(ingredients)
        GetRecipe(ingredients).then(data => {
            setRecipe(data)
        })
    }

    return (
        <>
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>            
            </form>

            {ingredients.length >= 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    generateRecipe={generateRecipe}
                />
            }
            
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
        </>
    )
}