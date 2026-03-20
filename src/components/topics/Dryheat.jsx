import React from "react";
import Card from "react-bootstrap/Card";
import machine from "../../assets/images/dryheat/dryheat-machine.png";
import cycle from "../../assets/images/dryheat/dryheat-cycle.png";
import cycle2 from "../../assets/images/dryheat/dryheat-cycle2.png";
import loading from "../../assets/images/dryheat/dryheat-loading.png";
import unloading from "../../assets/images/dryheat/dryheat-unloading.png";
import wrapper from "../../assets/images/dryheat/drytray.png";
import containers from "../../assets/images/dryheat/dryheat-containers.png";
import procon from "../../assets/images/pro-con.png";
import test from "../../assets/images/dryheat/dryheat-test.png";

const Dryheat = () => {
  return (
    <div>
      <Card className="container ster-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Dry Heat Sterilizer
            </h1>
          </Card.Title>
          <br />
          <Card.Text>
            <div className="section-bubble">
              <img
                src={machine}
                className="section-image"
                style={{
                  width: "400px",
                  height: "50%",
                  borderRadius: "10%",
                  objectFit: "cover",
                }}
              />
              <div style={{ paddingLeft: "10%" }}>
                <h2>Dry Heat Sterilization Facts</h2>
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
                <h2>Cycle</h2>
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

                <h4 style={{ textDecoration: "underline" }}>
                  Types of Cycles:
                </h4>
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
                <h2>Loading & Unloading</h2>
                <h4 style={{ textDecoration: "underline" }}>Loading:</h4>
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

                <h4 style={{ textDecoration: "underline" }}>Unloading:</h4>
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
                <h2>Containers</h2>
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
                  src={wrapper}
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
                <h2>Pros & Cons</h2>
                <h4 style={{ textDecoration: "underline" }}>Pros:</h4>
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

                <h4 style={{ textDecoration: "underline" }}>Cons:</h4>
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
                <h2>How to test Sterilizer</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  Physical Monitoring
                </h4>
                <ul>
                  <li>Time and temperature must be checked for every cycle</li>
                  <li>
                    Values are recorded by the sterilizer display or printout
                  </li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Chemical Indicators
                </h4>
                <ul>
                  <li>Placed with each load</li>
                  <li>Changes color when proper conditions are reached</li>
                  <li>Must be checked before items are used</li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>
                  Biological Indicators
                </h4>
                <ul>
                  <li>Contain heat-resistant spores</li>
                  <li>Run through the cycle and then incubated</li>
                  <li>No growth = successful sterilization</li>
                </ul>

                <h4 style={{ textDecoration: "underline" }}>Documentation</h4>
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
                  src={test}
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

export default Dryheat;
