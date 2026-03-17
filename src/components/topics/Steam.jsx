import React from "react";
import Card from "react-bootstrap/Card";
import machine from "../../assets/images/steam/steam-machine.png";
import cycle from "../../assets/images/steam/steam-cycle.png";
import gravity from "../../assets/images/steam/steam-gravity.png";
import dynamic from "../../assets/images/steam/steam-dynamic.png";
import loading from "../../assets/images/steam/steam-loading.png";
import load from "../../assets/images/steam/steam-load.png";
import unloading from "../../assets/images/steam/steam-unloading.png";
import wrapper from "../../assets/images/steam/steam-wrapper.png";
import rigid from "../../assets/images/steam/wrapper.png";
import monitor from "../../assets/images/steam/steam-monitor.png";
import ci from "../../assets/images/steam/steam-autoclave.png";
import bi from "../../assets/images/steam/steam-bowie.png";
import procon from "../../assets/images/pro-con.png";

const Steam = () => {
  return (
    <div>
      <Card className="container ster-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Steam Sterilizer
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
                  height: "350px",
                  borderRadius: "10%",
                  objectFit: "cover",
                }}
              />
              <div>
                <h2>Facts About Steam Sterilizers</h2>
                <ul>
                  <li>
                    Steam sterilization is the most widely used sterilization
                    method in healthcare facilities. It is commonly used because
                    it is reliable, fast, and effective for many medical devices
                    and surgical instruments.
                  </li>
                  <li>
                    Steam sterilization works by using saturated steam under
                    pressure. The combination of heat, moisture, and pressure
                    destroys microorganisms, including highly resistant
                    bacterial spores.
                  </li>
                  <li>
                    The main sterilization parameters are time, temperature, and
                    pressure. All three must reach the correct levels for
                    sterilization to occur. If one factor is incorrect, the
                    process may fail.
                  </li>
                  <li>
                    Steam sterilization requires direct contact between steam
                    and the item being sterilized. Air pockets or improper
                    loading can prevent steam from reaching surfaces, which may
                    result in incomplete sterilization.
                  </li>
                  <li>
                    There are different types of steam sterilizers used in
                    healthcare facilities. Common types include gravity
                    displacement sterilizers and dynamic air removal
                    (pre-vacuum) sterilizers.
                  </li>
                  <li>
                    Proper packaging and loading are essential for successful
                    sterilization. Packaging materials must allow steam
                    penetration while maintaining sterility after the cycle is
                    complete.
                  </li>
                  <li>
                    Monitoring of the sterilization process is necessary to
                    ensure patient safety. Sterilization cycles are monitored
                    using physical monitors, chemical indicators, and biological
                    indicators.
                  </li>
                  <li>
                    Steam sterilization is safe and environmentally friendly
                    because it does not leave toxic residues. The process
                    primarily uses water and heat.
                  </li>
                </ul>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Cycles</h2>
                <h4 style={{ textDecoration: "underline" }}>
                  1. Gravity Displacement Cycle
                </h4>
                <h5>Details:</h5>
                <ul>
                  <li>
                    Steam enters the chamber and pushes the air out by gravity
                    through a drain.
                  </li>
                  <li>
                    As steam fills the chamber, it replaces the cooler air.
                  </li>
                  <li>
                    It is slower than other cycles because air removal is not
                    mechanical.
                  </li>
                </ul>
                <h5>Common use:</h5>
                <ul>
                  <li>
                    Steam enters the chamber and pushes the air out by gravity
                    through a drain.
                  </li>
                  <li>
                    As steam fills the chamber, it replaces the cooler air.
                  </li>
                  <li>
                    It is slower than other cycles because air removal is not
                    mechanical.
                  </li>
                </ul>
                <h5>Cycle Examples:</h5>
                <ul>
                  <li>Wrapped instrument: 121°C (250°F) for 30 minutes</li>
                  <li>Unwrapped instruments: 121°C (250°F) for 15 minutes</li>
                  <li>Metal instruments: 132°C (270°F) for 15 minutes</li>
                  <li>Simple instrument loads: 132°C (270°F) for 10 minutes</li>
                </ul>
                <h4 style={{ textDecoration: "underline" }}>
                  2. Dynamic Air Removal Cycle
                </h4>
                <h5>Details:</h5>
                <ul>
                  <li>
                    A vacuum pump removes air from the chamber before steam
                    enters.
                  </li>
                  <li>
                    This allows steam to penetrate instruments and packaging
                    more effectively.
                  </li>
                  <li>It is faster and more efficient than gravity cycles.</li>
                </ul>
                <h5>Common use:</h5>
                <ul>
                  <li>Wrapped instrument sets</li>
                  <li>Complex surgical instruments</li>
                  <li>Large loads</li>
                </ul>
                <h5>Cycle Examples:</h5>
                <ul>
                  <li>Wrapped instrument: 132°C (270°F) for 4 minutes</li>
                  <li>Unwrapped instruments: 132°C (270°F) for 3 minutes</li>
                  <li>Metal instruments: 135°C (275°F) for 3 minutes</li>
                  <li>
                    Implants (BI monitoring): 132°C (270°F) for 10 minutes
                  </li>
                </ul>
                <h4 style={{ textDecoration: "underline" }}>
                  3. Extended (or Special) Cycles (Dynamic Cycle)
                </h4>
                <h5>Details:</h5>
                <ul>
                  <li>
                    Extended cycles provide additional exposure time so steam
                    can fully penetrate heavy or complicated instrument sets.
                  </li>
                  <li>
                    They are often used when standard cycles may not allow
                    enough time for proper sterilization.
                  </li>
                  <li>
                    The exact parameters depend on the sterilizer manufacturer
                    and the medical device instructions for use (IFU).
                  </li>
                </ul>
                <h5>Common use:</h5>
                <ul>
                  <li>Large or heavy instrument trays</li>
                  <li>Complex surgical instrument sets</li>
                  <li>
                    Implants that require additional sterilization assurance
                  </li>
                  <li>Dense metal devices that take longer to heat</li>
                </ul>
                <h5>Cycle Examples:</h5>
                <ul>
                  <li>Gravity Cycle: 121°C (250°F) for about 40 minutes</li>
                  <li>Dynamic Cycle: 132°C (270°F) for about 10 minutes</li>
                </ul>
              </div>
              <div>
                <img
                  src={gravity}
                  className="stack-image"
                  style={{
                    width: "385px",
                    height: "300px",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <br />
                <img
                  src={dynamic}
                  className="stack-image"
                  style={{
                    width: "385px",
                    height: "300px",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <br />
                <img
                  src={cycle}
                  className="stack-image"
                  style={{
                    width: "385px",
                    height: "300px",
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
                  className="stack-image"
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={load}
                  className="stack-image"
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={unloading}
                  className="stack-image"
                  style={{
                    width: "300px",
                    height: "200px",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div>
                <h2>Loading and Unloading</h2>
                <h4 style={{ textDecoration: "underline" }}>Loading</h4>
                <h5>Do's</h5>
                <ul>
                  <li>
                    Follow the manufacturer’s instructions for loading patterns
                    and cycle parameters.
                  </li>
                  <li>
                    Place heavier instrument sets on the bottom shelves and
                    lighter items on the top.
                  </li>
                  <li>
                    Position peel pouches on their edge in a rack or basket so
                    steam can circulate around them.
                  </li>
                  <li>
                    Space packages and trays properly so steam can reach all
                    surfaces.
                  </li>
                  <li>
                    Place basins on their sides or tilted to prevent water from
                    collecting inside.
                  </li>
                  <li>
                    Use proper packaging materials that are compatible with
                    steam sterilization.
                  </li>
                </ul>
                <h5>Dont's</h5>
                <ul>
                  <li>
                    Do not overload the sterilizer chamber, which can block
                    steam circulation.
                  </li>
                  <li>Do not stack peel pouches flat on top of each other.</li>
                  <li>Do not place items directly on the chamber floor.</li>
                  <li>
                    Do not mix incompatible items or different sterilization
                    methods in one cycle.
                  </li>
                  <li>
                    Do not compress wrapped trays, because tight packaging can
                    prevent steam penetration.
                  </li>
                </ul>
              </div>
              <div>
                <h4 style={{ textDecoration: "underline" }}>Unloading</h4>
                <h5>Do's</h5>
                <ul>
                  <li>
                    Wait until the cycle is complete and pressure returns to
                    zero before opening the door.
                  </li>
                  <li>
                    Crack the door slightly and allow items to cool for a few
                    minutes before removing them.
                  </li>
                  <li>
                    Check chemical indicators and package integrity before
                    releasing items for storage.
                  </li>
                  <li>
                    Handle packages carefully to avoid tearing the wrap or
                    contaminating the items.
                  </li>
                  <li>
                    Use clean gloves or proper handling technique when removing
                    sterile packages.
                  </li>
                </ul>
                <h5>Dont's</h5>
                <ul>
                  <li>
                    Do not remove items while they are still hot or wet. Wet
                    packs can become contaminated.
                  </li>
                  <li>
                    Do not place sterile items on contaminated or unclean
                    surfaces.
                  </li>
                  <li>
                    Do not stack warm packages, as this can trap moisture and
                    cause wet packs.
                  </li>
                  <li>
                    Do not handle packages excessively, which can compromise the
                    sterile barrier.
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </Card.Text>
          <Card.Text>
            <div className="section-bubble">
              <div>
                <h2>Wrappers and Containers</h2>
                <div>
                  <div>
                    <h4 style={{ textDecoration: "underline" }}>
                      1. Woven Textile
                    </h4>
                    <ul>
                      <li>Made from cotton or cotton/polyester blends.</li>{" "}
                      {/* need fact check */}
                      <li>Reusable and must be laundered after each use.</li>
                      <li>
                        Allows good steam penetration but requires proper
                        folding and handling.
                      </li>
                      <li>
                        Less common today because many hospitals prefer
                        disposable wraps.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ textDecoration: "underline" }}>
                      2. Non-Woven Textile
                    </h4>
                    <ul>
                      <li>Made from polypropylene synthetic fibers.</li>
                      <li>Single-use disposable wrap</li>
                      <li>
                        Provides strong microbial barrier while allowing steam
                        penetration.
                      </li>
                      <li>
                        Often used with the double-wrapping technique for
                        instrument trays.
                      </li>
                      <li>Prone to damage from improper handling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ textDecoration: "underline" }}>
                      3. Peel Pouches (Paper–Plastic Pouches)
                    </h4>
                    <ul>
                      <li>
                        One side medical-grade paper, the other clear plastic
                        film.
                      </li>
                      <li>Used for small or lightweight instruments.</li>
                      <li>
                        Allows staff to see the instrument through the clear
                        side.
                      </li>
                      <li>
                        Must be sealed with a heat sealer or self-sealing strip.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ textDecoration: "underline" }}>
                      4. Rigid Container
                    </h4>
                    <ul>
                      <li>
                        Made of metal or durable plastic containers with filters
                        or valves.
                      </li>
                      <li>
                        Designed to allow steam penetration and air removal.
                      </li>
                      <li>
                        Reusable and durable, commonly used for large instrument
                        sets.
                      </li>
                      <li>
                        Filters or valves must be checked and replaced according
                        to manufacturer instructions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={wrapper}
                  className="section-image"
                  style={{
                    width: "400px",
                    height: "50%",
                    borderRadius: "10%",
                    objectFit: "cover",
                  }}
                />
                <br />
                <br />
                <img
                  src={rigid}
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
                <div>
                  <div>
                    <h4 style={{ textDecoration: "underline" }}>Pros:</h4>
                    <ul>
                      <li>
                        Highly effective – Steam sterilization reliably destroys
                        bacteria, viruses, fungi, and spores when proper time,
                        temperature, and pressure are reached.
                      </li>
                      <li>
                        Fast cycle times – Most steam cycles are completed in
                        minutes, making it efficient for busy hospitals.
                      </li>
                      <li>
                        Non-toxic – Steam uses water vapor, so it does not leave
                        harmful chemical residues on instruments.
                      </li>
                      <li>
                        Cost-effective – Steam sterilization is generally less
                        expensive than many other sterilization methods.
                      </li>
                      <li>
                        Easy to monitor – It can be monitored with physical
                        monitors, chemical indicators, and biological
                        indicators.
                      </li>
                      <li>
                        Widely used and trusted – It is the most common
                        sterilization method in healthcare facilities.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={{ textDecoration: "underline" }}>Cons:</h4>
                    <ul>
                      <li>
                        Not suitable for heat-sensitive items – Some plastics,
                        electronics, and delicate materials can be damaged by
                        high heat and moisture.
                      </li>
                      <li>
                        Requires proper packaging and loading – Incorrect
                        loading can prevent steam from reaching all surfaces.
                      </li>
                      <li>
                        Risk of wet packs – Moisture remaining after the cycle
                        can compromise sterility.
                      </li>
                      <li>
                        Potential instrument damage – Repeated exposure to heat
                        and moisture can cause corrosion or dulling of
                        instruments.
                      </li>
                      <li>
                        Requires good water quality – Poor water quality can
                        cause mineral buildup or stains on instruments.
                      </li>
                      <li>
                        Air removal is critical – Air pockets can prevent steam
                        from contacting surfaces, which is why tests like the
                        Bowie-Dick test are needed.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card.Text>

          <Card.Text>
            <div
              className="section-bubble"
              style={{
                paddingLeft: "150px",
              }}
            >
              <div>
                <h2>Testing Sterilizer</h2>
                <div>
                  <h4 style={{ textDecoration: "underline" }}>
                    1. Physical monitor - Machine Reading
                  </h4>
                  <h6>This checks the machine’s cycle parameters.</h6>
                  <ul>
                    <li>Time</li>
                    <li>Temperature</li>
                    <li>Pressure</li>
                  </ul>
                </div>
                <br />
                <br />
                <br />
                <div>
                  <h4 style={{ textDecoration: "underline" }}>
                    2. Chemical Indicator (CI) - Every Package
                  </h4>
                  <h6>
                    These indicators change color when exposed to certain
                    sterilization conditions.
                  </h6>
                  <ul>
                    <li>Autoclave Tape</li>
                    <li>Class 5 Integration</li>
                    <li>Internal CI Strips</li>
                  </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div>
                  <h4 style={{ textDecoration: "underline" }}>
                    3. Biological Indicator (BI) Test - Daily
                  </h4>
                  <h6>
                    This is the most reliable test because it uses living
                    spores.
                  </h6>
                  <ol>
                    <li>
                      Place a BI test pack in the sterilizer (usually in the
                      most difficult area for steam to reach).
                    </li>
                    <li>Run a normal sterilization cycle.</li>
                    <li>Remove the BI vial after the cycle.</li>
                    <li>Incubate the vial in a BI incubator.</li>
                    <li>
                      Check the result after the required time (often 24 hours
                      or rapid BI 1–3 hours).
                    </li>
                  </ol>
                  <br />
                  <ul>
                    <h6>Results:</h6>
                    <li>No color change / no growth → sterilization passed</li>
                    <li>Color change / growth → sterilization failed</li>
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src={monitor}
                  className="stack-image"
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
                  className="stack-image"
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
                  className="stack-image"
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default Steam;
