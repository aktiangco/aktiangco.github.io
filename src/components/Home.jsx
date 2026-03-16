import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import schoolImage from "../assets/images/ChatGPT.png";

const Home = () => {
  return (
    <div>
      <Card className="container custom-card">
        <Card.Body>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color:"#ffffff" }}>Welcome to Allan's Project</h1>
          </Card.Title>
          <br />
          <Card.Text>
            <Image
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px black solid",
              }}
              src={schoolImage}
              fluid
            />
          </Card.Text>
          <Card.Text>
            As part of my training in sterile processing, I am currently working
            on a project focused on sterilizers used in the Sterile Processing
            Department. This project is designed to help improve my
            understanding of sterilization processes, equipment operation, and
            the important role sterilizers play in maintaining patient safety.
            Through this learning experience, I am developing the knowledge and
            skills needed to support proper instrument decontamination,
            sterilization, and infection prevention in healthcare settings.
          </Card.Text>
          <Card.Text style={{ display: "flex", gap: "15px" }}>
            <Link to="/gallery">
              <button
                className="rounded custom-btn btn-hover"
                style={{
                  backgroundColor: "#52dcc5",
                  border: "none",
                  color: "black",
                }}
              >
                Sterilization
              </button>
            </Link>

            <Link to="/podcast">
              <button
                className="rounded custom-btn btn-hover"
                style={{
                  backgroundColor: "#52dcc5",
                  border: "none",
                  color: "black",
                }}
              >
                Podcast Report
              </button>
            </Link>
            <Link to="/group">
              <button
                className="rounded custom-btn btn-hover"
                style={{
                  backgroundColor: "#52dcc5",
                  border: "none",
                  color: "black",
                }}
              >
                Group Project
              </button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
