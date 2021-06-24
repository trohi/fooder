import './Modal.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import FormControl from 'react-bootstrap/FormControl'
import Badge from 'react-bootstrap/Badge'
import { Search } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function ModalComponent(){
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (event) =>{
    event.stopPropagation()
     if(event.target.style.backgroundColor !== "green"){
      event.target.style.backgroundColor="green"
    } else {
      event.target.style.backgroundColor="#6c757d"
    } 
  }

    return(
        <>
        <div className="SearchIconWrapper">
            <Button className="searchIcon mt-4" variant="outline-danger" onClick={handleShow}>
                <Search size={25}></Search>
            </Button>
        </div>

        <Modal
          show={show}
          onHide={handleClose} 
          size="lg" 
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                 <Form>
                    <FormControl type="search" placeholder="Search"/>
                  </Form>  
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <h3>Diet</h3>
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Gluten free</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Ketogenic</Badge></h4>
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Vegetarian</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Vegan</Badge></h4> 
              <hr></hr>
              <h3>Type</h3>
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Main course</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Side dish</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Dessert</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Appetizer</Badge></h4>
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Salad</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Bread</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Breakfast</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Soup</Badge></h4>
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Beverage</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Souce</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Marinade</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Seafood</Badge></h4>
              <hr></hr>
              <h3>Intolerances</h3>
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Dairy</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Egg</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Gluten</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Grain</Badge></h4>
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Peanut</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Seafood</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Sasame</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Shellfish</Badge></h4>
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Soy</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Sulfite</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Tree nut</Badge></h4> 
              <h4><Badge variant="secondary" onClick={handleClick} className="mx-1">Wheat</Badge></h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalComponent