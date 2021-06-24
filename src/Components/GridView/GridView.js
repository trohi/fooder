import './GridView.css'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Search } from 'react-bootstrap-icons'

import NavMenu from '../Navbar/Navbar'
import ModalComponent from '../Modal/Modal.js'
import { Link } from 'react-router-dom'
import { Loading, LoadData } from '../../redux/actions.js'
import LoadingComponent from '../LoadingIcon/loading'
import { useSelector, useDispatch } from 'react-redux'

//importing images
import americanCuisineImg from '../../cuisineImages/american-cuisine.jpeg'
import greekCuisineImg from '../../cuisineImages/greek-cuisine.jpg'
import estEuropeanCuisineImg from '../../cuisineImages/eastern-european-cuisine.jpeg'
import indianCuisineImg from '../../cuisineImages/indian-cuisine.jpeg'
import mediterraneanCuisineImg from '../../cuisineImages/mediterranean-cuisine.jpg'
import mexicanCuisineImg from '../../cuisineImages/mexican-cuisine.jpeg'
import thaiCuisineImg from '../../cuisineImages/thai-cuisine.jpeg'
import chineseCuisineImg from '../../cuisineImages/chinese-cuisine.jpg'
import frenchCuisineImg from '../../cuisineImages/french-cuisine.jpg'

function GridView(){
    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const GetData = (cuisineType)=>{
        dispatch(Loading())
        fetch(`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineType}&apiKey=28087beca5d243b28544ddf2484ea4ac`)
        .then(res=>{
            let data = res.json()
            return data
        })
        .then(data=>{
            console.log(data)
            dispatch(LoadData(data.results))
            dispatch(Loading())
        })
        .catch(err=>{
            console.log(err.message)
            dispatch(Loading())
        })
        }

    return(
        isLoading ? <LoadingComponent></LoadingComponent> :
        <Row>
            <NavMenu></NavMenu>
            <ModalComponent></ModalComponent>
            <Col xs={12}>
            </Col>
            <Col xs={12} className="mb-5 heading-paragraph">
                <h3>Choose between different cuisines</h3>
                <h5>and access meals in that grouping</h5>
            </Col>
            <Col xs={12} md={4} className="mt-3">
                <Link to="/cuisine" onClick={()=>GetData('Greek')}>
                    <Card className="grid-card ml-auto">
                        <Card.Img variant="top" src={greekCuisineImg}></Card.Img>
                        <Card.Title>Greek cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4} className="mt-3">
                <Link to="/cuisine" onClick={()=>GetData('American')}>
                    <Card className="grid-card mx-auto">
                        <Card.Img variant="top" src={americanCuisineImg}></Card.Img>
                        <Card.Title>American cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4} className="mt-3">
                <Link to="/cuisine" onClick={()=>GetData('Mediterranean')}>
                    <Card className="grid-card mr-auto">
                        <Card.Img variant="top" src={mediterraneanCuisineImg}></Card.Img>
                        <Card.Title>Mediterranean cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4} className="mt-3">
                <Link to="/cuisine">
                    <Card className="grid-card ml-auto" onClick={()=>GetData('Mexican')}>
                        <Card.Img variant="top" src={mexicanCuisineImg}></Card.Img>
                        <Card.Title>Mexican cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4} className="mt-3">
                <Link to="/cuisine" onClick={()=>GetData('Indian')}>
                    <Card className="grid-card mx-auto">
                        <Card.Img variant="top" src={indianCuisineImg}></Card.Img>
                        <Card.Title>Indian cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4} className="mt-3">
                <Link to="/cuisine" onClick={()=>GetData('Eastern-european')}>
                    <Card className="grid-card mr-auto">
                        <Card.Img variant="top" src={estEuropeanCuisineImg}></Card.Img>
                        <Card.Title>Eastern European cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4} className="mt-3 mb-5">
                <Link to="/cuisine" onClick={()=>GetData('Thai')}>
                    <Card className="grid-card ml-auto">
                        <Card.Img variant="top" src={thaiCuisineImg}></Card.Img>
                        <Card.Title >Thai cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4} className="mt-3 mb-5">
                <Link to="/cuisine" onClick={()=>GetData('Chinese')}>
                    <Card className="grid-card mx-auto">
                        <Card.Img variant="top" src={chineseCuisineImg}></Card.Img>
                        <Card.Title>Chinese cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4} className="mt-3 mb-5">
                <Link to="/cuisine" onClick={()=>GetData('French')}>
                    <Card className="grid-card mr-auto">
                        <Card.Img variant="top" src={frenchCuisineImg}></Card.Img>
                        <Card.Title>French cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
        </Row>
    )
}

export default GridView