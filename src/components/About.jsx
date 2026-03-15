import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import profile from "../assets/images/profile/me.png";

const About = () => {
  return (
    <div>
      <div>
        <Card className="container custom-card">
          <Card.Body>
            <Card.Title className="font-weight-bold">
              <h1 style={{ textDecoration: "underline", color:"#ffffff" }}>About Me</h1>
            </Card.Title>
            <br />
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img
                src={profile}
                alt="Allan Kris Tiangco"
                style={{
                  width: "150px",
                  height: "150px",
                  border: "2px solid black",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div>
                <h2>Allan Kris Tiangco</h2>
                <h4>Medtek College Hayward Student</h4>
              </div>
            </div>
            <br></br>
            <Card.Text>
              I am a dedicated and reliable professional with over 20 years of
              experience working in healthcare logistics, supply chain, and
              fast-paced operational environments. Currently working as a
              Distribution Clerk at UCSF Benioff Children's Hospital Oakland, I
              specialize in inventory management, supply distribution, and
              supporting medical teams to ensure departments have the resources
              they need to provide quality patient care.
            </Card.Text>
            <Card.Text>
              I am currently expanding my skills by studying Sterile Processing
              at Medtek College, where I’m building knowledge in medical
              instrument sterilization, infection control, and healthcare safety
              practices. My goal is to continue growing within the healthcare
              field and contribute to safe and efficient patient care
              environments.
            </Card.Text>
            <Card.Text>
              Throughout my career, I’ve developed strong skills in
              communication, organization, and teamwork. I’m known for being
              dependable, adaptable, and able to perform well under pressure
              while maintaining professionalism and attention to detail.
            </Card.Text>
            <Card.Text>
              Flexibility is key, as we understand the demanding schedules of
              working Sterile Technician. Medtek College Hayward provides
              flexible learning options, allowing Sterile Processing to access
              educational materials at their convenience.
            </Card.Text>
            <Card.Text>
              Outside of work and school, I enjoy watching anime and staying
              connected with pop culture. In my free time, I also enjoy spending
              time with my family, building LEGO sets, riding my bike, and
              working on cars, which help me relax and recharge after busy days.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
