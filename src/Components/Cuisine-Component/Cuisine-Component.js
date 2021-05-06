import './Cuisine-Component.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CuisineComponent(){
    const data = useSelector(state => state.data)
    console.log(data)

    return (
        <Row>
            {/* <Col md={5} className="mt-5">
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
            </Col> */} 
            <Col md={5} className="mt-5">
                <ListGroup className="mt-md-5 ml-md-5">
                    {
                        data.map((meal,index) => {
                            return (
                                <Link to="/single-meal" key={index}>
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