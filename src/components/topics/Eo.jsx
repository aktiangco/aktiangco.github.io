import React from "react";
import Card from "react-bootstrap/Card";
import machine from "../../assets/images/eo/eo-machine.png";
import safety from "../../assets/images/eo/eo-safety.png";
import cycle from "../../assets/images/eo/eo-cycle.png";
import cycle2 from "../../assets/images/eo/eo-cycle2.png";
import loading from "../../assets/images/eo/eo-loading.png";
import unloading from "../../assets/images/eo/eo-unloading.png";
import aeration from "../../assets/images/eo/eo-aeration.png";
import wrapper from "../../assets/images/eo/eo-wrapper.png";
import containers from "../../assets/images/eo/eo-tyvek.png";
import procon from "../../assets/images/pro-con.png";
import monitor from "../../assets/images/eo/eo-monitor.png";
import ci from "../../assets/images/eo/eo-autoclave.png";
import bi from "../../assets/images/eo/eo-bi.png";

const Eo = () => {
  return (
    <div>
      <Card className="container ster-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Ethylene Oxide (EO) Sterilizer
            </h1>
          </Card.Title>
          <br />
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>EO Sterilization Facts</h2>

                <ul>
                  <li>
                    Ethylene oxide (EO) is a chemical sterilant used since the
                    1950s for medical devices
                  </li>

                  <li>
                    <strong>Used for items that are:</strong>
                  </li>
                  <ul>
                    <li>
                      <b>Heat-sensitive</b>
                    </li>
                    <li>
                      <b>Moisture-sensitive</b>
                    </li>
                    <li>
                      <b>Pressure-sensitive</b>
                    </li>
                  </ul>

                  <li>
                    EO is considered the most stable low-temperature
                    sterilization method
                  </li>
                  <li>
                    It works by penetrating complex devices and long lumens
                    without damaging them
                  </li>
                  <li>
                    Because of its penetration ability and material
                    compatibility, EO is often called the “gold standard” for
                    certain devices
                  </li>
                </ul>
              </div>
              <div style={{ paddingLeft: "10%" }}>
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
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
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
              <div style={{ paddingLeft: "10%" }}>
                <h2>EO Sterilization Cycle Phases</h2>

                <ul>
                  <li>
                    <strong>Vacuum:</strong>
                  </li>
                  <ul>
                    <li>Air is removed from the chamber and load</li>
                    <li>
                      Allows EO gas to fully penetrate all surfaces and lumens
                    </li>
                  </ul>

                  <li>
                    <strong>Conditioning:</strong>
                  </li>
                  <ul>
                    <li>Temperature and humidity are added to the chamber</li>
                    <li>
                      Humidity is critical because microorganisms must be
                      hydrated for EO to be effective
                    </li>
                  </ul>

                  <li>
                    <strong>Gas Introduction:</strong>
                  </li>
                  <ul>
                    <li>EO gas is injected into the chamber</li>
                    <li>
                      Gas concentration is carefully controlled for
                      effectiveness and safety
                    </li>
                  </ul>

                  <li>
                    <strong>Exposure:</strong>
                  </li>
                  <ul>
                    <li>
                      Items are held at a specific temperature, humidity, and
                      gas concentration
                    </li>
                    <li>EO penetrates packaging, devices, and long lumens</li>
                    <li>Microorganisms are destroyed through alkylation</li>
                  </ul>

                  <li>
                    <strong>Final Vacuum:</strong>
                  </li>
                  <ul>
                    <li>EO gas is removed from the chamber</li>
                    <li>Helps reduce residual gas on items</li>
                  </ul>

                  <li>
                    <strong>Aeration:</strong>
                  </li>
                  <ul>
                    <li>Removes remaining toxic EO residues from items</li>
                    <li>
                      May take several hours and is critical for patient and
                      staff safety
                    </li>
                  </ul>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>Important Notes</h5>
                <ul>
                  <li>
                    Cycle parameters include gas concentration, time,
                    temperature, humidity, and pressure
                  </li>
                  <li>
                    Parameters vary depending on the sterilizer and device
                    manufacturer
                  </li>
                  <li>
                    Proper aeration is required before items can be safely used
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>⚠️ Safety & Risks ⚠️</h2>

                <ul>
                  <li>
                    <strong>EO is:</strong>
                  </li>
                  <ul>
                    <li>Flammable and explosive in certain concentrations</li>
                    <li>
                      Toxic to humans (can enter through inhalation, skin, or
                      ingestion)
                    </li>
                  </ul>

                  <li>
                    <strong>Health risks include:</strong>
                  </li>
                  <ul>
                    <li>Respiratory irritation</li>
                    <li>Headache, nausea, vomiting</li>
                    <li>
                      Long-term risks like cancer and reproductive effects
                    </li>
                  </ul>

                  <li>
                    <strong>PPE required:</strong>
                  </li>
                  <ul>
                    <li>Gloves (neoprene, nitrile, or butyl rubber)</li>
                    <li>Eye/face protection</li>
                    <li>Respiratory protection if needed</li>
                  </ul>
                </ul>
              </div>
              <div style={{ paddingLeft: "5%" }}>
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
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <img
                  src={loading}
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
                  src={unloading}
                  className="section-image"
                  style={{
                    width: "200px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <h2>Loading & Unloading</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  Loading the Sterilizer
                </h4>

                <ul>
                  <li>
                    Items must be thoroughly cleaned and dried before
                    sterilization
                  </li>
                  <li>
                    Do not overload the chamber—allow space for gas circulation
                  </li>
                  <li>
                    Arrange items so EO gas can reach all surfaces and lumens
                  </li>
                  <li>
                    Packages should be placed to allow proper penetration of EO
                    gas
                  </li>
                  <li>
                    Use only packaging materials compatible with EO
                    sterilization
                  </li>
                  <li>
                    Follow manufacturer instructions for loading configuration
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Unloading the Sterilizer
                </h4>

                <ul>
                  <li>Items must complete aeration before handling and use</li>
                  <li>
                    EO residue must be removed to ensure patient and staff
                    safety
                  </li>
                  <li>
                    Use proper PPE when handling loads (gloves, eye/face
                    protection)
                  </li>
                  <li>Handle items carefully to maintain sterility</li>
                  <li>Do not use items if cycle parameters were not met</li>
                </ul>

                <strong>Important Notes</strong>
                <ul>
                  <li>
                    Improper loading can prevent EO gas from reaching all
                    surfaces
                  </li>
                  <li>Aeration is critical because EO is toxic</li>
                  <li>
                    Only trained and qualified personnel should handle EO
                    sterilization
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Aeration</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  Additional Notes (Aeration & Safety)
                </h4>

                <ul>
                  <li>
                    <strong>Aeration:</strong>
                  </li>
                  <ul>
                    <li>
                      Required to remove toxic EO residue from items after
                      sterilization
                    </li>
                    <li>
                      Can take several hours depending on the device and
                      sterilizer
                    </li>
                    <li>Items must not be used until aeration is complete</li>
                  </ul>

                  <li>
                    <strong>Residue Removal:</strong>
                  </li>
                  <ul>
                    <li>EO can remain on materials if not properly aerated</li>
                    <li>Residual gas can be harmful to patients and staff</li>
                  </ul>

                  <li>
                    <strong>Environmental & Safety Controls:</strong>
                  </li>
                  <ul>
                    <li>Sterilizers must have proper ventilation systems</li>
                    <li>Gas levels must be monitored to prevent exposure</li>
                    <li>
                      Only trained personnel should operate EO sterilizers
                    </li>
                  </ul>

                  <strong>Important Reminders</strong>
                  <ul>
                    <li>Never bypass aeration—this is critical for safety</li>
                    <li>
                      Always follow manufacturer instructions for cycle and
                      aeration times
                    </li>
                    <li>Improper aeration can lead to serious health risks</li>
                  </ul>
                </ul>
              </div>
              <div style={{ paddingLeft: "5%" }}>
                <img
                  src={aeration}
                  className="section-image"
                  style={{
                    width: "320px",
                    height: "100%",
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
                    height: "100%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={containers}
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
                    Use packaging materials that allow EO gas to penetrate and
                    be removed during aeration
                  </li>

                  <li>
                    <strong>Commonly used materials:</strong>
                  </li>
                  <ul>
                    <li>Paper-plastic peel pouches (e.g., Tyvek)</li>
                    <li>Medical-grade paper</li>
                    <li>Nonwoven materials (e.g., Tyvek)</li>
                  </ul>

                  <li>
                    <strong>Rigid containers:</strong>
                  </li>
                  <ul>
                    <li>Must be specifically approved for EO sterilization</li>
                    <li>
                      Designed to allow gas دخول (penetration) and removal
                    </li>
                  </ul>

                  <strong>Important Notes</strong>
                  <ul>
                    <li>
                      Packaging must allow EO gas to enter and exit the package
                    </li>
                    <li>Items should not be tightly packed</li>
                    <li>
                      All materials must be compatible with EO and aeration
                      requirements
                    </li>
                    <li>Always follow manufacturer’s instructions</li>
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
                    Effective for heat- and moisture-sensitive medical devices
                  </li>
                  <li>
                    Excellent penetration into complex devices and long lumens
                  </li>
                  <li>Compatible with a wide range of materials</li>
                  <li>
                    Considered the “gold standard” for many delicate instruments
                  </li>
                  <li>
                    Operates at low temperatures, reducing risk of heat damage
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Cons</h4>

                <ul>
                  <li>EO gas is toxic, flammable, and potentially explosive</li>
                  <li>Long cycle times due to required aeration phase</li>
                  <li>Requires strict safety controls and monitoring</li>
                  <li>Higher cost compared to other sterilization methods</li>
                  <li>Residual gas must be removed before items can be used</li>
                </ul>

                <strong>Important Note</strong>
                <ul>
                  <li>
                    EO sterilization is used only when other methods (like
                    steam) are not suitable
                  </li>
                </ul>
              </div>
              <div style={{ paddingLeft: "5%" }}>
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
                  src={monitor}
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
                  src={ci}
                  className="section-image"
                  style={{
                    width: "180px",
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
                    width: "180px",
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
                  <li>Placed with each load to monitor exposure to EO gas</li>
                  <li>
                    Indicators change color when proper sterilization conditions
                    are reached
                  </li>
                  <li>Must be checked before items are released for use</li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Biological Indicators
                </h4>
                <ul>
                <li><b><em>Bacillus Atrophaeus</em></b></li>
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

export default Eo;
