/* import Carousel from 'react-bootstrap/Carousel' */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'/* 
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card' */
import CarouselComponent from '../Components/Carousel/Carousel'
import GridView from '../Components/GridView/GridView'
import './Home.css'
import { useDispatch } from 'react-redux'
import { Loading } from '../redux/actions'
import Button from  'react-bootstrap/Button' 


function HomePage(){
    const dispatch = useDispatch()
    const ll =()=>{
        console.log("EVO JESAM LI JA MAHNIT BGT")
    }
    return (
        <Container fluid id="container">
            <Row>
                <Button onClick={()=>dispatch(Loading())} >'EREE</Button>
                <GridView></GridView>
            </Row>
        </Container>        
    )
}

export default HomePage