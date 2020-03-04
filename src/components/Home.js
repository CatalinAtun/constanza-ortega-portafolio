import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button, Image } from "react-bootstrap";
import Modal from "./Modal.js";
import "./Home.css";
import Folder from "./Folder";
import folder from "../assets/folder.png";
import cv from "../assets/cv.png";
import sticker from "../assets/sticker.png";
import world from "../assets/world.png";
import txt from "../assets/txt.png";
import video from "../assets/fondo5.mp4";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <video id="myVideo" loop autoPlay>
          <source src={video} type="video/mp4" />
        </video>
        <div className="margin"></div>
        <div className="project1">
          <Modal photo={txt} typeModal="about-me" name="Sobre mi.txt" />
          <Folder path="/project1" name="Proyecto Editorial" image={folder} />
        </div>
        <div className="project2">
          <Modal photo={cv} typeModal="cv" name="CV.pdf" />
          <Folder path="/project2" name="Proyecto Logotipo" image={folder} />
        </div>
        <div className="project3">
          {/* <Folder
            image={world}
            style={{ width: "90px", marginTop: "1em" }}
            name="Contacto"
            path="/contact"
          /> */}
          <Modal photo={world} typeModal="contact" name="Contacto" />
          <Folder path="/project3" name="Proyecto de titulo" image={folder} />
        </div>
        <div className="project4">
          <Image src={sticker} style={{ width: "120px" }} />
          <Folder path="/project4" name="Proyecto UX" image={folder} />
        </div>
      </Container>
    );
  }
}

export default Home;
