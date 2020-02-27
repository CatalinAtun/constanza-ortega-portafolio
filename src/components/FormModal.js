import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import uno from "../assets/Project1/1.jpg";
import "./Project1.css";

class FormModal extends Component {
  render() {
    return (
      <Container fluid>
        <p>
          esto es foto o k <br /> Diseñadora UX de la Universidad Finis Terrae.
          Estudié diseño industrial en la Universidad Diego Portales, ya que
          llamó mi atención el desarrollo de proyectos y productos que ayudan a
          visibilizar y solucionar problemas latentes en la sociedad. La
          especialidad en UX Design nace a partir de la pasión por la
          investigación, la búsqueda de nuevas metodologías y tecnologías que
          nos ayuden a entender lo que necesitamos como sociedad, para mejorar
          nuestra calidad de vida.
        </p>
        {/* <Image src={uno} className="img" /> */}
      </Container>
    );
  }
}

export default FormModal;
