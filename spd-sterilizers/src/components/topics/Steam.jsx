import React, { } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import SteamImage from '../../assets/422.jpg';

const Steam = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
      };

    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid',
        height: '100%'
    };

    return (
        <div>
             <Card className="container" style={cardStyle}>
                <Card.Body style={{ display: 'center' , height: "100%" }}>
                    <Card.Title className="font-weight-bold"><h1>Steam Sterilizer</h1></Card.Title> 
                    <Card.Text >
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        </div>
                    </Card.Text>
                    <Card.Text  style={{ display: 'flex' , height: "100%", justifyContent: 'space-around', border: "1px black solid"}}>
                        <div>
                            paragraph
                        </div>
                        <div>
                        <Image
                style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px', border: '1px black solid' }}
                src={SteamImage}
                fluid
              />
                        </div>

                    </Card.Text>   
                    <Card.Text>
                        cycle
                    </Card.Text>
                    <Card.Text>
                       preparation
                    </Card.Text>
                    <Card.Text>
                        loading
                    </Card.Text>
                    <Card.Text>
                        monitoring
                    </Card.Text>
                    <Card.Text>
                        safety precaution
                    </Card.Text>
                    <Card.Text>
                        extra
                    </Card.Text> 
                    <Card.Text>
                    <Link to="/contact"><button className="button">Contact us</button></Link> today to join Medtek College Hayward and take your career to the next level!
                    </Card.Text>
                </ Card.Body>
            </ Card> 
        </div>
    );
  };
  
  export default Steam;