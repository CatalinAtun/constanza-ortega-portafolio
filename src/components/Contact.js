import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Project1.css";

class Contact extends Component {
  render() {
    return (
      <Container fluid style={{ textAlign: "center" }}>
        <div style={{ paddingTop: "50px" }}></div>
        Constanza Ortega <br />
        Diseñadora industrail y UX
        <br />
        +56979912143
      </Container>
    );
  }
}

export default Contact;
