import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CarouselComponent from '../Components/Carousel'
import GridView from '../Components/GridView'
import './Home.css'


function HomePage(){
    return (
        <Container fluid id="container">
            <Row>
                <GridView></GridView>
            </Row>
        </Container>        
    )
}

export default HomePage