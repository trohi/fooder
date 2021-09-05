import './Cuisine-Component.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { OpenSingleMeal, Loading } from '../../redux/actions.js'

function CuisineComponent(){
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)

    const history = useHistory()

    const goBackHandle = () =>{
        history.goBack()
    }

    const getSingleMeal = (payload) =>{
        const id = payload.id

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
            <Col xs={12} md={12} className="my-md-5-md-5 mt-md-5">
              <Button variant="dark" className="backButton" onClick={()=>goBackHandle()}> <span className="fa-stack fa-md"><i className="fa fa-long-arrow-left fa-stack-2x" ></i></span> </Button>
            </Col>
            <Col md={5}>
                <ListGroup className="mt-md-5 ml-md-5">
                    {
                        data.map((meal,index) => {
                            return (
                                <Link 
                                to={
                                    {
                                      pathname:`/single-meal/${meal.id}`,
                                      store:{
                                        from:'/root'
                                      }
                                    }
                                }
                                key={index} 
                                onClick={()=>getSingleMeal(meal)}>
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