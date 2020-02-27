import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CustomNavbar.css";
import { FaApple } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { mockComponent } from "react-dom/test-utils";
import moment from "moment";
class CustomNavbar extends Component {
  constructor() {
    super();
    this.state = {
      date: moment()
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: moment() });
  }

  getTime() {
    return this.state.date.format("HH:mm");
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className="cont">
        <div className="navbarr">
          {/* <Link to="/">
            <FiHome className="back-home" color="white" />
          </Link> */}
          <Link to="/">
            <p
              style={{
                fontWeight: "bold",
                marginLeft: "1em",
                marginRight: "1.5em",
                fontSize: "14px",
                color: "white"
              }}
            >
              Constanza Ortega
            </p>
          </Link>
          <p style={{ fontSize: "14px", color: "white" }}>Info</p>
        </div>
        <div>
          <span className="hours">{this.getTime()}</span>
        </div>
      </div>
    );
  }
}

export default CustomNavbar;
