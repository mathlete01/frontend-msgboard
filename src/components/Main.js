import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

function Main() {
  return (
    <Container>
      <Button variant="primary">New Topic</Button>
      <ListGroup>
        <ListGroup.Item variant="dark">Topics</ListGroup.Item>
        <ListGroup.Item>Your mom by Giacomo Guilzzoni</ListGroup.Item>
        <ListGroup.Item>How's it Going by Marco Botton</ListGroup.Item>
        <ListGroup.Item>This recipe by Mariah Maclachlan</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default Main;
