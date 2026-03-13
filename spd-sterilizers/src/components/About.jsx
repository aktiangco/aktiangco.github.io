import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const About = () => {
    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid'
      };

    return (
        <div>
            <div>
            <Card className="container" style={cardStyle}>
                <Card.Body>
                    <Card.Title className="font-weight-bold"><h1>About Us</h1></Card.Title>
                    <br />    
                    <Card.Text>
                        At Medtek College Hayward, we are dedicated to empowering Sterile Technician and providing them with the tools they need to excel in their careers. Our platform is committed to delivering high-quality education and training, enabling Sterile Technician to make a positive impact in the healthcare industry.
                    </Card.Text>
                    <Card.Text>
                        Our team of experienced Sterile Technician instructors at Medtek College Hayward brings a wealth of knowledge and expertise to the table. With years of practical experience in various healthcare settings, our instructors have a deep understanding of the challenges faced by Sterile Technicians. They are passionate about sharing their knowledge and helping Sterile Technician enhance their skills to deliver exceptional patient care.
                    </Card.Text>
                    <Card.Text>
                        Quality Education is our top priority at Medtek College Hayward. We offer a comprehensive curriculum designed to cover a wide range of relevant topics, including clinical skills, patient care, specialized procedures, and professional development. Our courses are regularly updated to incorporate the latest industry trends and evidence-based practices, ensuring that Sterile Technicians receive the most up-to-date education.
                    </Card.Text>
                    <Card.Text>
                        Flexibility is key, as we understand the demanding schedules of working Sterile Technician. Medtek College Hayward provides flexible learning options, allowing Sterile Processing to access educational materials at their convenience. 
                    </Card.Text>
                    <Card.Text>
                        At Medtek College Haywards, we foster a supportive and collaborative learning environment. We believe in the power of community and provide opportunities for Sterile Technicians to connect, engage, and share insights. Our platform facilitates discussions and networking, enabling Sterile Technician to learn from each other and build professional connections.
                    </Card.Text>
                    <Card.Text>
                        We are committed to your success and growth as a Sterile Technician. Medtek College Hayward is here to support you on your educational journey, providing the knowledge and skills you need to thrive in the ever-evolving field of healthcare. We value your feedback and are always available to address any questions or inquiries you may have.
                    </Card.Text> 
                    <Card.Text>
                    <Link to="/contact"><button className="button">Contact us</button></Link> today to join Medtek College Hayward and take your career to the next level!
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
  };
  
  export default About;