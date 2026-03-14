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
            <Card.Title className="font-weight-bold">
              <h1>Podcast Report</h1>
            </Card.Title>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={profile}
                alt="Allan Kris Tiangco"
                className="section-image"
              />
              <div>
                <h6>
                  OR/SPD Collaboration and the 2018 OR Today Live Conference
                  (featuring David Taylor)
                </h6>
                <div style={{ padding: "5px" }}>
                  <a
                    className="rounded custom-btn"
                    style={{
                      backgroundColor: "#52dcc5",
                      border: "none",
                      color: "black",
                    }}
                    href="https://youtu.be/kQ32uov5Z_g?si=dKgdnjDrU0ZQDadb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube size={40} style={{ padding: "5px" }} />
                    <div style={{ padding: "5px" }}>Link here</div>
                  </a>
                </div>
              </div>
            </div>
                      <Card.Text>
                      The culture within the Operating Room (OR) and the Sterile Processing Department (SPD) is built on teamwork, communication, and a shared commitment to patient safety. Although these departments perform different roles, they are closely connected through the instruments used during surgical procedures. The OR depends on SPD to properly clean, inspect, assemble, and sterilize surgical instruments so they are safe for use. At the same time, SPD relies on the OR staff to handle instruments carefully after procedures and return them for proper reprocessing. A strong culture of respect and collaboration between these departments helps ensure that surgical instruments are always safe and ready when needed.
                      </Card.Text>
                      <Card.Text>
                      Cross-training between OR and SPD staff can significantly improve understanding and cooperation between the two departments. When SPD technicians learn about surgical procedures and how instruments are used in the operating room, they gain a better understanding of how important each instrument is and how it must function during surgery. Similarly, when OR staff learn about the sterilization and reprocessing steps performed in SPD, they develop a greater appreciation for the time, care, and attention required to properly prepare surgical instruments. This shared knowledge strengthens teamwork and improves communication between both departments.
                      </Card.Text>
                      <Card.Text>
                      Cross-training also plays an important role in protecting patients by helping maintain instrument safety and quality. When both departments understand each other's processes, they can identify potential issues earlier, such as missing instruments, damaged equipment, or improper handling. This cooperation helps prevent errors, reduces delays in surgery, and ensures that sterile instruments are available when needed. By working together and supporting one another through cross-training, the OR and SPD create a safer environment for both patients and healthcare professionals.
                      </Card.Text>
                      <Card.Text>
                          - Report by Allan Tiangco
                      </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Podcast;
