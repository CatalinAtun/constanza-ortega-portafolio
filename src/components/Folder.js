import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import "./Folder.css";

class Folder extends Component {
  render() {
    const { path, name, image, style } = this.props;
    return (
      <div className="folder">
        <Link to={path}>
          <Image src={image} className="folder" style={style} />
          <p className="name-folder">{name}</p>
        </Link>
      </div>
    );
  }
}

export default Folder;
