import './Modal.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Search } from 'react-bootstrap-icons'
import { useState } from 'react'

function ModalComponent(){

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
                 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form>
                  <FormControl type="search" placeholder="Search"/>
                </Form>  
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalComponent