import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import uno from "../assets/Project1/1.jpg";
import "./FormModal.css";

class FormModal extends Component {
  render() {
    const { onHide } = this.props;
    return (
      <div style={{ height: "60vh" }}>
        {/* <p>aquí va el cv, falta la imageeeen</p> */}
        <div className="bar">
          <button className="close" onClick={onHide}></button>
          <button className="close-disabled"></button>
          <button className="close-disabled"></button>
          <p className="name-file">Sobre mi.txt</p>
        </div>
        <div className="about-me-text">
          Diseñadora UX de la Universidad Finis Terrae. Estudié diseño
          industrial en la Universidad Diego Portales, ya que llamó mi atención
          el desarrollo de proyectos y productos que ayudan a visibilizar y
          solucionar problemas latentes en la sociedad. La especialidad en UX
          Design nace a partir de la pasión por la investigación, la búsqueda de
          nuevas metodologías y tecnologías que nos ayuden a entender lo que
          necesitamos como sociedad, para mejorar nuestra calidad de vida.
        </div>
      </div>
    );
  }
}

export default FormModal;
