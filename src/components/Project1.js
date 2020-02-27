import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import uno from "../assets/Project1/1.jpg";
import dos from "../assets/Project1/2.jpg";
import tres from "../assets/Project1/3.jpg";
import cuatro from "../assets/Project1/4.jpg";
import cinco from "../assets/Project1/5.jpg";
import seis from "../assets/Project1/6.jpg";
import siete from "../assets/Project1/7.jpg";
import ocho from "../assets/Project1/8.png";
import nueve from "../assets/Project1/9.png";
import diez from "../assets/Project1/10.png";
import once from "../assets/Project1/11.png";
import doce from "../assets/Project1/12.png";
import trece from "../assets/Project1/13.png";
import "./Project1.css";

class Projects extends Component {
  render() {
    return (
      <Container
        style={{
          paddingTop: "25px"
        }}
      >
        <div className="titles-1">
          {/* <Col className="home">
            <Link to="/">
              <AiOutlineHome size={25} color="black" />
            </Link>
          </Col> */}
          <div className="title-1">
            PROYECTO <br /> EDICIÓN <br />
            PANEGÍRICO
          </div>
          <div className="description-1">
            Producción de proyecto final de diplomado UC de la artista Valentina
            Ferrer, ilustradora, tatuadora y bordadora chilena. Se generó
            Panegírico, concepto que significa discurso que se pronuncia en
            honor a alguien, esta producción del libro contenía y almacenaba las
            reflexiones que dibujó y bordó, sobre todas las personas que han
            pasado en su vida. Durante la producción del libro elaboré la
            edición, fotografía, diagramación, impresión, contacto con
            proveedores, logotipo y elaboración de tarjeta de presentación.
          </div>
        </div>
        <div>
          <div className="container-images-1">
            <Image
              src={uno}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={dos}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={tres}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={cuatro}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={cinco}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={seis}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={siete}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={ocho}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={nueve}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={diez}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={once}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={doce}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
            <Image
              src={trece}
              className="img"
              style={{ width: "20%", margin: "1em" }}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Projects;
