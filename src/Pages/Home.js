import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GridView from '../Components/GridView/GridView'
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