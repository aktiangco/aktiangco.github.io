import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import schoolImage from '../assets/med.png';


const Home = () => {
    const cardStyle = {
      color: 'white',
      backgroundColor: 'cornflowerblue',
      border: '1px black solid',
      display: 'flex'
    };
  
    return (
      <div>
        <Card className="container" style={cardStyle}>
          <Card.Body>
            <Card.Title className="font-weight-bold"><h1>Welcome to MedTek College Hayward</h1></Card.Title>
            <br />
            <Card.Text>
              <Image
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px', border: '1px black solid' }}
                src={schoolImage}
                fluid
              />
            </Card.Text>
            <Card.Text>
              In order to facilitate the improvement of Sterile Processing Technician skills and provide them with additional educational opportunities, a class is being organized. The purpose of this class is to help Sterile Processing Technician enhance their abilities and expand their knowledge.
            </Card.Text>
            <Card.Text>
              <Link to="/gallery"><button className='button'>Sterilizers</button></Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };
  
  export default Home;
  