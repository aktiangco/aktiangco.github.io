import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import machine from "../assets/images/all.png";
import machine2 from "../assets/images/all2.png";

const methods = [
  { label: "Steam", path: "/Steam" },
  { label: "Ethylene Oxide (EO)", path: "/Eo" },
  { label: "Low-Temp Gas Plasma (LTGP)", path: "/Ltgp" },
  { label: "Low-Temp Hydrogen Peroxide (V-PRO)", path: "/Vpro" },
  { label: "Hydrogen Peroxide Ozone", path: "/Ozone" },
  { label: "Immediate-Use Steam Sterilization (IUSS)", path: "/Iuss" },
  { label: "Dry Heat", path: "/Dryheat" },
];

const Gallery = () => {
  return (
    <Card className="container custom-card">
      <Card.Body style={{ height: "100%" }}>
        <Card.Title className="font-weight-bold">
          <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
            Sterilization
          </h1>
        </Card.Title>

        <div className="section-bubble sterilization-intro" style={{ backgroundColor: "black" }}>
          <Card.Text className="paragraph-indent intro-text">
            Sterilization is a critical process in healthcare that completely
            destroys or eliminates all forms of microorganisms, including
            bacteria, viruses, fungi, and bacterial spores, from medical
            instruments and devices. It is essential for ensuring that surgical
            instruments are safe to use on patients and for preventing
            infections during medical procedures. One of the most common
            methods used in hospitals is steam sterilization, which uses
            high-temperature steam under pressure to effectively kill
            microorganisms. For sterilization to be successful, specific
            conditions such as the correct temperature, pressure, and exposure
            time must be achieved and maintained throughout the sterilization
            cycle. Proper packaging is also important because it allows the
            sterilizing agent to penetrate the instruments while maintaining
            sterility after the process is complete. To verify that
            sterilization has been effective, sterile processing departments
            use monitoring methods such as mechanical indicators that track
            cycle conditions, chemical indicators that show exposure to
            sterilization parameters, and biological indicators that confirm
            the destruction of microorganisms. Sterilization plays a vital
            role in maintaining patient safety and preventing
            healthcare-associated infections.
          </Card.Text>
        </div>

        <div className="section-bubble sterilizer-methods-section" style={{ backgroundColor: "black" }}>
          <img
            src={machine2}
            alt="Sterilization equipment"
            className="section-image sterilizer-side-image large-side-image"
          />

          <div className="methods-list-wrapper">
            <h4 style={{ textDecoration: "underline" }}>Sterilizer Methods</h4>
            <ul className="methods-list">
              {methods.map((method) => (
                <li key={method.path}>
                  <Link to={method.path} className="method-link-button">
                    {method.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <img
            src={machine}
            alt="Sterilizer machine"
            className="section-image sterilizer-side-image small-side-image"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Gallery;