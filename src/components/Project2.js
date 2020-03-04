import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import uno from "../assets/Project2/1.png";
import dos from "../assets/Project2/2.png";
import tres from "../assets/Project2/3.png";
import cuatro from "../assets/Project2/4.png";
import cinco from "../assets/Project2/5.png";
import seis from "../assets/Project2/6.png";
import siete from "../assets/Project2/7.png";
import ocho from "../assets/Project2/8.png";
import nueve from "../assets/Project2/9.png";
import diez from "../assets/Project2/10.png";
import once from "../assets/Project2/11.png";
import "./Project2.css";

class Projects extends Component {
  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <div className="titles-2">
          {/* <Col className="home">
            <Link to="/">
              <AiOutlineHome size={25} color="black" />
            </Link>
          </Col> */}
          <div className="title-2">
            PROYECTO LOGOTIPO <br />
            HIJO DE LADRÓN
          </div>
          <div className="description-2">
            Propuesta de logotipos para el grupo musical Hijo de Ladrón, grupo
            de 4 integrantes que escriben sobre las problemáticas actuales en
            Latinoamérica tales como, pérdida de identidad, globalización y
            xenofobia; Hijo de Ladrón tiene una fusión de estilo folclórico y
            rock tradicional en sus canciones. Los conceptos claves para el
            desarrollo de las propuestas fueron naturaleza, minimalismo y
            geometría; busqué transmitir la fuerza y delicadeza de sus letras,
            también expresadas en sus armonías de sonidos andinos con el rock.
          </div>
        </div>
        <div>
          <div className="container-images-2">
            <Image
              src={uno}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={dos}
              className="img"
              style={{ width: "24%", height: "24%", margin: "1em" }}
            />
            <Image
              src={tres}
              className="img"
              style={{ width: "20%", height: "20%", margin: "1em" }}
            />
            <Image
              src={cuatro}
              className="img"
              style={{ width: "20%", height: "20%", margin: "1em" }}
            />
            <Image
              src={cinco}
              className="img"
              style={{ width: "24%", height: "24%", margin: "1em" }}
            />
            <Image
              src={seis}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={siete}
              className="img"
              style={{ width: "20%", height: "20%", margin: "1em" }}
            />
            <Image
              src={ocho}
              className="img"
              style={{ width: "35%", height: "35%", margin: "1em" }}
            />
            <Image
              src={nueve}
              className="img"
              style={{ width: "20%", height: "20%", margin: "1em" }}
            />
            <Image
              src={diez}
              className="img"
              style={{ width: "20%", height: "20%", margin: "1em" }}
            />
            <Image
              src={once}
              className="img"
              style={{ width: "20%", height: "20%", margin: "1em" }}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Projects;
