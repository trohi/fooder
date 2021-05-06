import './Modal.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalComponent