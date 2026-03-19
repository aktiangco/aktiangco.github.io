import React from "react";
import Card from "react-bootstrap/Card";
import machine from "../../assets/images/ltgp/ltgp-machine.png";
import cycle1 from "../../assets/images/ltgp/ltgp-100s.png";
import cycle2 from "../../assets/images/ltgp/ltgp-nx.png";
import cycle3 from "../../assets/images/ltgp/ltgp-100nx.png";
import safety from "../../assets/images/ltgp/ltgp-safety.png";
import loading from "../../assets/images/ltgp/ltgp-loading.png";
import unloading from "../../assets/images/ltgp/ltgp-unloading.png";
import wrapper from "../../assets/images/ltgp/ltgp-wrapper.png";
import wrapper2 from "../../assets/images/ltgp/ltgp-wrapper2.png";
import monitor from "../../assets/images/ltgp/ltgp-monitor.png";
import ci from "../../assets/images/ltgp/ltgp-ci.png";
import bi from "../../assets/images/ltgp/ltgp-bi.png";
import procon from "../../assets/images/pro-con.png";

const Ltgp = () => {
  return (
    <div>
      <Card className="container ster-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Low-Temp Gas Plasma (LTGP) Sterilizer
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
              <div>
                <h2>LTGP Sterilization Facts</h2>

                <ul>
                  <li>
                    Low-temperature gas plasma (LTGP) was cleared by the FDA in
                    1993 as an alternative to EO sterilization
                  </li>

                  <li>Uses a combination of:</li>
                  <ul>
                    <li>
                      <b>Hydrogen peroxide vapor</b>
                    </li>
                    <li>
                      <b>Plasma (radiofrequency energy)</b>
                    </li>
                  </ul>

                  <li>It is a fast, low-temperature sterilization process</li>
                  <li>No toxic residue remains after the cycle</li>
                  <li>No aeration is required after sterilization</li>

                  <li>
                    <strong>Commonly used for:</strong>
                  </li>
                  <ul>
                    <li>Heat- and moisture-sensitive devices</li>
                    <li>Endoscopes and cameras</li>
                    <li>Fiberoptic light cords and delicate instruments</li>
                  </ul>

                  <li>
                    <strong>Important limitations:</strong>
                  </li>
                  <ul>
                    <li>Cannot process liquids</li>
                    <li>
                      Cannot process cellulose-based materials (paper, cotton)
                    </li>
                    <li>
                      Limited ability for long, narrow lumens or dead-end
                      channels
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>STERRAD Sterilization Cycles</h2>

                <h4 style={{ textDecoration: "underline" }}>STERRAD 100S</h4>
                <ul>
                  <li>Single cycle available</li>
                  <li>Cycle time: approximately 55 minutes</li>
                  <li>
                    <b>
                      Limited ability to sterilize long, narrow lumens or
                      dead-end channels
                    </b>
                  </li>
                  <li>Load temperature does not exceed 131°F (55°C)</li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>STERRAD NX</h4>
                <ul>
                  <li>
                    <strong>STANDARD Cycle:</strong>
                  </li>
                  <ul>
                    <li>Cycle time: approximately 28 minutes</li>
                    <li>
                      Used for general instruments that meet manufacturer
                      criteria
                    </li>
                  </ul>

                  <li>
                    <strong>ADVANCED Cycle:</strong>
                  </li>
                  <ul>
                    <li>Cycle time: approximately 38 minutes</li>
                    <li>
                      <b>
                        Used for more complex instruments and some lumen devices
                      </b>
                    </li>
                    <li>
                      <b>Maximum of 10 lumened devices</b> per cycle
                    </li>
                  </ul>

                  <li>Maximum load temperature: 131°F (55°C)</li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>STERRAD 100NX</h4>
                <ul>
                  <li>
                    <strong>STANDARD Cycle:</strong>
                  </li>
                  <ul>
                    <li>Cycle time: approximately 47 minutes</li>
                    <li>For general instruments and compatible devices</li>
                  </ul>

                  <li>
                    <strong>FLEX Cycle:</strong>
                  </li>
                  <ul>
                    <li>Cycle time: approximately 42 minutes</li>
                    <li>
                      Used for <b>single-channel flexible endoscopes</b>
                    </li>
                  </ul>

                  <li>
                    <strong>DUO Cycle:</strong>
                  </li>
                  <ul>
                    <li>Cycle time: approximately 60 minutes</li>
                    <li>
                      Designed for <b>most flexible endoscopes</b>
                    </li>
                  </ul>

                  <li>
                    <strong>EXPRESS Cycle:</strong>
                  </li>
                  <ul>
                    <li>Cycle time: approximately 24 minutes</li>
                    <li>
                      Used for <b>non-lumen and simple instruments</b>
                    </li>
                  </ul>

                  <li>Maximum load temperature: 131°F (55°C)</li>
                </ul>
              </div>
              <div>
                <img
                  src={cycle1}
                  className="section-image"
                  style={{
                    width: "200px",
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
                    width: "200px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={cycle3}
                  className="section-image"
                  style={{
                    width: "200px",
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
              <div>
                <h2>⚠️ Safety (LTGP vs EO — VERY IMPORTANT)</h2>

                <h4 style={{ textDecoration: "underline" }}>LTGP Safety</h4>
                <ul>
                  <li>Uses hydrogen peroxide (~59%) in a sealed cassette</li>
                  <li>Can irritate skin, eyes, and respiratory tract</li>
                  <li>May cause burns if direct contact occurs</li>
                  <li>
                    <b>No toxic residue</b> remains after the cycle
                  </li>
                  <li>
                    <b>No aeration required</b>
                  </li>
                  <li>
                    <b>Lower overall risk</b> compared to EO
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>EO Safety</h4>
                <ul>
                  <li>Uses ethylene oxide gas</li>
                  <li>
                    <b>Highly toxic to humans</b>
                  </li>
                  <li>
                    <b>Flammable and explosive</b> in certain concentrations
                  </li>
                  <li>
                    Can enter the body through inhalation, skin, or ingestion
                  </li>
                  <li>
                    Associated with <b>cancer and reproductive risks</b>
                  </li>
                  <li>
                    Requires <b>long aeration time</b> to remove residue
                  </li>
                </ul>

                <strong>Key Comparison</strong>
                <ul>
                  <li>
                    <strong>LTGP:</strong> Safer, no residue, no aeration
                  </li>
                  <li>
                    <strong>EO:</strong> Higher risk, toxic gas, requires
                    aeration
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Loading and Unloading</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  Loading the Sterilizer
                </h4>

                <ul>
                  <li>
                    Items must be <b>thoroughly cleaned and completely dry</b>{" "}
                    before sterilization
                  </li>
                  <li>
                    Do not overload the chamber—allow space for vapor and plasma
                    circulation
                  </li>
                  <li>
                    Arrange items so hydrogen peroxide vapor can reach all
                    surfaces
                  </li>
                  <li>
                    Open hinged instruments and disassemble multi-part devices
                  </li>
                  <li>
                    <b>
                      Use only packaging materials compatible with LTGP
                      (non-cellulose)
                    </b>
                  </li>
                  <li>Avoid stacking items or blocking airflow</li>
                  <li>
                    Follow manufacturer instructions for load configuration
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Unloading the Sterilizer
                </h4>

                <ul>
                  <li>
                    <b>No aeration</b> required—items are safe once the cycle is
                    complete
                  </li>
                  <li>
                    <b>Use standard PPE</b> when handling sterilized items
                  </li>
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
                    Moisture can interfere with the sterilization process—items
                    must be completely dry
                  </li>
                  <li>Only use approved non-cellulose packaging materials</li>
                  <li>Improper loading can prevent effective sterilization</li>
                </ul>
              </div>
              <div>
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
              <div>
                <h2>Wrappers & Containers (LTGP)</h2>

                <h4 style={{ textDecoration: "underline" }}>✅ Can Use</h4>
                <ul>
                  <li>
                    <b>Non-cellulose materials only</b>
                  </li>

                  <li>
                    <strong>Approved materials:</strong>
                  </li>
                  <ul>
                    <li>Tyvek (nonwoven synthetic material)</li>
                    <li>Polypropylene-based wraps</li>
                    <li>Nonwoven synthetic packaging</li>
                    <li>Plastic trays or containers approved for LTGP</li>
                  </ul>

                  <li>
                    Materials must allow hydrogen peroxide vapor and plasma to
                    circulate
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>❌ Cannot Use</h4>
                <ul>
                  <li>Cellulose-based materials</li>

                  <li>
                    <strong>Examples:</strong>
                  </li>
                  <ul>
                    <li>Paper packaging</li>
                    <li>Cotton or linen textiles</li>
                    <li>Muslin wraps</li>
                  </ul>

                  <li>
                    <b>
                      Materials that absorb hydrogen peroxide or block plasma
                      penetration
                    </b>
                  </li>
                </ul>

                <strong>Important Notes</strong>
                <ul>
                  <li>
                    Hydrogen peroxide is{" "}
                    <b>
                      absorbed by cellulose, making sterilization ineffective
                    </b>
                  </li>
                  <li>
                    Always use packaging specifically approved for LTGP systems
                  </li>
                  <li>Improper packaging can lead to sterilization failure</li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Pros and Cons</h2>
                <h4 style={{ textDecoration: "underline" }}>Pros</h4>

                <ul>
                  <li>
                    Low-temperature process—safe for heat-sensitive devices
                  </li>
                  <li>
                    <b>Fast cycle times compared to EO</b>
                  </li>
                  <li>
                    <b>No toxic residue</b> remains after sterilization
                  </li>
                  <li>
                    <b>No aeration required</b>
                  </li>
                  <li>Safer for staff and patients compared to EO</li>
                  <li>
                    Environmentally friendly (breaks down into water and oxygen)
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Cons</h4>

                <ul>
                  <li>
                    Cannot process cellulose materials (paper, cotton, linen)
                  </li>
                  <li>
                    <b>Cannot process liquids</b>
                  </li>
                  <li>Limited ability to sterilize long, narrow lumens</li>
                  <li>Requires special packaging (non-cellulose only)</li>
                  <li>
                    <b>Equipment and supplies can be expensive</b>
                  </li>
                </ul>

                <strong>Important Note</strong>
                <ul>
                  <li>
                    LTGP is best used for delicate devices when steam
                    sterilization is not suitable
                  </li>
                </ul>
              </div>
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
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
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
              <div>
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

export default Ltgp;
