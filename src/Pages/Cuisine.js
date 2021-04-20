import './Cuisine.css'
import Container from 'react-bootstrap/Container'
import CuisineComponent from '../Components/Cuisine-Component/Cuisine-Component'


function Cuisine(){
    return(
        <Container fluid id="cuisine-component">
            <CuisineComponent></CuisineComponent>
        </Container>
    )
}

export default Cuisine