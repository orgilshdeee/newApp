import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function AddStudent(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.studentInfo({
      name: e.target.elements.getName.value,
      age: e.target.elements.getScore.value,
    });
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Student
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 name" controlId="">
              <Form.Label>Student Name:</Form.Label>
              <Form.Control name="getName" type="text" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3 score" controlId="">
              <Form.Label>Student score:</Form.Label>
              <Form.Control name="getScore" type="text" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddStudent;
