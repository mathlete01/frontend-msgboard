import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

class Main extends Component {
  render() {
    return (
      <Container>
        <Button variant="primary" onClick={this.handleNew}>
          New Topic
        </Button>
        <ListGroup>
          <ListGroup.Item variant="dark">Topics</ListGroup.Item>
          <ListGroup.Item>Your mom by Giacomo Guilzzoni</ListGroup.Item>
          <ListGroup.Item>How's it Going by Marco Botton</ListGroup.Item>
          <ListGroup.Item>This recipe by Mariah Maclachlan</ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
  handleNew = () => {
    this.props.launchNew("new");
  };
}

export default Main;
