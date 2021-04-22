import './Cuisine-Component.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

function CuisineComponent(){
    return (
        <Row>
            <Col md={5} className="mt-5">
                <ListGroup className="mt-md-5 ml-md-5">
                    <Link to="/signle-meal">
                        <ListGroup.Item>Pasta</ListGroup.Item>
                    </Link>
                    <Link to="/signle-meal">
                        <ListGroup.Item>Pasta</ListGroup.Item>
                    </Link>
                    <Link to="/signle-meal">
                        <ListGroup.Item>Pasta</ListGroup.Item>
                    </Link>
                    <Link to="/signle-meal">
                        <ListGroup.Item>Pasta</ListGroup.Item>
                    </Link>
                    <Link to="/signle-meal">
                        <ListGroup.Item>Pasta</ListGroup.Item>
                    </Link>
                </ListGroup>
            </Col>
        </Row>
    )
}

export default CuisineComponent