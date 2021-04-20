import './Cuisine-Component.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

function CuisineComponent(){
    return (
        <Row>
            <Col md={5} className="mt-5">
                <ListGroup className="mt-md-5 ml-md-5">
                    <ListGroup.Item>Pasta</ListGroup.Item>
                    <ListGroup.Item>Pasta</ListGroup.Item>
                    <ListGroup.Item>Pasta</ListGroup.Item>
                    <ListGroup.Item>Pasta</ListGroup.Item>
                    <ListGroup.Item>Pasta</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    )
}

export default CuisineComponent