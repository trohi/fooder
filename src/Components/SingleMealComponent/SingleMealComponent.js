import Col from 'react-bootstrap/Col'
import './SingleMealComponent.css'
import { useSelector } from 'react-redux'

function SingleMealComponent(){
    const meal = useSelector(state => state.singleMeal)
    return (
        <>
        <Col xs={12} md={6} id="singleMealCol" className="mt-md-5 ml-md-5">
            <h4 className="mt-5">{meal.title}</h4>
            <p>Ready in {meal.readyInMinutes} minutes <br></br> Servings for {meal.servings} </p>
            <div className="singleMealParagraph">
                <ul>
                    {meal.extendedIngredients.map(ingredient=>{
                        return <li>{ingredient.nameClean} {ingredient.original}</li>
                    })}
                </ul>
            </div>
            <hr></hr>
            <div>{meal.summary}.</div>
            <hr></hr>
            <div></div>
        </Col>
        <Col xs={12} md={3}>
            <img src={meal.image}></img>
        
        </Col>
        </>
    )
}

export default SingleMealComponent