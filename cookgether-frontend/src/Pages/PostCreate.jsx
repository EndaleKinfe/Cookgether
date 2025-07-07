import { useRef, useState } from "react";
import { useStateContext } from "../Context/ContextProvider";
import axiosClient from "../axios-client";

const PostCreate = () => {
    const {user} = useStateContext();
    const [ingredients, setIngredient]  = useState([]);
    const [instructions, setInstructions] = useState([]);
    const title = useRef();
    const desc = useRef();
    const img = useRef();
    const amount = useRef();
    const ingre = useRef();
    const inst = useRef();
    function handleingredients(){
        const data = {
            ingredient: ingre.current.value,
            amount: amount.current.value,
            description: " hi this is description",
            post_id: 0
        }
        ingre.current.value = '';
        amount.current.value = '';

        setIngredient([...ingredients,data])
    }
    function handleinstructions(){
        const data = {
            instruction: inst.current.value,
            post_id: 0
        }
        inst.current.value = '';
        setInstructions([...instructions, data])
    }
    function handlePost(e){
        e.preventDefault();
        const postpayload = {
            user_id: user.id,
            title: title.current.value,
            description: desc.current.value 
        } 

        // with token auth
        axiosClient.post("/posts", postpayload)
        .then((response)=>{
            const id = response.data.data.id
            if(id){
                
                
                if(ingredients.length > 0
                ){
                    const nextIngred = ingredients.map((ingred)=>{
                       
                        return {
                            ...ingred,
                            post_id: id
                        }
                        
                    });
                    axiosClient.post("/ingredients", nextIngred);
                }
                if(instructions.length > 0){
                        const nextInstr = instructions.map((instr)=>{
                        return {
                            ...instr,
                            post_id: id
                        }
                    });
                    
                
                    axiosClient.post("/instructions", nextInstr);
                    
                }
                if(img != ""){
                    axiosClient.post("/images",{
                        image_url: img.current.value,
                        imagable_id: id,
                        imagable_type: "App\\Models\\Post",
                    })
                    console.log("tobe img")
                }
            }
        })
        .catch(err=>{
            const response = err.response;
            if (response && response.status ===  422){
                console.log(response.data.errors);
            }
        })
       
    }
    return(
    <>
        <div className="w-3/4 md:w-[30rem] mx-auto my-24 rounded-xl bg-yellow-400 px-3 md:px-12 py-12">
            <h1 className="text-center text-5xl">Add new Post</h1>
            <form onSubmit={handlePost} className=" flex flex-col items-center *:mt-7 *:px-3 *:py-1.5 *:rounded-lg *: *:w-5/6"> 
                <input  ref={title} type="text" name="title"  placeholder="recipe title"/>
                <input  ref={desc} type="text" name="desc"  placeholder="description of the recipe" />
                <h3>Ingredients</h3>
                <ul>
                {ingredients&& ingredients.map((ing)=>{
                    return(
                        <li>
                            {ing.ingredient} - {ing.amount}
                        </li>
                    )
                })}
                </ul>
                <input ref={ingre} type="text" name="ingredient" id="ing" placeholder="ingredient name"/>
                <input ref={amount} type="text" name="amount" id="am" placeholder="ingredient amount"/>
                <div onClick={handleingredients} className="bg-black text-white p-2">Add Ingredients</div>
                <h3>Instructions</h3>
                <ul>
                {instructions&& instructions.map((ins)=>{
                    return(
                        <li>
                            {ins.instruction}
                        </li>
                    )
                })}
                </ul>
                <input ref={inst} type="text" name="instruction" id="ing"  placeholder="instruction for the recipe"/>
                <div onClick={handleinstructions} className="bg-black text-white p-2">Add Instructions</div>
                <input ref={img} type="text" name="image" id="im" placeholder="image Url"/>
                <button type="submit" className="bg-black text-white p-2">post</button>
            </form>
        </div>
    </>
    )
}

 
export default PostCreate;