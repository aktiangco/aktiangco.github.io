import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import medtek from "../assets/images/medtek.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    emailjs
      .send(
        "service_owtck3r",
        "template_lhh96go",
        formData,
        "k5Ua3QxLrv-6FT1-4"
      )
      .then(() => {
        alert("THANK YOU, COME AGAIN!!!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setError("Failed to send message. Please try again.");
      });
  };

  return (
    <div>
      <Card className="container custom-card">
        <Card.Body>
          <Card.Title>
            <h1 style={{ textDecoration: "underline", color: "#ffffff" }}>
              Contact
            </h1>
            <br />
          </Card.Title>
          <div className="section-bubble" style={{ backgroundColor: "black" }}>
            <div>
              <Card.Text>
                If you have any questions, feel fill in the form bellow.
              </Card.Text>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Feedback</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="pop, lock and drop it"
                    required
                  />
                </Form.Group>

                <Button
                  className="rounded custom-btn btn-hover"
                  type="submit"
                  style={{
                    backgroundColor: "#52dcc5",
                    border: "none",
                    color: "black",
                  }}
                >
                  Send Feedback
                </Button>
              </Form>
            </div>
            <div style={{ paddingLeft: "10%" }}>
              <img
                src={medtek}
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
