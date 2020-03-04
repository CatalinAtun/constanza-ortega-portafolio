import React from "react";
import { Modal } from "react-bootstrap";
import FormModal from "./FormModal";
import CV from "./CV.js";
import Contact from "./Contact.js";

const ModalAdd = ({ show, data, onHide, size, id }) => {
  const renderForm = modalData => {
    switch (modalData.form) {
      case "about-me":
        return (
          <FormModal data={modalData} onHide={onHide} type={modalData.action} />
        );
      case "cv":
        return <CV data={modalData} onHide={onHide} type={modalData.action} />;
      case "contact":
        return (
          <Contact data={modalData} onHide={onHide} type={modalData.action} />
        );
      default:
        return "error";
    }
  };
  return (
    <Modal size={size} show={show} onHide={onHide}>
      <Modal.Body>{renderForm(data)}</Modal.Body>
    </Modal>
  );
};

export default ModalAdd;
