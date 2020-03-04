import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import cero from "../assets/Project4/0.jpeg";
import uno from "../assets/Project4/1.jpeg";
import dos from "../assets/Project4/2.jpeg";
import tres from "../assets/Project4/3.jpeg";
import cuatro from "../assets/Project4/4.png";
import cinco from "../assets/Project4/5.png";
import seis from "../assets/Project4/6.png";
import siete from "../assets/Project4/7.png";
import ocho from "../assets/Project4/8.png";
import nueve from "../assets/Project4/9.jpeg";
import diez from "../assets/Project4/10.png";
import once from "../assets/Project4/11.png";
import doce from "../assets/Project4/12.png";
import trece from "../assets/Project4/13.png";
import catorce from "../assets/Project4/14.jpg";
import quince from "../assets/Project4/15.jpg";
import dieciseis from "../assets/Project4/16.jpg";
import diecisiete from "../assets/Project4/17.jpg";
import dieciocho from "../assets/Project4/18.png";
import diecinueve from "../assets/Project4/19.png";
import veinte from "../assets/Project4/20.png";
import veintiuno from "../assets/Project4/21.png";
import veintidos from "../assets/Project4/22.png";
import veintitres from "../assets/Project4/23.png";
import veinticuatro from "../assets/Project4/24.png";
import veinticinco from "../assets/Project4/25.png";
import veintiseis from "../assets/Project4/26.png";
import veintisiete from "../assets/Project4/27.png";
import veintiocho from "../assets/Project4/28.png";
import veintinueve from "../assets/Project4/29.png";
import treinta from "../assets/Project4/30.png";
import "./Project4.css";

class Projects extends Component {
  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <div className="titles-4">
          <div className="title-4">PROYECTO UX</div>
          <div className="description-4">
            Como equipo UX se nos da a escoger un tema a desarrollar y debido al
            interés medio ambiental, se decidió generar una app que facilite
            información sobre el complicado tema de ser agentes de cambios. Es
            por esto que nos preguntamos ¿cuál es el contenido que se necesita
            para motiva a ayudar al medio ambiente? El proyecto se dividió en 4
            módulo, donde todos tenían una parte teórica y luego práctica. Cada
            equipo trabajaba en su proyecto y luego se hacían feedback entre
            compañeros, generando un trabajo colaborativo.
          </div>
        </div>
        <div>
          <div className="container-images-4" style={{ marginTop: "2em" }}>
            <Image
              src={cero}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <div style={{ width: "40%", height: "40%", margin: "1em" }}>
              <div className="title-right">UX EMPATHISE</div>
              <div className="description-right">
                En esta primera etapa UX, se presentó la metodología base para
                generar la experiencia del usuario, la Empatía. Con esto se
                generó cercanía y entendimiento de quién es nuestro usuario y
                qué necesita.
              </div>
            </div>
            <Image
              src={uno}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={dos}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={tres}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
          </div>
          <div className="container-images-4" style={{ marginTop: "2em" }}>
            <div style={{ width: "40%", height: "40%", margin: "1em" }}>
              <div className="title-right">UX RESEARCH</div>
              <div className="description-right">
                La segunda etapa se enfocó en la investigación del usuario
                objetivo, para así fundamentar las bases del proyecto,
                confirmando al usuario y diseñando el producto que necesita. Se
                comenzó el User research, creando entrevistas que entreguen
                datos cuantitativos y cualitativos, de los patrones de
                comportamientos del usuario, lo que ayudó a definir los
                arquetipos (metodología Humulu). Una vez entendido los usuarios
                y sus necesidades, se planteó la pregunta ¿qué contenido y cómo
                se lo entrego?, la cual fue respondida en base a distintas
                técnicas que mostraban las interacciones del usuario para
                conocer su dinámica metal, tales como Customer Journey Map, User
                Task, Card Sorting. En base a esto se dividió la aplicación en
                dos funciones principales, la primera el informar lo que sucede
                actualmente con el medio ambiente, y la segunda enseñarle cuáles
                son las acciones que puede hacer para ayudar. Esta estructura
                básica dió paso al inicio del diseño, definiendo las categorías
                de la app y mostrando las tareas que se debe realizar.
              </div>
            </div>
            <Image
              src={cuatro}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={cinco}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={seis}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={siete}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={ocho}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={nueve}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={diez}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={once}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={doce}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
          </div>

          <div className="container-images-4" style={{ marginTop: "2em" }}>
            <Image
              src={trece}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <div style={{ width: "40%", height: "40%", margin: "1em" }}>
              <div className="title-right">UX DESIGN</div>
              <div className="description-right">
                Durante la tercera etapa, comenzamos visualizar el producto
                digital, desde sus colores, texturas, flujos y esquemas, todo
                aludiendo a la naturaleza y las personas como agentes de cambio.
                Se utilizó herramientas como el moodboard, sketching y diseño de
                wireframes.
              </div>
            </div>
            <Image
              src={catorce}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={quince}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={dieciseis}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={diecisiete}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
          </div>
          <div className="container-images-4" style={{ marginTop: "2em" }}>
            <div style={{ width: "40%", height: "40%", margin: "1em" }}>
              <div className="title-right">PROTOTIPO EN BAJA</div>
              <div className="description-right">
                Para el desarrollo de la aplicación, se utilizó el Adobe XD para
                prototipar los primeros flujos de tarea.
              </div>
            </div>
            <Image
              src={dieciocho}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={diecinueve}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
          </div>
          <div className="container-images-4" style={{ marginTop: "2em" }}>
            <div style={{ width: "40%", height: "40%", margin: "1em" }}>
              <div className="title-right">UX TESTING</div>
              <div className="description-right">
                En esta última etapa se evaluó el prototipo en baja, desde el
                diseño y navegación hasta la utilidad y experiencia, utilizando
                evaluaciones como Test de usabilidad, Mapa de calor, A/B testing
                y Evaluación heurística. Los resultados en cuanto a contenido y
                arquitectura de la información fueron positivos, ya que se
                entendía y quedaban claros, motivaban al usuario a querer
                utilizar la aplicación. Por otro lado, la visualización de la
                aplicación no fue satisfactoria, por lo que se rediseñó la
                gráfica (color, tamaño, ilustración).
              </div>
            </div>
            <Image
              src={veinte}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={veintiuno}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={veintidos}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={veintitres}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={veinticuatro}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={veinticinco}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
          </div>
          <div className="container-images-4" style={{ marginTop: "2em" }}>
            <div style={{ width: "40%", height: "40%", margin: "1em" }}>
              <div className="title-right">MOCKUP</div>
              <div className="description-right">
                El desarrollo de este proyecto fue un gran desafío, por el alto
                nivel de información sintetizada en una aplicación y los
                diferentes tipos de usuarios que abordar, desde niños, jóvenes
                hasta adultos, ya que todos estamos en diferentes niveles de
                formación y cambiar hábitos es una acción difícil de generar,
                por la necesidad de conseguir las cosas de manera rápida y
                fácil. El prototipo final presentado alcanza un buen nivel de
                testeo, sin embargo, podrían realizarse mejoras si se continuara
                en el proyecto.
              </div>
            </div>
            <Image
              src={veintiseis}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={veintisiete}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={veintiocho}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={veintinueve}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
            <Image
              src={treinta}
              className="img"
              style={{ width: "40%", height: "40%", margin: "1em" }}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Projects;
