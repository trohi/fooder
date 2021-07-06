import './SingleMealComponent.css'
import parse from 'html-react-parser'
import Col from 'react-bootstrap/Col'                 
import Button from 'react-bootstrap/Button'           
import Accordition from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'
import { Clock, Person, ArrowRight } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import {useLocation, useHistory} from 'react-router'

function SingleMealComponent(){

    const meal = useSelector(state => state.singleMeal)
    const location = useLocation()
    const history = useHistory()

    const goBackHandle = () => {
        history.goBack()
    }

    return (
        <>
        <Col xs={12} md={12} className="my-md-5-md-5 mt-md-5">
        <Button variant="dark" className="backButton" onClick={()=>goBackHandle()}> <span className="fa-stack fa-md"><i className="fa fa-long-arrow-left fa-stack-2x" ></i></span> </Button>
        </Col>
        <Col xs={12} md={6} id="singleMealCol" className="my-md-4 ml-md-5">
            <h4 className="mt-5">{meal.title}</h4>
            <p>Ready in {meal.readyInMinutes} minutes <Clock className="clockIcon"></Clock><br></br> Servings for {meal.servings} <Person className="personIcon"></Person></p>
            <div className="mb-3">
                        <img className="mealImage" src={meal.image}></img>
                    </div>
            <Accordition defaultActiveKey="1">
            <Accordition.Toggle as={Button} eventKey="1" variant="outline-light" className="my-3">Summary</Accordition.Toggle>
                <Accordition.Collapse eventKey="1">
                    <div className="mealSummary">
                        {
                            parse(`${meal.summary}`)
                        }
                    </div>
                </Accordition.Collapse>
                <hr></hr>
                <Accordition.Toggle as={Button} eventKey="0" variant="outline-light" className="my-3" >Ingredients</Accordition.Toggle>
                <Accordition.Collapse eventKey="0">
                    <div className="mealIngredients">
                        <ul>
                            {
                             meal.extendedIngredients ?  meal.extendedIngredients.map((ingredient,index)=>{
                                    return <li key={index}>{ingredient.nameClean} {ingredient.original}</li>
                                }) : <div></div>
                            }
                        </ul>
                    </div>
                </Accordition.Collapse>
                <hr></hr>
                 <Accordition.Toggle as={Button} eventKey="3" variant="outline-light" className="my-3">Instructions</Accordition.Toggle>
                <Accordition.Collapse eventKey="3" data-parent="#" >
                    <div className="mealInstructions">
                        {
                            parse(`${meal.instructions}`)
                        }
                    </div>
                </Accordition.Collapse> 
                <hr></hr>
            </Accordition>
        </Col>
        <Col xs={12} md={3}>
        
        </Col>
        </>
    )
}

export default SingleMealComponent