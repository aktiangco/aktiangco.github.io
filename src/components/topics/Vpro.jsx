import React from "react";
import Card from "react-bootstrap/Card";
import machine from "../../assets/images/vpro/vpro-machine2.png";
import cycle from "../../assets/images/ltgp/ltgp-cycle.png";
import cycle2 from "../../assets/images/vpro/vpro-cycle2.png";
import safety from "../../assets/images/vpro/vpro-safety.png";
import loading from "../../assets/images/vpro/vpro-loading.png";
import unloading from "../../assets/images/vpro/vpro-unloading.png";
import wrapper from "../../assets/images/ltgp/ltgp-wrapper.png";
import wrapper2 from "../../assets/images/ltgp/ltgp-wrapper2.png";
import procon from "../../assets/images/pro-con.png";
import monitor from "../../assets/images/ltgp/ltgp-monitor.png";
import ci from "../../assets/images/ltgp/ltgp-ci.png";
import bi from "../../assets/images/ltgp/ltgp-bi.png";

const Vpro = () => {
  return (
    <div>
      <Card className="container ster-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Low-Temp Hydrogen Peroxide (VPRO) Sterilizer
            </h1>
          </Card.Title>
          <br />
          <Card.Text>
            <div className="section-bubble">
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
              <div style={{ paddingLeft: "10%" }}>
                <h2>VPRO Sterilization Facts</h2>
                <ul>
                  <li>
                    V-PRO uses vaporized hydrogen peroxide as the sterilant
                  </li>

                  <li>It is a low-temperature sterilization process</li>

                  <li>Designed for:</li>
                  <ul>
                    <li>Heat-sensitive devices</li>
                    <li>Moisture-sensitive devices</li>
                  </ul>

                  <li>
                    Provides fast cycle times compared to EO sterilization
                  </li>

                  <li>Items are ready for immediate use after the cycle</li>

                  <li>No aeration required after sterilization</li>

                  <li>Byproducts of the process include:</li>
                  <ul>
                    <li>Water (H₂O)</li>
                    <li>Oxygen (O₂)</li>
                  </ul>

                  <li>Allows for sterile storage after processing</li>

                  <li>
                    Requires proper installation and trained personnel for
                    operation
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
                  <li>
                    V-PRO sterilizers use pre-programmed cycles based on device
                    type
                  </li>
                  <li>
                    Cycles vary depending on the model (e.g., V-PRO 60, V-PRO
                    maX)
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Common Cycle Types
                </h4>

                <ul>
                  <li>
                    <strong>Lumen Cycle:</strong>
                  </li>
                  <ul>
                    <li>
                      Used for devices with lumens (single, dual, or triple
                      channels)
                    </li>
                    <li>Approximate cycle time: ~55 minutes</li>
                  </ul>

                  <li>
                    <strong>Non-Lumen Cycle:</strong>
                  </li>
                  <ul>
                    <li>
                      Used for solid instruments without internal channels
                    </li>
                    <li>
                      Includes items like cameras, batteries, and powered
                      equipment
                    </li>
                    <li>Approximate cycle time: ~28 minutes</li>
                  </ul>

                  <li>
                    <strong>Flexible Cycle:</strong>
                  </li>
                  <ul>
                    <li>Used for flexible endoscopes and bronchoscopes</li>
                    <li>Approximate cycle time: ~35 minutes</li>
                  </ul>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Cycle Phases</h4>
                <ul>
                  <li>Conditioning phase (vacuum and moisture control)</li>
                  <li>
                    Sterilization phase (hydrogen peroxide vapor exposure)
                  </li>
                  <li>
                    Aeration phase (removal of vapor, no extended aeration
                    needed)
                  </li>
                </ul>

                <strong>Important Notes</strong>
                <ul>
                  <li>
                    Cycle selection depends on device type and manufacturer
                    instructions
                  </li>
                  <li>
                    Improper cycle selection may result in ineffective
                    sterilization
                  </li>
                  <li>
                    Always follow the sterilizer IFU for correct cycle use
                  </li>
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
              <img
                src={safety}
                className="section-image"
                style={{
                  width: "400px",
                  height: "50%",
                  borderRadius: "10%",
                  objectFit: "cover",
                }}
              />

              <div style={{ paddingLeft: "10%" }}>
                <h2>⚠️ Safety & Risks</h2>

                <ul>
                  <li>
                    <strong>Sterilant Used:</strong>
                  </li>
                  <ul>
                    <li>Vaporized hydrogen peroxide</li>
                  </ul>

                  <li>
                    <strong>Exposure Risks:</strong>
                  </li>
                  <ul>
                    <li>Can irritate eyes, skin, and respiratory tract</li>
                    <li>Direct contact may cause burns</li>
                    <li>Inhalation of vapor can be harmful</li>
                  </ul>

                  <li>
                    <strong>Safety Advantages:</strong>
                  </li>
                  <ul>
                    <li>No toxic residue remains after the cycle</li>
                    <li>No aeration required</li>
                    <li>Breaks down into water and oxygen</li>
                    <li>Safer than EO sterilization</li>
                  </ul>

                  <li>
                    <strong>Handling Precautions:</strong>
                  </li>
                  <ul>
                    <li>Use PPE when handling sterilant cartridges</li>
                    <li>Avoid direct contact with hydrogen peroxide</li>
                    <li>Ensure proper ventilation in the work area</li>
                  </ul>

                  <strong>Important Notes</strong>
                  <ul>
                    <li>
                      Only trained personnel should operate the sterilizer
                    </li>
                    <li>Follow manufacturer safety guidelines</li>
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
                    Do not overload the chamber—allow space for hydrogen
                    peroxide vapor circulation
                  </li>
                  <li>Arrange items so vapor can reach all surfaces</li>
                  <li>
                    Open hinged instruments and disassemble multi-part devices
                  </li>
                  <li>
                    Use only packaging materials compatible with V-PRO
                    (non-cellulose)
                  </li>
                  <li>Avoid stacking items or blocking airflow</li>
                  <li>
                    Follow manufacturer instructions for proper load
                    configuration
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Unloading the Sterilizer
                </h4>

                <ul>
                  <li>
                    No aeration required—items are safe once the cycle is
                    complete
                  </li>
                  <li>Use standard PPE when handling sterilized items</li>
                  <li>Handle items carefully to maintain sterility</li>
                  <li>
                    Check chemical indicators before releasing items for use
                  </li>
                  <li>Inspect packaging for damage or moisture</li>
                  <li>Do not use items if cycle parameters were not met</li>
                </ul>

                <strong>Important Notes</strong>
                <ul>
                  <li>
                    Moisture can interfere with the process—items must be
                    completely dry
                  </li>
                  <li>Only use approved non-cellulose packaging materials</li>
                  <li>Improper loading can result in sterilization failure</li>
                </ul>
              </div>

              <div style={{ paddingLeft: "10%" }}>
                <img
                  src={loading}
                  className="section-image"
                  style={{
                    width: "350px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={unloading}
                  className="section-image"
                  style={{
                    width: "350px",
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
                    width: "250px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={wrapper2}
                  className="section-image"
                  style={{
                    width: "250px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <h2>Wrappers & Containers</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  Loading the Sterilizer
                </h4>

                <ul>
                  <li>
                    Items must be thoroughly cleaned and completely dry before
                    sterilization
                  </li>
                  <li>
                    Do not overload the chamber—allow space for hydrogen
                    peroxide vapor circulation
                  </li>
                  <li>Arrange items so vapor can reach all surfaces</li>
                  <li>
                    Open hinged instruments and disassemble multi-part devices
                  </li>
                  <li>
                    Use only packaging materials compatible with V-PRO
                    (non-cellulose)
                  </li>
                  <li>Avoid stacking items or blocking airflow</li>
                  <li>
                    Follow manufacturer instructions for proper load
                    configuration
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Unloading the Sterilizer
                </h4>

                <ul>
                  <li>
                    No aeration required—items are safe once the cycle is
                    complete
                  </li>
                  <li>Use standard PPE when handling sterilized items</li>
                  <li>Handle items carefully to maintain sterility</li>
                  <li>
                    Check chemical indicators before releasing items for use
                  </li>
                  <li>Inspect packaging for damage or moisture</li>
                  <li>Do not use items if cycle parameters were not met</li>
                </ul>

                <strong>Important Notes</strong>
                <ul>
                  <li>
                    Moisture can interfere with the process—items must be
                    completely dry
                  </li>
                  <li>Only use approved non-cellulose packaging materials</li>
                  <li>Improper loading can result in sterilization failure</li>
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
                    Low-temperature process—safe for heat- and
                    moisture-sensitive devices
                  </li>
                  <li>Fast cycle times compared to EO sterilization</li>
                  <li>No aeration required after the cycle</li>
                  <li>No toxic residue remains after sterilization</li>
                  <li>
                    Byproducts are water and oxygen (environmentally friendly)
                  </li>
                  <li>Items are ready for immediate use</li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Cons</h4>

                <ul>
                  <li>
                    Cannot process cellulose materials (paper, cotton, linen)
                  </li>
                  <li>Cannot process liquids</li>
                  <li>Limited ability to sterilize long, narrow lumens</li>
                  <li>Requires special (non-cellulose) packaging materials</li>
                  <li>Equipment and supplies can be costly</li>
                </ul>

                <strong>Important Note</strong>
                <ul>
                  <li>
                    V-PRO is used when steam sterilization is not suitable for
                    the device
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
              <div style={{ paddingLeft: "10%" }}>
                <img
                  src={monitor}
                  className="section-image"
                  style={{
                    width: "170px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={ci}
                  className="section-image"
                  style={{
                    width: "170px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={bi}
                  className="section-image"
                  style={{
                    width: "170px",
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
                    Time, temperature, pressure, and hydrogen peroxide
                    concentration must be checked for every cycle
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
                    Placed with each load to monitor exposure to hydrogen
                    peroxide vapor
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

export default Vpro;
