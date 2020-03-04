import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Project1.css";

class Contact extends Component {
  render() {
    const { onHide } = this.props;
    return (
      <div>
        <div className="bar">
          <button className="close" onClick={onHide}></button>
          <button className="close-disabled"></button>
          <button className="close-disabled"></button>
          <p className="name-file">Contacto</p>
        </div>
        <div style={{ textAlign: "center", margin: "2em" }}>
          Constanza Ortega <br />
          Diseñadora industrial y UX
          <br />
          +56979912143
        </div>
      </div>
    );
  }
}

export default Contact;
