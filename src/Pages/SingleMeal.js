import './SingleMeal.css'
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'               
import SingleMealComponent from '../Components/SingleMealComponent/SingleMealComponent' 

function SingleMeal(){
    return(
        <Container fluid id="singleMealWrapper">
            <Row>
                <SingleMealComponent></SingleMealComponent>
            </Row>
        </Container>
    )
}

export default SingleMeal