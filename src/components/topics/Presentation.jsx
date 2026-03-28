import React from "react";
import Card from "react-bootstrap/Card";

// images
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
import jcaho from "../../assets/images/iuss/jcaho.png";
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
    <Card className="container ster-card">
      <Card.Body>
        {/* HEADER */}
        <div className="section-bubble center-section">
          <h1>IUSS & Dry Heat Sterilizers</h1>
          <h4>by Allan Tiangco</h4>
        </div>

        {/* ================= IUSS ================= */}
        <h2 className="section-title">Immediate-Use Steam Sterilizer (IUSS)</h2>

        <div className="section-bubble">
          <img src={machine} className="section-img-lg" alt="iuss" />
          <div>
            <h3>Facts</h3>
            <ul>
              <li>IUSS = formerly flash sterilization</li>
              <li>Used for urgent/unplanned needs</li>
              <li>Located near OR/sub-sterile rooms</li>
              <li>
                <strong>Must be used immediately (no storage)</strong>
              </li>
              <li>Not a substitute for inventory</li>
              <li>
                <strong>Must be monitored & documented</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* CYCLE */}
        <div className="section-bubble">
          <div className="image-stack">
            <img src={cycle} alt="" />
          </div>
          <div>
            <h3>Cycle</h3>
            <ul>
              <li>
                <strong>Gravity:</strong> 270°F – ~3 min
              </li>
              <li>
                <strong>Pre-vacuum:</strong> 270°F – ~4 min
              </li>
              <li>No drying phase → items may be wet</li>
            </ul>
          </div>
          <div className="image-stack">
            <img src={cycle1} alt="" />
          </div>
          <div className="image-stack">
            <img src={cycle2} alt="" />
          </div>
        </div>

        {/* LOADING */}
        <div className="section-bubble">
          <div className="image-stack">
            <img src={loading} alt="" />
          </div>

          <div>
            <h3>Loading & Unloading</h3>
            <ul>
              <li>Clean before sterilizing</li>
              <li>Use FlashPak / approved containers</li>
              <li>Use PPE when unloading</li>
              <li>Transport directly to point of use</li>
            </ul>
          </div>
          <div className="image-stack">
            <img src={unloading} alt="" />
          </div>
        </div>

        {/* CONTAINERS */}
        <div className="section-bubble">
          <div className="image-stack">
            <img src={container} alt="" />
          </div>
          <div>
            <h3>Wrappers & Containers</h3>
            <ul>
              <li>
                Use validated rigid containers <b>(Flashpak)</b>
              </li>
              <li>Follow IFU</li>
              <li>Used only for immediate use</li>
            </ul>
          </div>

          <div className="image-stack">
            <img src={flashpak} alt="" />
          </div>
        </div>

        {/* CLEANING */}
        <div className="section-bubble">
          <img src={cleaning} className="section-img-lg" alt="" />

          <div>
            <h3>Cleaning</h3>
            <ul>
              <li>Clean after every use</li>
              <li>Use enzymatic detergent</li>
              <li>Do NOT wipe only</li>
              <li>Track container ID</li>
            </ul>
          </div>
        </div>

        {/* PROS CONS */}
        <div className="section-bubble">
          <div>
            <h3>Pros & Cons</h3>
            <ul>
              <li>Fast for emergencies</li>
              <li>No storage allowed</li>
              <li>Higher contamination risk</li>
            </ul>
          </div>

          <img src={procon} className="section-img-lg" alt="" />
        </div>

        {/* Documentaion */}
        <div className="section-bubble">
          <img src={jcaho} className="section-img-lg" alt="" />
          <div>
            <h3>Documentation and Joint Commission (JCAHO) Requirements</h3>
            <ul>
              <li>
                Every IUSS cycle must be documented in a sterilization log.
              </li>
              <li>
                Documentation should include the sterilizer number, date, and
                cycle parameters.
              </li>
              <li>
                The load contents and the reason for performing IUSS must be
                recorded.
              </li>
              <li>
                Chemical indicator results and biological indicator monitoring
                must be documented.
              </li>
              <li>
                There must be traceability linking the instrument to the patient
                and procedure.
              </li>
              <li>
                Frequent use of IUSS may be reviewed during inspections by
                accrediting organizations such as The Joint Commission.
              </li>
            </ul>
          </div>
          <div>
            <h5>Failure</h5>
            <ul>
              <li>
                <b>Failed inspections / citations</b>
              </li>
              <li>
                <b>Possible loss of accreditation</b>
                <br />
                (serious or repeated violations)
              </li>
              <li>
                <b>Legal risk increases</b>
                <br />
                (hard to defend if infection occurs)
              </li>
              <li>
                Corrective action required
                <br />
                (policy changes, retraining, audits)
              </li>
              <li>
                Closer monitoring by surveyors
                <br />
                (especially if IUSS is used frequently)
              </li>
            </ul>
          </div>
        </div>

        {/* TESTING */}
        <div className="section-bubble">
          <div>
            <h3>Testing</h3>
            <ul>
              <li>Physical: time/temp/pressure</li>
              <li>Chemical indicators</li>
              <li>Biological indicators</li>
              <ul>
                <li>
                  <b>
                    <italic>Geobacillus stearothermophilus</italic>
                  </b>
                </li>
              </ul>
              <li>Documentation required</li>
            </ul>
          </div>
          <div className="image-stack">
            <img src={monitor} alt="" />
          </div>
          <div className="image-stack">
            <img src={ci} alt="" />
          </div>
          <div className="image-stack">
            <img src={bi} alt="" />
          </div>
        </div>

        {/* ================= DRY HEAT ================= */}
        <h2 className="section-title">Dry Heat Sterilizer</h2>

        <div className="section-bubble">
          <img src={drymachine} className="section-img-lg" alt="" />
          <div>
            <h3>Facts</h3>
            <ul>
              <li>
                Uses high heat <b>(no steam)</b>
              </li>
              <li>Longer time required</li>
              <li>Used for oils/powders</li>
              <li>Less common in healthcare</li>
              <ul>
                <li> inefficiency and potential damage to materials</li>
              </ul>
            </ul>
          </div>
        </div>

        {/* CYCLE */}
        <div className="section-bubble">
          <div className="image-stack">
            <img src={drycycle} alt="" />
          </div>
          <div>
            <h3>Cycle</h3>
            <ul>
              <li>160–170°C (320–338°F)</li>
              <li>Requires longer exposure</li>
              <li>
                Gravity vs Convection<b>(uses fan to circulate heat)</b>
              </li>
            </ul>
          </div>

          <div className="image-stack">
            <img src={drycycle2} alt="" />
          </div>
        </div>

        <div className="section-bubble">
          <div className="image-stack">
            <img src={dryloading} alt="" />
          </div>

          {/* LOADING */}
          <div>
            <h4>Loading</h4>
            <ul>
              <li>Must be dry</li>
              <li>Use heat-safe materials</li>
              <li>Do not overload</li>
            </ul>
          </div>
          <div className="image-stack">
            <img src={dryunloading} alt="" />
          </div>
          <div>
            <h4>UnLoading</h4>
            <ul>
              <li>
                Allow items to cool before handling to prevent burns and damage
              </li>
              <li>Use heat-resistant gloves </li>
              <li>Handle items carefully to maintain sterility</li>
            </ul>
          </div>
        </div>

        {/* CONTAINERS */}
        <div className="section-bubble">
          <div className="image-stack">
            <img src={drywrapper} alt="" />
          </div>

          <div>
            <h3>Containers</h3>
            <ul>
              <li>Aluminum foil / metal</li>
              <li>
                Glass containers can be used for certain items like oils or
                powders
              </li>
              <li>
                No plastic or cloth <b>(It will burn)</b>
              </li>
            </ul>
          </div>

          <div className="image-stack">
            <img src={drycontainers} alt="" />
          </div>
        </div>

        {/* PRO AND CONS */}
        <div className="section-bubble">
          <div>
            <h4 style={{ textDecoration: "underline" }}>Pros:</h4>
            <ul>
              <li>Good for oils, powders, and petroleum items</li>
              <li>No moisture → no rust or corrosion</li>
              <li>Simple process (no steam needed)</li>
            </ul>
          </div>

          <img
            src={procon}
            className="section-img-lg"
            alt="Dry heat pros and cons"
          />
          <div>
            <h4 style={{ textDecoration: "underline" }}>Cons:</h4>
            <ul>
              <li>Requires high temperature and long time</li>
              <li>Less efficient than steam sterilization</li>
              <li>Can damage heat-sensitive materials</li>
              <li>Limited use in healthcare</li>
            </ul>
          </div>
        </div>

        {/* TESTING */}
        <div className="section-bubble">
          <div>
            <h3>Testing</h3>
            <ul>
              <li>Physical: time/temp</li>
              <li>Chemical indicators</li>
              <li>Biological indicators</li>
              <ul>
                <li>
                  <b>
                    <italic>Bacillus Atrophaeus</italic>
                  </b>
                </li>
              </ul>
              <li>Documentation required</li>
            </ul>
          </div>

          <img src={drytest} className="section-img-lg" alt="" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Presentation;
