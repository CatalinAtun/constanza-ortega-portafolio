import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import cv from "../assets/cv.jpg";
import "./CV.css";

class CV extends Component {
  render() {
    const { onHide } = this.props;
    return (
      <div>
        {/* <p>aquí va el cv, falta la imageeeen</p> */}
        <div className="bar">
          <button className="close" onClick={onHide}></button>
          <button className="close-disabled"></button>
          <button className="close-disabled"></button>
          <p className="name-file">CV.jpg</p>
        </div>
        <Image
          src={cv}
          className="img"
          style={{ width: "100%", padding: "0" }}
        />
      </div>
    );
  }
}

export default CV;
