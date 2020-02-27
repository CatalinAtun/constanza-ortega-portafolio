import React, { Component } from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import ModalAdd from "./ModalAction";
import "./Modal.css";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      modalData: {}
    };
  }

  setModalShow = state => {
    this.setState({
      modalShow: state
    });
  };

  handleCreate = () => {
    const { typeModal } = this.props;
    this.setState({
      modalShow: true,
      modalData: {
        create: true,
        form: typeModal
      }
    });
  };

  render() {
    const { modalShow, modalData } = this.state;
    const { photo, name } = this.props;
    return (
      <Row>
        <Col>
          <div>
            <Image
              src={photo}
              style={{ width: "90px" }}
              onClick={() => this.handleCreate(true)}
            />
            <p className="name-folder">{name}</p>
          </div>
        </Col>
        <ModalAdd
          show={modalShow}
          data={modalData}
          onHide={() => this.setModalShow(false)}
          size="lg"
        />
      </Row>
    );
  }
}

export default Modal;
