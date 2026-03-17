import React from "react";
import Card from "react-bootstrap/Card";
import profile from "../../assets/images/logo.png";
import machine from "../../assets/images/ltgp/ltgp-machine.png"
import cycle from "../../assets/images/ltgp/ltgp-cycle.png"
import procon from "../../assets/images/pro-con.png";

const Ltgp = () => {
  return (
    <div>
      <Card className="container ster-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color:"#ffffff" }}>Low-Temp Gas Plasma (LTGP) Sterilizer</h1>
          </Card.Title>
          <br />
          <Card.Text>
            <div className="section-bubble">
              <img
                src={machine}
                className="section-image"
              />
              <div>
                <h2>Facts</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Cycle</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <img
                src={cycle}
                className="section-image"
              />
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <img
                src={profile}
                className="section-image"
              />
              <div>
                <h2>Loading and Unloading</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Wrapper to use</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <img
                src={profile}
                className="section-image"
              />
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
            <img
                  src={procon}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              <div>
                <h2>Pros and Cons</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>How to test Sterilizer</h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <img
                src={profile}
                className="section-image"
              />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Ltgp;
