import React from "react";
import straw from "../assets/images/anyaa.png";
import { Instagram, Linkedin, Github } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div
      className="footer-fixed"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <div style={{ display: "flex" }}>
         {/* <div style={{ padding: "10px" }}>Created by Allan</div> */} 

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
          <div>
            <img
              src={straw}
              alt="Allan Kris Tiangco"
              style={{
                width: "50pk",
                height: "50px",
                borderRadius: "10px",
                objectFit: "cover",
                paddingLeft: "5%",
              }}
            />
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
