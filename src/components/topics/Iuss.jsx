import React from "react";
import Card from "react-bootstrap/Card";
import profile from "../../assets/images/logo.png";
import machine from "../../assets/images/iuss/iuss-machine.png";
import cycle from "../../assets/images/iuss/iuss-cycle.png";
import cycle1 from "../../assets/images/iuss/iuss-cycle1.png";
import cycle2 from "../../assets/images/iuss/iuss-cycle2.png";
import loading from "../../assets/images/iuss/iuss-loading.png";
import unloading from "../../assets/images/iuss/iuss-unloading.png";
import flashpak from "../../assets/images/iuss/iuss-flashpak.png";
import container from "../../assets/images/iuss/iuss-container.png";
import cleaning from "../../assets/images/iuss/iuss-cleaning.png";
import monitor from "../../assets/images/iuss/iuss-monitor.png";
import ci from "../../assets/images/iuss/iuss-ci.png";
import bi from "../../assets/images/iuss/iuss-bi.png";
import procon from "../../assets/images/pro-con.png";

const Iuss = () => {
  return (
    <div>
      <Card className="container custom-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Immiediate-Use Steam Sterilizer (IUSS)
            </h1>
          </Card.Title>
          <br></br>
          <Card.Text>
            <div className="section-bubble">
            <img
                  src={machine}
                  className="section-image"
                  style={{
                    width: "350px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              <div>
                <h2>Facts About IUSS</h2>
                <ul>
                  <li>
                    Immediate-Use Steam Sterilization (IUSS) is the current term
                    for what was previously called <b>flash sterilization.</b>
                  </li>

                  <li>
                    IUSS is used when a critical instrument is needed
                    immediately and there is no time for a full terminal
                    sterilization cycle.
                  </li>

                  <li>
                    It is typically performed in emergency or unplanned
                    situations, such as when an instrument becomes contaminated
                    during surgery.
                  </li>

                  <li>
                    <strong>
                      IUSS sterilizers are usually located close to the point of
                      use, most commonly in operating room (OR) areas or
                      sub-sterile rooms near the OR. This allows instruments to
                      be quickly sterilized and returned to the surgical team.
                    </strong>
                  </li>

                  <li>
                    Items processed using IUSS must be used immediately and are
                    not intended for storage.
                  </li>

                  <li>
                    IUSS should not be used as a substitute for having enough
                    instruments or proper instrument inventory.
                  </li>

                  <li>
                    All IUSS cycles{" "}
                    <b>
                      must be monitored and documented according to hospital
                      policy and accreditation requirements.
                    </b>
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Cycle</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  1. Gravity Displacement Cycle
                </h4>
                <ul>
                  <li>
                    <strong>Temperature:</strong> 270°F (132°C)
                  </li>
                  <li>
                    <strong>Exposure Time:</strong> About 3 minutes for
                    non-porous items such as metal instruments
                  </li>
                  <li>
                    <strong>Purpose:</strong> Used when sterilizing simple
                    instruments without lumens or complex design
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  2. Dynamic-Air-Removal (Pre-Vacuum) Cycle
                </h4>
                <ul>
                  <li>
                    <strong>Temperature:</strong> 270°F (132°C)
                  </li>
                  <li>
                    <strong>Exposure Time:</strong> About 4 minutes
                  </li>
                  <li>
                    <strong>Purpose:</strong> Used for more complex instruments
                    because the vacuum removes air and allows steam to penetrate
                    better
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Important Notes About IUSS Cycles
                </h4>
                <ul>
                  <li>
                    IUSS cycles{" "}
                    <b>
                      do not include a drying phase, so instruments may come out
                      moist or wet.
                    </b>
                  </li>
                  <li>
                    The manufacturer’s instructions (IFU) must always be
                    followed for the correct cycle type.
                  </li>
                  <li>
                    Items sterilized using IUSS must be used immediately and
                    should not be stored.
                  </li>
                  <li>
                    Monitoring with chemical indicators and biological
                    indicators is required according to facility policy.
                  </li>
                </ul>
              </div>
              <div>
              <img
                  src={cycle1}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br></br>
                <br></br>
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
                <br></br>
                <br></br>
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
                  src={loading}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br></br>
                <br></br>
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
              <div>
                <h2>Loading and Unloading</h2>
                <h4 style={{ textDecoration: "underline" }}>Loading</h4>
                <ul>
                  <li>
                    Items must be thoroughly cleaned and decontaminated before
                    being placed in the sterilizer.
                  </li>
                  <li>
                    Use approved rigid sterilization containers{" "}
                    <b>(FlashPak)</b> or trays designed for IUSS.
                  </li>
                  <li>
                    Arrange instruments so steam can circulate freely around all
                    surfaces.
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Unloading
                </h4>
                <ul>
                  <li>
                    Allow pressure to return to zero before opening the
                    sterilizer door.
                  </li>
                  <li>
                    Use heat-resistant gloves when removing hot containers or
                    instruments.
                  </li>
                  <li>
                    Carefully transport the sterilized item directly to the
                    point of use.
                  </li>
                  <li>
                    Items processed with IUSS should be used immediately and not
                    stored.
                  </li>
                  <li>
                    Verify chemical indicators and sterilizer cycle parameters
                    before use.
                  </li>
                </ul>
              </div>
              
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Rigid Containers Used for IUSS</h2>

                <p>
                  For Immediate-Use Steam Sterilization (IUSS), instruments
                  should be placed in rigid sterilization containers that are
                  specifically designed and validated for IUSS cycles. These
                  containers help protect instruments and allow safe transport
                  from the sterilizer to the sterile field.
                </p>

                <h4 style={{ textDecoration: "underline" }}>
                  Types of Rigid Containers
                </h4>
                <ul>
                  <li>
                    <strong>IUSS Sterilization Containers:</strong> Metal trays
                    or containers designed specifically for immediate-use steam
                    sterilization <strong>(FlashPak)</strong>. They often have
                    perforated lids or special valves that allow steam
                    penetration while protecting instruments during transport.
                  </li>

                  <li>
                    <strong>Rigid Sterilization Container Systems:</strong>{" "}
                    Reusable metal containers with filters or valve systems that
                    allow proper air removal and steam penetration during
                    sterilization cycles.
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Important Notes</h4>
                <ul>
                  <li>
                    Containers must be validated by the manufacturer for IUSS
                    use.
                  </li>
                  <li>
                    Always follow the device manufacturer’s Instructions for Use
                    (IFU).
                  </li>
                  <li>
                    Containers help reduce contamination risk while transporting
                    instruments to the sterile field.
                  </li>
                  <li>
                    Items processed using IUSS should be used immediately and
                    are not intended for storage.
                  </li>
                </ul>
              </div>
              <div>
              <img
                  src={flashpak}
                  className="section-image"
                  style={{
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br></br>
                <br></br>
                <img
                  src={container}
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
                  src={cleaning}
                  className="section-image"
                  style={{
                    width: "350px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                              </div>
              <div>
                <h2>Cleaning IUSS Containers</h2>
                <ul>
                  <li>Containers must be cleaned after every use.</li>
                  <li>
                    Follow the container manufacturer’s Instructions for Use
                    (IFU).
                  </li>
                  <li>
                    Containers may be cleaned manually or mechanically in a
                    washer.
                  </li>
                  <li>An enzymatic detergent is recommended for cleaning.</li>
                  <li>
                    Do not simply wipe the container with disinfectant wipes
                    because this does not remove soil effectively.
                  </li>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>
                  Monitoring and Maintenance
                </h5>
                <ul>
                  <li>
                    Each container should have a unique identification number.
                  </li>
                  <li>The lid and base must remain matched as a set.</li>
                  <li>
                    Containers should be tested when purchased and periodically
                    to ensure proper function.
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Important Note</h4>
                <ul>
                  <li>
                    Items processed with IUSS must be used immediately and
                    should not be stored.
                  </li>
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
                    Allows rapid sterilization of instruments when they are
                    needed urgently.
                  </li>
                  <li>
                    Helpful during emergency situations, such as when an
                    instrument becomes contaminated during surgery.
                  </li>
                  <li>
                    Provides a quick method to return a critical instrument to
                    service.
                  </li>
                  <li>
                    Can reduce delays in surgical procedures when no replacement
                    instrument is available.
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Cons</h4>
                <ul>
                  <li>
                    IUSS should not be used as a substitute for having enough
                    surgical instruments.
                  </li>
                  <li>
                    Items processed using IUSS cannot be stored and must be used
                    immediately.
                  </li>
                  <li>
                    The cycle usually does not include a drying phase, so items
                    may come out moist or wet.
                  </li>
                  <li>
                    Increased risk of contamination if items are not transported
                    properly to the sterile field.
                  </li>
                  <li>
                    Frequent use of IUSS may indicate poor inventory management
                    or workflow issues.
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Documentation and Joint Commission (JCAHO) Requirements
                </h4>
                <ul>
                  <li>
                    Every IUSS cycle must be documented in a sterilization log.
                  </li>
                  <li>
                    Documentation should include the sterilizer number, date,
                    and cycle parameters.
                  </li>
                  <li>
                    The load contents and the reason for performing IUSS must be
                    recorded.
                  </li>
                  <li>
                    Chemical indicator results and biological indicator
                    monitoring must be documented.
                  </li>
                  <li>
                    There must be traceability linking the instrument to the
                    patient and procedure.
                  </li>
                  <li>
                    Frequent use of IUSS may be reviewed during inspections by
                    accrediting organizations such as The Joint Commission.
                  </li>
                </ul>
              </div>
              <img
                src={procon}
                className="section-image"
                style={{
                  width: "400px",
                  height: "100%",
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
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                  <br></br>
                <br></br>
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
                <br></br>
                <br></br>
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
              <div>
                <h2>How to test IUSS Sterilizer</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  Physical Monitoring
                </h4>
                <ul>
                  <li>
                    <b>Time, temperature, and pressure</b> must be checked for
                    every sterilization cycle.
                  </li>
                  <li>
                    These values are recorded by the sterilizer's display or
                    printout.
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Chemical Indicators
                </h4>
                <ul>
                  <li>
                    Chemical indicators should be placed with the instrument
                    load.
                  </li>
                  <li>
                    The indicator changes color when proper sterilization
                    conditions are reached.
                  </li>
                  <li>
                    The indicator must be checked before the instrument is used.
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Biological Indicators
                </h4>
                <ul>
                  <li>
                    Biological indicators contain bacterial spores used to test
                    sterilization effectiveness.
                  </li>
                  <li>
                    The BI is run through the sterilization cycle and then
                    incubated.
                  </li>
                  <li>
                    No microbial growth indicates successful sterilization.
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Documentation</h4>
                <ul>
                  <li>All IUSS cycles must be documented.</li>
                  <li>
                    Records include sterilizer number, cycle parameters, load
                    contents, and indicator results.
                  </li>
                  <li>
                    Documentation helps ensure compliance with accreditation
                    standards such as The Joint Commission.
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

export default Iuss;
