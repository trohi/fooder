import './Cuisine-Component.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { OpenSingleMeal, Loading } from '../../redux/actions.js'

function CuisineComponent(){
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    console.log(data)

    const getSingleMeal = (payload) =>{
        const id = payload.id
        console.log(id, payload.title )
        dispatch(Loading())
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=28087beca5d243b28544ddf2484ea4ac`)
        .then(res =>{
            const mealData = res.json()
            return mealData
        })
        .then(mealData =>{
            console.log(mealData)
            dispatch(OpenSingleMeal(mealData))
            dispatch(Loading())
        })
        .catch(error => {
            console.log(error.message)
            dispatch(Loading())
        })
    }

    return (
        <Row>
            <Col md={5} className="mt-5">
                <ListGroup className="mt-md-5 ml-md-5">
                    {
                        data.map((meal,index) => {
                            return (
                                <Link to="/single-meal" key={index} onClick={()=>getSingleMeal(meal)}>
                                    <ListGroup.Item >{meal.title} </ListGroup.Item>
                                </Link>
                            )
                        })
                    }
                </ListGroup>
            </Col>
        </Row>
    )
}

export default CuisineComponent