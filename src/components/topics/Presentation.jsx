import React from "react";
import Card from "react-bootstrap/Card";
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
import drymachine from "../../assets/images/dryheat/dryheat-machine.png";
import drycycle from "../../assets/images/dryheat/dryheat-cycle.png";
import drycycle2 from "../../assets/images/dryheat/dryheat-cycle2.png";
import dryloading from "../../assets/images/dryheat/dryheat-loading.png";
import dryunloading from "../../assets/images/dryheat/dryheat-unloading.png";
import drywrapper from "../../assets/images/dryheat/drytray.png";
import drycontainers from "../../assets/images/dryheat/dryheat-containers.png";
import drytest from "../../assets/images/dryheat/dryheat-test.png";

const Presentation = () => {
  return (
    <div>
      <Card className="container ster-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
        <Card.Text>
            <div className="section-bubble" style={{ display: "center", height: "500px", justifyContent: "center" }}>
              <div>
              <h1>Immediate-Use Steam Sterilizer (IUSS)</h1>
              </div>
              <div>
                <p> and </p>            
              </div>
              <div>
                <h1> Dry Heat Sterilizer</h1>
              
              </div>
              <div>
                <h4>by Allan Tiangco</h4>
              
              </div>
                <br/>
              <br />
              <br/>
                <br/>

            </div>
          </Card.Text>
          <Card.Title className="font-weight-bold">
            <h2 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Immediate-Use Steam Sterilizer (IUSS)
            </h2>
          </Card.Title>
          <br />
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
              <div style={{ paddingLeft: "10%" }}>
                <h3>IUSS Sterilization Facts:</h3>
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
                <h3>Cycle</h3>
                <h5 style={{ textDecoration: "underline" }}>
                  1. Gravity Displacement Cycle
                </h5>
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

                <h5 style={{ textDecoration: "underline" }}>
                  2. Dynamic-Air-Removal (Pre-Vacuum) Cycle
                </h5>
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

                <strong>Important Notes</strong>
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
              <div style={{ paddingLeft: "10%" }}>
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
                <br />
                <br />
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
                <br />
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
              <div style={{ paddingLeft: "10%" }}>
                <h3>Loading & Unloading</h3>
                <h5 style={{ textDecoration: "underline" }}>Loading</h5>
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

                <h5 style={{ textDecoration: "underline" }}>Unloading</h5>
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
                <h3>Wrappers & Containers </h3>

                <p>
                  For Immediate-Use Steam Sterilization (IUSS), instruments
                  should be placed in rigid sterilization containers that are
                  specifically designed and validated for IUSS cycles. These
                  containers help protect instruments and allow safe transport
                  from the sterilizer to the sterile field.
                </p>

                <h5 style={{ textDecoration: "underline" }}>
                  Types of Rigid Containers
                </h5>
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

                <strong>Important Notes</strong>
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
              <div style={{ paddingLeft: "10%" }}>
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
                <br />
                <br />
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
              <div style={{ paddingLeft: "10%" }}>
                <h3>Cleaning IUSS Containers</h3>
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

                <strong>Important Note</strong>
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
                <h3>Pros & Cons</h3>
                <h5 style={{ textDecoration: "underline" }}>Pros</h5>
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

                <h5 style={{ textDecoration: "underline" }}>Cons</h5>
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

                <h5 style={{ textDecoration: "underline" }}>
                  Documentation and Joint Commission (JCAHO) Requirements
                </h5>
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
              <div style={{ paddingLeft: "10%" }}>
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
                    width: "300px",
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
                    width: "300px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <h3>How to test Sterilizer</h3>
                <h5 style={{ textDecoration: "underline" }}>
                  Physical Monitoring
                </h5>
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

                <h5 style={{ textDecoration: "underline" }}>
                  Chemical Indicators
                </h5>
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

                <h5 style={{ textDecoration: "underline" }}>
                  Biological Indicators
                </h5>
                <ul>
                  <li>
                    <b>
                      <em>Geobacillus stearothermophilus</em>
                    </b>
                  </li>
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

                <h5 style={{ textDecoration: "underline" }}>Documentation</h5>
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
          <Card.Title className="font-weight-bold">
            <h2 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Dry Heat Sterilizer
            </h2>
          </Card.Title>
          <br />
          <Card.Text>
            <div className="section-bubble">
              <img
                src={drymachine}
                className="section-image"
                style={{
                  width: "400px",
                  height: "50%",
                  borderRadius: "10%",
                  objectFit: "cover",
                }}
              />
              <div style={{ paddingLeft: "10%" }}>
                <h3>Dry Heat Sterilization Facts</h3>
                <ul>
                  <li>
                    Uses high temperatures without steam to kill microorganisms
                    through oxidation
                  </li>
                  <li>
                    Requires longer exposure times and higher temperatures than
                    steam sterilization
                  </li>
                  <li>
                    <b>
                      Not widely used in healthcare due to inefficiency and
                      potential damage to materials
                    </b>
                  </li>
                  <li>
                    Commonly used for powders, oils, and petroleum-based items
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h3>Cycle</h3>
                <ul>
                  <li>
                    Dry heat is less efficient than steam sterilization, so it
                    requires:
                  </li>
                  <ul>
                    <li>Higher temperatures</li>
                    <li>Longer exposure times</li>
                  </ul>
                  <li>
                    Cycle time and temperature vary depending on the sterilizer
                    and materials being processed
                  </li>
                  <li>
                    Typical temperature range is 160°C–170°C (320°F–338°F)
                  </li>
                </ul>

                <strong>Example:</strong>
                <ul>
                  <li>
                    A steam cycle at 121°C (250°F) is equivalent to a dry heat
                    cycle at 160–170°C (320–338°F) with a longer exposure time
                  </li>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>
                  Types of Cycles:
                </h5>
                <ul>
                  <li>
                    <strong>Gravity Cycle:</strong> Heat moves naturally from
                    top to bottom; may cause uneven temperatures
                  </li>
                  <li>
                    <strong>Convection Cycle:</strong> Uses a fan to circulate
                    heat for even distribution
                  </li>
                </ul>

                <strong>Important Notes</strong>
                <ul>
                  <li>
                    Always follow manufacturer’s instructions for cycle
                    parameters
                  </li>
                  <li>
                    Higher temperatures can reduce exposure time but must still
                    ensure proper sterilization
                  </li>
                  <li>
                    Proper loading is essential for airflow and even heat
                    distribution
                  </li>
                  <li>
                    Mechanical, chemical, and biological monitoring are required
                    to verify the cycle
                  </li>
                </ul>
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <img
                  src={drycycle}
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
                  src={drycycle2}
                  className="section-image"
                  style={{
                    width: "400px",
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
                  src={dryloading}
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
                <br />
                <img
                  src={dryunloading}
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
                <h3>Loading & Unloading</h3>
                <h5 style={{ textDecoration: "underline" }}>Loading:</h5>
                <ul>
                  <li>
                    Items must be thoroughly cleaned and completely dry before
                    loading
                  </li>
                  <li>
                    <b>
                      Use only heat-resistant packaging such as aluminum foil
                    </b>
                  </li>
                  <li>
                    Do not overload the chamber—leave space between items for
                    proper air circulation
                  </li>
                  <li>
                    Arrange items to allow even heat distribution throughout the
                    sterilizer
                  </li>
                  <li>
                    Place items carefully to avoid damage and ensure all
                    surfaces are exposed to heat
                  </li>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>Unloading:</h5>
                <ul>
                  <li>
                    <b>
                      Allow items to cool before handling to prevent burns and
                      damage
                    </b>
                  </li>
                  <li>
                    <b>Use heat-resistant gloves</b> or protective equipment
                    when removing items
                  </li>
                  <li>Handle items carefully to maintain sterility</li>
                  <li>
                    Inspect packages for damage or contamination before use
                  </li>
                  <li>Do not use items if packaging is compromised</li>
                </ul>

                <strong>Important Notes</strong>
                <ul>
                  <li>
                    Proper loading ensures effective sterilization by allowing
                    heat to circulate evenly
                  </li>
                  <li>
                    Improper unloading can compromise sterility or cause injury
                  </li>
                  <li>
                    Always follow manufacturer guidelines and facility policies
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h3>Containers</h3>
                <ul>
                  <li>
                    Use only heat-resistant materials that can withstand high
                    temperatures
                  </li>
                  <li>
                    <strong>Aluminum foil</strong> is the most commonly used
                    packaging
                  </li>
                  <li>
                    Metal containers (such as stainless steel) may be used if
                    approved
                  </li>
                  <li>
                    Glass containers can be used for certain items like oils or
                    powders
                  </li>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>
                  <b>Do NOT Use:</b>
                </h5>
                <ul>
                  <li>
                    Plastic materials that can melt or deform under high heat
                  </li>
                  <li>Paper or cloth wraps not designed for dry heat</li>
                  <li>Any packaging not labeled for high-temperature use</li>
                </ul>
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <img
                  src={drywrapper}
                  className="section-image"
                  style={{
                    width: "200px",
                    height: "100%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br></br>
                <br />
                <img
                  src={drycontainers}
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
                src={procon}
                className="section-image"
                style={{
                  width: "300px",
                  height: "50%",
                  borderRadius: "10%",
                  objectFit: "cover",
                }}
              />
              <div style={{ paddingLeft: "10%" }}>
                <h3>Pros & Cons</h3>
                <h5 style={{ textDecoration: "underline" }}>Pros:</h5>
                <ul>
                  <li>
                    Effective for items that cannot tolerate moisture (oils,
                    powders, petroleum products)
                  </li>
                  <li>
                    No moisture means no risk of corrosion or rust on metal
                    instruments
                  </li>
                  <li>Simple process with no need for steam or pressure</li>
                  <li>Can penetrate materials like oils that steam cannot</li>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>Cons:</h5>
                <ul>
                  <li>
                    Requires higher temperatures and longer exposure times than
                    steam sterilization
                  </li>
                  <li>Less efficient compared to steam sterilization</li>
                  <li>
                    High heat can damage certain instruments and materials
                  </li>
                  <li>Limited use in healthcare settings</li>
                  <li>
                    Uneven heat distribution may occur (especially in
                    gravity-type sterilizers)
                  </li>
                </ul>

                <strong>Important Note</strong>
                <ul>
                  <li>
                    Dry heat is typically used only when steam sterilization is
                    not suitable
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h3>How to test Sterilizer</h3>
                <h5 style={{ textDecoration: "underline" }}>
                  Physical Monitoring
                </h5>
                <ul>
                  <li>Time and temperature must be checked for every cycle</li>
                  <li>
                    Values are recorded by the sterilizer display or printout
                  </li>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>
                  Chemical Indicators
                </h5>
                <ul>
                  <li>Placed with each load</li>
                  <li>Changes color when proper conditions are reached</li>
                  <li>Must be checked before items are used</li>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>
                  Biological Indicators
                </h5>
                <ul>
                  <li>
                    <b>
                      <em>Bacillus Atrophaeus</em>
                    </b>
                  </li>
                  <li>Contain heat-resistant spores</li>
                  <li>Run through the cycle and then incubated</li>
                  <li>No growth = successful sterilization</li>
                </ul>

                <h5 style={{ textDecoration: "underline" }}>Documentation</h5>
                <ul>
                  <li>All cycles must be recorded</li>
                  <li>
                    Includes sterilizer number, cycle details, and results
                  </li>
                  <li>Ensures safety and compliance</li>
                </ul>
              </div>
              <div style={{ paddingLeft: "10%" }}>
                <img
                  src={drytest}
                  className="section-image"
                  style={{
                    width: "450px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Presentation;
