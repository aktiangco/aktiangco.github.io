import React from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Github,
  Person,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div
      className="footer-fixed"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ padding: "10px" }}>
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/allan-kris-tiangco-057a78a0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div style={{ padding: "10px" }}>
            <a
              style={{ color: "white" }}
              href="https://github.com/aktiangco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
          <div style={{ padding: "10px" }}>
            <a
              style={{ color: "white" }}
              href="https://www.instagram.com/akvt808/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </div>
          <div style={{ padding: "10px" }}>
            <a
              style={{ color: "white" }}
              href="https://aktiangco.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Person />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div style={{ padding: "10px" }}>
          © {new Date().getFullYear()} AKVT808. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
