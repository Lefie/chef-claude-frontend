const developemnt = `http://localhost:8080`
const deployed = ``

export default async function GetRecipe(ingredientsArr) {

    try {
        console.log(ingredientsArr,"before url")
        const url = `https://chef-claude-backend-production.up.railway.app/api/get_recipe`
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(ingredientsArr)
        }
        
        const res = await fetch(url, options)
        if (!res.ok) {
            console.log("response not ok, status", res.status)
            return null
        }

        const data = await res.json();
        console.log(data.recipe);
        return data.recipe;

    }catch(err){
        console.log("in catching error")
        throw new Error(err)
    }
}