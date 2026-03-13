import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_owtck3r',
      'template_lhh96go',
      formData,
      'k5Ua3QxLrv-6FT1-4'
    )
    .then(() => {
      alert("Survey sent successfully!");
      setFormData({ name:'', email:'', message:'' });
    })
    .catch(() => {
      alert("Failed to send message.");
    });
  };

  return (
    <div>
      <Card className="container custom-card">
        <Card.Body>
          <Card.Title><h1>Contact</h1></Card.Title>
          <Card.Text>If you have any questions, feel fill in the form bellow.</Card.Text>

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
              />
            </Form.Group>

            <Button variant="light" type="submit">
              Send Feedback
            </Button>

          </Form>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;