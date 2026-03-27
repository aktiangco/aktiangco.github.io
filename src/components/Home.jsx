import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import schoolImage from "../assets/images/ChatGPT.png";
import PageViewCounter from "./PageViewCounter";

const Home = () => {
  return (
    <div>
      <Card className="container custom-card">
        <Card.Body>
          <Card.Title className="font-weight-bold">
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Allan's MEDTEK Project
            </h1>
          </Card.Title>
          <br />
          <Card.Text>
            <Image
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px black solid",
              }}
              src={schoolImage}
              fluid
            />
          </Card.Text>
          <div className="section-bubble" style={{ backgroundColor: "black" }}>
            <div>
              <Card.Text className="paragraph-indent">
                As part of my training in sterile processing, I am currently
                working on a project focused on sterilizers used in the Sterile
                Processing Department. This project is designed to help improve
                my understanding of sterilization processes, equipment
                operation, and the important role sterilizers play in
                maintaining patient safety. Through this learning experience, I
                am developing the knowledge and skills needed to support proper
                instrument decontamination, sterilization, and infection
                prevention in healthcare settings.
              </Card.Text>
              <PageViewCounter />
              
              <div className="button-group">
  <Link to="/gallery">
    <button className="rounded custom-btn btn-hover light-btn">
      Sterilization Project
    </button>
  </Link>

  <Link to="/podcast">
    <button className="rounded custom-btn btn-hover light-btn">
      Podcast Report
    </button>
  </Link>

  <Link to="/group">
    <button className="rounded custom-btn btn-hover light-btn">
      Group Project
    </button>
  </Link>

  <Link to="/instrumentTable">
    <button className="rounded custom-btn btn-hover light-btn">
      Instrument Project
    </button>
  </Link>

  <Link to="/photo">
    <button className="rounded custom-btn btn-hover light-btn">
      Group Photos
    </button>
  </Link>
</div>
                
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
