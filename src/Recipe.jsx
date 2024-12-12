import ReactMarkdown from "react-markdown"

export default function Recipe(props){
    const recipeContent = typeof props.recipe === "string" ? props.recipe : "No recipe available.";
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>We recommend:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
