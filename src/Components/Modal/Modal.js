import './Modal.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
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
                    <FormControl type="text" placeholder="Search"/>
                  </Form>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Include tags</h4>
              <h4><Badge variant="secondary">Seafood</Badge></h4>
              <h4><Badge variant="secondary">Vegetarian</Badge></h4>
              <h4><Badge variant="secondary">Meat</Badge></h4>
              <h4><Badge variant="secondary">Pasta</Badge></h4>
              <h4><Badge variant="secondary">Vegetable</Badge></h4>
              <h4><Badge variant="secondary">Fruit</Badge></h4>
              <h4><Badge variant="secondary">Salads</Badge></h4>
              <h4><Badge variant="secondary">Seafood</Badge></h4>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalComponent