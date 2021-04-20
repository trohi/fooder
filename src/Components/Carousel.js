import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import './Carousel.css'

function CarouselComponent(){
    return(
        <Carousel>
        <Carousel.Item>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1. 2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80">
                </Card.Img>
                <Card.Title>Indian coussine</Card.Title>
                <Card.Text>Ex est ullamco Lorem eiusmod proident eiusmod nulla enim. Lorem officia adipisicing in adipisicing reprehenderit. Officia aute et cupidatat consectetur eu aliqua sint deserunt sit. Sunt dolore sint consectetur aliqua. Ipsum duis Lorem officia tempor amet mollit cillum nulla eu laboris anim.</Card.Text>
            </Card>
        </Carousel.Item>
        <Carousel.Item>
            <Card>
                <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80">
                </Card.Img>
                <Card.Title>Greek coussine</Card.Title>
                <Card.Text>Ullamco et labore mollit labore laborum cupidatat ad fugiat in incididunt. Ut proident culpa ad non ipsum ad magna nulla esse deserunt ullamco cupidatat. Quis dolor proident quis deserunt id. Do sunt ullamco pariatur duis irure in fugiat duis non reprehenderit proident.</Card.Text>
            </Card>
        </Carousel.Item>
        <Carousel.Item>
            <Card>
                <Card.Img variant="center" src="data:image/jpeg;base64,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"></Card.Img>
                <Card.Title>Italian cusine</Card.Title>
                <Card.Text>Fugiat dolore nisi voluptate veniam sit cupidatat sit. Qui ullamco veniam et nostrud do aliquip. Et id velit consequat cupidatat excepteur dolor adipisicing minim nostrud tempor. Cillum deserunt mollit eu eiusmod et officia fugiat veniam fugiat ea dolore eu nisi exercitation. Mollit nostrud veniam enim anim ad et. Anim ea ut ex proident pariatur sunt non esse sit.</Card.Text>
            </Card>
        </Carousel.Item>
    </Carousel>
    )
}

export default CarouselComponent