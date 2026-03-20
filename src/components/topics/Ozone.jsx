import React from "react";
import Card from "react-bootstrap/Card";
import machine from "../../assets/images/ozone/ozone-machine.png";
import cycle from "../../assets/images/ozone/ozone-cycle.png";
import cycle2 from "../../assets/images/ozone/ozone-cycle2.png";
import safety from "../../assets/images/ozone/ozone-safety.png";
import loading from "../../assets/images/ozone/ozone-loading.png";
import unloading from "../../assets/images/ozone/ozone-unloading.png";
import wrapper from "../../assets/images/ozone/ozone-wrapper.png";
import wrapper2 from "../../assets/images/ozone/ozone-wrapper2.png";
import procon from "../../assets/images/pro-con.png";
import test from "../../assets/images/ozone/ozone-test.png";
import ci from "../../assets/images/ozone/ozone-ci.png";
import bi from "../../assets/images/ozone/ozone-bi.png";

const Ozone = () => {
  return (
    <div>
      <Card className="container ster-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Hydrogen Peroxide Ozone Sterilizer
            </h1>
          </Card.Title>
          <br />
          <Card.Text>
            <div className="section-bubble">
              <div>
                <img
                  src={machine}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <h2>Ozone Sterilization Facts</h2>

                <ul>
                  <li>
                    Ozone sterilization is a low-temperature{" "}
                    <b>process used for heat-sensitive medical devices</b>
                  </li>

                  <li>
                    Uses a <b>combination </b>of:
                  </li>
                  <ul>
                    <li>Hydrogen peroxide</li>
                    <li>Ozone gas</li>
                  </ul>

                  <li>The process is a multi-phase sterilization cycle</li>

                  <li>
                    <b>Provides effective sterilization for:</b>
                  </li>
                  <ul>
                    <li>General instruments</li>
                    <li>Semi-rigid endoscopes</li>
                    <li>Flexible endoscopes (including multi-channel)</li>
                  </ul>

                  <li>
                    Cycle time is approximately 46 to 50 minutes depending on
                    the load{" "}
                  </li>

                  <li>
                    Uses the <b>same cycle for all load types</b>
                  </li>

                  <li>
                    Large chamber capacity allows for multiple instruments per
                    cycle
                  </li>

                  <li>
                    Designed for advanced, <b>complex medical devices</b>
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Cycle</h2>
                <ul>
                  <li>Ozone sterilization uses a multi-phase cycle process</li>

                  <li>The same cycle is used for all load types</li>

                  <li>
                    Total cycle time is approximately 46 to 50 minutes depending
                    on the load
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Cycle Phases</h4>

                <ul>
                  <li>
                    <strong>Conditioning Phase:</strong>
                  </li>
                  <ul>
                    <li>Chamber is prepared by removing air (vacuum)</li>
                    <li>Humidity and hydrogen peroxide are introduced</li>
                  </ul>

                  <li>
                    <strong>Sterilization Phase:</strong>
                  </li>
                  <ul>
                    <li>
                      Ozone gas is generated and introduced into the chamber
                    </li>
                    <li>
                      Ozone and hydrogen peroxide work together to destroy
                      microorganisms
                    </li>
                  </ul>

                  <li>
                    <strong>Removal Phase:</strong>
                  </li>
                  <ul>
                    <li>
                      Ozone and residual gases are removed from the chamber
                    </li>
                    <li>No extended aeration required</li>
                  </ul>
                </ul>

                <strong>Important Notes</strong>

                <ul>
                  <li>
                    Cycle is standardized—no need to select different cycles for
                    different loads
                  </li>
                  <li>Designed for complex devices including endoscopes</li>
                </ul>
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <img
                  src={cycle}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <img
                  src={cycle2}
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
                <img
                  src={safety}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <h4 style={{ textDecoration: "underline" }}>
                  ⚠️ Safety & Risks
                </h4>

                <ul>
                  <li>
                    <strong>Sterilant Used:</strong>
                  </li>
                  <ul>
                    <li>Ozone gas and hydrogen peroxide</li>
                  </ul>

                  <li>
                    <strong>Exposure Risks:</strong>
                  </li>
                  <ul>
                    <li>Ozone gas is toxic to humans</li>
                    <li>Can irritate eyes, skin, and respiratory system</li>
                    <li>
                      Inhalation may cause coughing, chest tightness, and
                      breathing difficulty
                    </li>
                    <li>
                      Hydrogen peroxide can cause irritation or burns with
                      direct contact
                    </li>
                  </ul>

                  <li>
                    <strong>Safety Advantages:</strong>
                  </li>
                  <ul>
                    <li>Low-temperature process (safer for devices)</li>
                    <li>No harmful residue remains after the cycle</li>
                    <li>
                      Gases are broken down and removed at the end of the cycle
                    </li>
                  </ul>

                  <li>
                    <strong>Handling Precautions:</strong>
                  </li>
                  <ul>
                    <li>Ensure proper ventilation in the work area</li>
                    <li>
                      Only trained personnel should operate the sterilizer
                    </li>
                    <li>Avoid exposure to gas leaks</li>
                    <li>Follow manufacturer safety guidelines at all times</li>
                  </ul>

                  <li>
                    <strong>Important Note</strong>
                  </li>
                  <ul>
                    <li>
                      Although safer than EO, ozone still requires strict safety
                      controls due to gas toxicity
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Loading & Unloading</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  Loading the Sterilizer
                </h4>

                <ul>
                  <li>
                    Items must be thoroughly cleaned and completely dry before
                    sterilization
                  </li>
                  <li>
                    Do not overload the chamber—allow space for gas circulation
                  </li>
                  <li>
                    Arrange items so ozone and hydrogen peroxide can contact all
                    surfaces
                  </li>
                  <li>
                    Open hinged instruments and disassemble multi-part devices
                  </li>
                  <li>
                    Ensure lumens are positioned correctly for proper sterilant
                    penetration
                  </li>
                  <li>
                    Use only packaging materials approved for ozone
                    sterilization
                  </li>
                  <li>Avoid stacking items or blocking airflow</li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Unloading the Sterilizer
                </h4>

                <ul>
                  <li>
                    Wait until the full cycle is complete before opening the
                    chamber
                  </li>
                  <li>
                    Ensure all gases have been removed from the chamber before
                    unloading
                  </li>
                  <li>Use appropriate PPE when handling sterilized items</li>
                  <li>Handle items carefully to maintain sterility</li>
                  <li>
                    Check chemical indicators before releasing items for use
                  </li>
                  <li>Inspect packaging for integrity and dryness</li>
                  <li>Do not use items if cycle parameters were not met</li>
                </ul>

                <strong>Important Notes</strong>
                <ul>
                  <li>
                    Gas sterilization requires proper circulation—loading
                    affects sterilization effectiveness
                  </li>
                  <li>Improper loading may result in sterilization failure</li>
                </ul>
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <img
                  src={loading}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <img
                  src={unloading}
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
                <img
                  src={wrapper}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <img
                  src={wrapper2}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <h2>Wrappers & Containers</h2>
                <ul>
                  <li>
                    Items must be packaged in materials that allow penetration
                    of ozone gas and hydrogen peroxide
                  </li>

                  <li>
                    <strong>Approved Materials:</strong>
                  </li>
                  <ul>
                    <li>Nonwoven synthetic wraps (polypropylene)</li>
                    <li>
                      Specially designed sterilization pouches compatible with
                      ozone systems
                    </li>
                    <li>Rigid containers approved by the manufacturer</li>
                  </ul>

                  <li>
                    <strong>Important Requirements:</strong>
                  </li>
                  <ul>
                    <li>Packaging must allow proper gas circulation</li>
                    <li>
                      Materials must be compatible with hydrogen peroxide and
                      ozone
                    </li>
                    <li>
                      Follow manufacturer IFU for approved packaging systems
                    </li>
                  </ul>

                  <li>
                    <strong>Not Recommended / Avoid:</strong>
                  </li>
                  <ul>
                    <li>Materials that block gas penetration</li>
                    <li>Packaging not validated for ozone sterilization</li>
                  </ul>

                  <li>
                    <strong>Important Note</strong>
                  </li>
                  <ul>
                    <li>
                      Always verify packaging compatibility to ensure effective
                      sterilization
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Pros & Cons</h2>
                <h4 style={{ textDecoration: "underline" }}>Pros</h4>

                <ul>
                  <li>
                    Low-temperature process—safe for heat-sensitive devices
                  </li>
                  <li>Effective for complex instruments and endoscopes</li>
                  <li>Uses a single cycle for all load types</li>
                  <li>Relatively fast cycle time (~46–50 minutes)</li>
                  <li>No harmful residue remains after the cycle</li>
                  <li>
                    Large chamber capacity allows multiple instruments per cycle
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Cons</h4>

                <ul>
                  <li>Ozone gas is toxic and requires safety controls</li>
                  <li>Requires proper ventilation and monitoring systems</li>
                  <li>Must use compatible packaging materials</li>
                  <li>
                    Limited availability compared to other sterilization methods
                  </li>
                  <li>Equipment and installation can be costly</li>
                </ul>

                <strong>Important Note</strong>
                <ul>
                  <li>
                    Ozone sterilization is used for advanced devices when other
                    methods are not suitable
                  </li>
                </ul>
              </div>
              <div style={{ paddingLeft: "10%" }}>
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
                <img
                  src={test}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <img
                  src={ci}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <img
                  src={bi}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <h2>How to test Sterilizer</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  Physical Monitoring
                </h4>
                <ul>
                  <li>
                    Time, temperature, pressure, and gas concentration must be
                    checked for every cycle
                  </li>
                  <li>
                    Values are recorded by the sterilizer’s display or printout
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Chemical Indicators
                </h4>
                <ul>
                  <li>
                    Placed with each load to monitor exposure to ozone and
                    hydrogen peroxide
                  </li>
                  <li>
                    Indicators change color when proper sterilization conditions
                    are met
                  </li>
                  <li>Must be checked before items are released for use</li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Biological Indicators
                </h4>
                <ul>
                  <li>
                    Contain bacterial spores used to verify sterilization
                    effectiveness
                  </li>
                  <li>BI is run through the cycle and then incubated</li>
                  <li>
                    No microbial growth indicates successful sterilization
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Documentation</h4>
                <ul>
                  <li>All sterilization cycles must be documented</li>
                  <li>
                    Includes sterilizer number, cycle parameters, load contents,
                    and results
                  </li>
                  <li>
                    Ensures compliance with safety and accreditation standards
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Ozone;
