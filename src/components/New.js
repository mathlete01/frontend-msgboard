import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function New() {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control />
          <Form.Label>Name</Form.Label>
          <Form.Control />
          <Form.Label>Post</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default New;
