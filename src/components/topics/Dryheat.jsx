import React from "react";
import Card from "react-bootstrap/Card";
import machine from "../../assets/images/dryheat/dryheat-machine.png"
import cycle from "../../assets/images/dryheat/dryheat-cycle.png"
import loading from "../../assets/images/loading.png"
import wrapper from "../../assets/images/dryheat/drytray.jpg"
import procon from "../../assets/images/pro-con.png"
import bitest from "../../assets/images/dryheat/dry-bi.png"

const Dryheat = () => {
  return (
    <div>
      <Card className="container custom-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color:"#ffffff" }}>Dry Heat Sterilizer</h1>
          </Card.Title>
          <br></br>
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
                src={loading}
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
                src={wrapper}
                className="section-image"
              />
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <img
                src={procon}
                className="section-image"
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
                src={bitest}
                className="section-image"
              />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dryheat;
