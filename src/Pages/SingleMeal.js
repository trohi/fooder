import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SingleMealComponent from '../Components/SingleMealComponent/SingleMealComponent'
import './SingleMeal.css'

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