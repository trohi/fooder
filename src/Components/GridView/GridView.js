import './GridView.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

function GridView(){
    return(
        <Row className="pt-5">
            <Col xs={12} md={4}>
                <Link to="/cuisine">
                    <Card className="grid-card ml-auto">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1. 2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"></Card.Img>
                        <Card.Title>Italian coussine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine">
                    <Card className="grid-card mx-auto">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel3Sm32tvKaRlD8IIIF44msr90jz-dDSeJhV0OH4QsUDNQhZ7rQjqXNb2yBRvNXC4cu8&usqp=CAU"></Card.Img>
                        <Card.Title>Italian coussine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine">
                    <Card className="grid-card mr-auto">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel3Sm32tvKaRlD8IIIF44msr90jz-dDSeJhV0OH4QsUDNQhZ7rQjqXNb2yBRvNXC4cu8&usqp=CAU"></Card.Img>
                        <Card.Title>Italian coussine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine">
                    <Card className="grid-card ml-auto">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1. 2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"></Card.Img>
                        <Card.Title>Italian coussine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine">
                    <Card className="grid-card mx-auto">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1. 2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"></Card.Img>
                        <Card.Title>Italian coussine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine">
                    <Card className="grid-card mr-auto">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1. 2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"></Card.Img>
                        <Card.Title>Italian coussine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine">
                    <Card className="grid-card ml-auto">
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1. 2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"></Card.Img>
                        <Card.Title >Italian coussine</Card.Title>
                    </Card>
                </Link>
            </Col>
        </Row>
    )
}

export default GridView