
import {forwardRef} from "react";

const IngredientsList = forwardRef((props, ref) => {

    const itemList = props.ingredients.map((item,index) => (
        <li key={index}>
            {item}{" "}
            <button
                className="remove-ingredient"
                onClick={() => props.removeIngredient(index)}
            >-</button>
        </li>
    ));

    return(
        <section className="output">
                <h2>Ingredients:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {itemList}
                </ul>
            
                {props.ingredients.length > 3 && (
                    <div className="get-recipe-container">
                        <div className="recipe-content" ref={ref}>
                            <h3>Recipe in a minute? Well, we do that here!!</h3>
                            <p>Generate your delicious recipe with the ingredients on hand</p>
                            <button 
                             className="getRecipe"
                             onClick={props.getRecipe}>
                            Get a recipe</button>
                        </div>
                    </div>
                )}
            </section>
    );
    
});
export default IngredientsList;