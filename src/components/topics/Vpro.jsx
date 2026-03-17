import React from "react";
import Card from "react-bootstrap/Card";
import profile from "../../assets/images/logo.png";
import machine from "../../assets/images/vpro/vpro-machine.png";
import cycle from "../../assets/images/ltgp/ltgp-cycle.png";
import procon from "../../assets/images/pro-con.png";

const Vpro = () => {
  return (
    <div>
      <Card className="container custom-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color:"#ffffff" }}>Low-Temp Hydrogen Peroxide (vpro) Sterilizer</h1>
          </Card.Title>
          <br></br>
          <Card.Text>
            <div className="section-bubble">
              <img src={machine} className="section-image" />
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
              <img src={cycle} className="section-image" />
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <img src={profile} className="section-image" />
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
              <img src={profile} className="section-image" />
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <img src={profile} className="section-image" />
              <div>
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
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>How to test Sterilizer</h2>
                Prior to using a V-PRO sterilizer, Sterile Processing Department
                (SPD) staff must ensure that the machine is in working order so
                that surgical equipment will be safe to use on patients.
                Performing a biological indicator (BI) test is one of the most
                important steps in this process. A biological indicator (BI)
                contains specially formulated bacterial spores that are very
                difficult to kill and can therefore be used to verify if the
                sterilization process worked. In this case, a biological
                indicator (BI) is placed inside the sterilizer and put through
                an entire cycle. After the cycle, the biological indicator (BI)
                will then be incubated and checked for any bacterial spore
                growth. If no bacterial spores grew, then the sterilizer was
                able to adequately sterilize dental instruments and surgical
                instruments.
                <br></br>
                <br></br>
                In addition to using the biological test to check for the
                efficiency of the sterilization cycle, technicians are also
                using chemical indicators in conjunction with the biological
                indicators, as well as mechanically monitoring the sterilizer.
                Chemical indicators are placed in the same package as the
                instruments and indicate if they were exposed to the correct
                sterilization conditions by changing color. The mechanical
                monitoring process checks the cycle data such as the time,
                temperature, and hydrogen peroxide levels that the sterilizer
                experienced during the cycle. Reviewing these three indicator
                processes together enables the SPD to determine the correct
                functioning of the V-PRO and that the instruments that were
                processed in the V-PRO are safe for patient care.
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

export default Vpro;
