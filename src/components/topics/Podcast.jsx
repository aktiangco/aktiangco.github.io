import React from "react";
import Card from "react-bootstrap/Card";
import profile from "../../assets/images/or-spd.png";
import { Youtube } from "react-bootstrap-icons";

function Podcast() {
  return (
    <div>
      <div>
        <Card className="container custom-card">
          <Card.Body>
            <Card.Title>
              <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
                Podcast Report
              </h1>
            </Card.Title>
            {/* IMAGE + TEXT SECTION */}
            <div className="podcast-header">
              <img
                src={profile}
                alt="OR and SPD collaboration"
                className="podcast-image"
              />
              <div className="podcast-content">
                <h3>
                  OR/SPD Collaboration and the 2018 OR Today Live Conference
                  (featuring David Taylor)
                </h3>
                <div style={{ padding: "5px 0" }}>
                  <a
                    className="rounded custom-btn btn-hover"
                    href="https://youtu.be/kQ32uov5Z_g?si=dKgdnjDrU0ZQDadb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube size={30} />
                    <span>Link here</span>
                  </a>
                </div>
                <Card.Text>- Report by Allan Tiangco</Card.Text>
              </div>
            </div>
            <br />
            <div className="section-bubble" style={{ backgroundColor: "black" }}>
            <div>
            <Card.Text className="paragraph-indent">
              After learning more about the relationship between the Operating
              Room (OR) and the Sterile Processing Department (SPD), I realized
              how important <b style= {{color: "white"}}>teamwork and communication</b> are between these two
              departments. Even though they have different responsibilities,
              they are closely connected through the surgical instruments used
              during procedures. The OR relies on SPD to properly clean,
              inspect, assemble, and sterilize instruments so they are safe for
              patient use. At the same time, SPD depends on OR staff to handle
              instruments carefully after surgery and return them for proper
              reprocessing. Understanding how <b style= {{color: "white"}}>both departments rely on each
              other helped me see how important collaboration is in maintaining
              patient safety.</b>
            </Card.Text>
            <Card.Text className="paragraph-indent">
              I also learned that <b style= {{color: "white"}}>cross-training between OR and SPD staff can
              help both departments better understand each other’s roles</b>. When
              SPD technicians learn more about surgical procedures and how
              instruments are used during surgery, they can better understand
              why each instrument must be properly prepared and function
              correctly. In the same way, when OR staff learn about the cleaning
              and sterilization processes performed in SPD, they <b style= {{color: "white"}}>gain a better
              appreciation for the time, effort, and attention required to
              prepare instruments safely.</b> This type of shared knowledge can
              improve communication and strengthen teamwork between both
              departments.
            </Card.Text>
            <Card.Text className="paragraph-indent">
              Cross-training can also help protect patients by improving
              instrument safety and quality. When staff members understand each
              other’s processes, they are more likely to <b style= {{color: "white"}}>recognize potential
              problems early, such as missing instruments, damaged equipment, or
              improper handling.</b> This can help prevent errors, reduce delays
              during surgery, and ensure that sterile instruments are available
              when needed. Learning about the <b style= {{color: "white"}}>connection between OR and SPD
              helped me understand how important cooperation between departments
              is in creating a safe environment for both patients and healthcare
                  professionals.</b>
                
              </Card.Text>
              </div>
              </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Podcast;
