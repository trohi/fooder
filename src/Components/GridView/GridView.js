import './GridView.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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

function GridView(){
    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    const GetData =(cuisineType)=>{
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
        <Row className="pt-5">
            <Col xs={12} md={4}>
                <Link to="/cuisine" onClick={()=>GetData('Greek')}>
                    <Card className="grid-card ml-auto">
                        <Card.Img variant="top" src={greekCuisineImg}></Card.Img>
                        <Card.Title>Greek cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine" onClick={()=>GetData('American')}>
                    <Card className="grid-card mx-auto">
                        <Card.Img variant="top" src={americanCuisineImg}></Card.Img>
                        <Card.Title>American cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine" onClick={()=>GetData('Mediterranean')}>
                    <Card className="grid-card mr-auto">
                        <Card.Img variant="top" src={mediterraneanCuisineImg}></Card.Img>
                        <Card.Title>Mediterranean cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine">
                    <Card className="grid-card ml-auto" onClick={()=>GetData('Mexican')}>
                        <Card.Img variant="top" src={mexicanCuisineImg}></Card.Img>
                        <Card.Title>Mexican cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine" onClick={()=>GetData('Indian')}>
                    <Card className="grid-card mx-auto">
                        <Card.Img variant="top" src={indianCuisineImg}></Card.Img>
                        <Card.Title>Indian cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine" onClick={()=>GetData('Eastern-european')}>
                    <Card className="grid-card mr-auto">
                        <Card.Img variant="top" src={estEuropeanCuisineImg}></Card.Img>
                        <Card.Title>Eastern European cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
            <Col xs={12} md={4}>
                <Link to="/cuisine" onClick={()=>GetData('Thai')}>
                    <Card className="grid-card ml-auto">
                        <Card.Img variant="top" src={thaiCuisineImg}></Card.Img>
                        <Card.Title >Thai cuisine</Card.Title>
                    </Card>
                </Link>
            </Col>
        </Row>
    )
}

export default GridView