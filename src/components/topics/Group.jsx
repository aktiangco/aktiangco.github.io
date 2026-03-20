import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import group from "../../assets/images/profile/group3.png";
import me from "../../assets/images/profile/me2.png";
import adiel from "../../assets/images/profile/adiel2.png";
import vinessa from "../../assets/images/profile/vinessa2.png";
import john from "../../assets/images/profile/john2.png";
import cesar from "../../assets/images/profile/cesar2.png";
import eric from "../../assets/images/profile/eric2.png";
import { Google, FolderSymlinkFill } from "react-bootstrap-icons";

const Group = () => {
  return (
    <div>
      <Card className="container custom-card">
        <Card.Body style={{ display: "center", height: "100%" }}>
          <Card.Title className="font-weight-bold">
            <h1
              style={{
                textAlign: "center",
                textDecoration: "underline",
                color: "#ffffff",
              }}
            >
              Sterilizer's Group Project
            </h1>
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <Image
              style={{
                width: "100%",
                height: "50%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src={group}
              fluid
            />
            <br />
            <br />
            <h2>The Clean Pean Team</h2>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <img
                src={eric}
                style={{
                  height: " 150px",
                  width: "150px",
                  borderRadius: "10%",
                }}
              />
              <div>
                <h2>Steam Sterilizer</h2>
                <h5>Alcala, Eric</h5>
                <a
                  href="https://docs.google.com/presentation/d/1Pbo6Vxm1lPPcEF6uVLbQP8Uz0uOcXCXq73nto1PRj4w/edit" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  <Google size={20} />
                  <FolderSymlinkFill size={20} />
                </a>
              </div>
            </div>
          </Card.Text>

          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "#87ceeb", color: "white" }}
            >
              <img
                src={adiel}
                style={{
                  height: " 150px",
                  width: "150px",
                  borderRadius: "10%",
                }}
              />
              <div>
                <h2>Ethylene Oxide</h2>
                <h4>Valquez Gonzalez, Adiel</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "#87ceeb",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  <Google size={20} />
                  <FolderSymlinkFill size={20} />
                </a>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "#50c878", color: "black" }}
            >
              <img
                src={john}
                style={{
                  height: " 150px",
                  width: "150px",
                  borderRadius: "10%",
                }}
              />
              <div>
                <h2>Low-Temperature Gas Plasma</h2>
                <h4>Bejarin, John</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "#50c878",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  <Google size={20} />
                  <FolderSymlinkFill size={20} />
                </a>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "red", color: "black" }}
            >
              <img
                src={cesar}
                style={{
                  height: " 150px",
                  width: "150px",
                  borderRadius: "10%",
                }}
              />
              <div>
                <h2>Low-Temperature Hydrogen Peroxide(V-Pro)</h2>
                <h4>Trejo, Cesar</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "red",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  <Google size={20} />
                  <FolderSymlinkFill size={20} />
                </a>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "pink", color: "black" }}
            >
              <img
                src={vinessa}
                style={{
                  height: " 150px",
                  width: "150px",
                  borderRadius: "10%",
                }}
              />
              <div>
                <h2>Hydrogen Peroxide Ozone Sterilization</h2>
                <h4>Cofield, Vinessa</h4>
                <a
                  href="https://aktiangco.github.io/#/error" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "pink",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  <Google size={20} />
                  <FolderSymlinkFill size={20} />
                </a>
              </div>
            </div>
          </Card.Text>
          <Card.Text>
            <div
              className="section-bubble"
              style={{ backgroundColor: "#7852a9", color: "white" }}
            >
              <img
                src={me}
                style={{
                  height: " 150px",
                  width: "150px",
                  borderRadius: "10%",
                }}
              />
              <div>
                <h2>Dry Heat and IUSS</h2>
                <h4>Tiangco, Allan</h4>
                <a
                  href="https://aktiangco.github.io/#/presentation" // update link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded custom-btn btn-hover"
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    color: "#7852a9",
                    padding: "10px 20px",
                    textDecoration: "none",
                  }}
                >
                  <Google size={20} />
                  <FolderSymlinkFill size={20} />
                </a>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Group;
