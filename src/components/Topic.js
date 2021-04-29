import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Post from "./Post";

function Topic() {
  return (
    <Container>
      <Button variant="link">Back to Topics</Button>
      <Button variant="primary">Reply</Button>
      <Post />
      <Post />
    </Container>
  );
}

export default Topic;
