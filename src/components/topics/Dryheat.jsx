import React, { } from 'react';
import Card from 'react-bootstrap/Card';
import profile from '../../assets/images/logo.png';

const Dryheat = () => {

    return (
        <div>
             <Card className="container custom-card">
                <Card.Body style={{ display: 'center' , height: "100%" }}>
                    <Card.Title className="font-weight-bold"><h1>Dry Heat Sterilizer</h1></Card.Title> 
                    <Card.Text >
                         <div className="section-bubble">
                            <img
                                src={profile}
                                alt="Allan Kris Tiangco"
                               className="section-image"
                            />
                            <div>
                                <h2>Facts</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </Card.Text>
                    <Card.Text >
                         <div className="section-bubble">
                            <div>
                                <h2>Cycle</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <img
                                src={profile}
                                alt="Allan Kris Tiangco"
                               className="section-image"
                            />
                        </div>
                    </Card.Text>
                    <Card.Text >
                        <div className="section-bubble">
                             <img
                                src={profile}
                                alt="Allan Kris Tiangco"
                               className="section-image"
                            />
                            <div>
                                <h2>Loading and Unloading</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </Card.Text>
                    <Card.Text >
                        <div className="section-bubble">
                            <div>
                                <h2>Wrapper to use</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <img
                                src={profile}
                                alt="Allan Kris Tiangco"
                               className="section-image"
                            />
                        </div>
                    </Card.Text>
                    <Card.Text >
                        <div className="section-bubble">
                            <img
                                src={profile}
                                alt="Allan Kris Tiangco"
                               className="section-image"
                            />
                            <div>
                                <h2>Pros and Cons</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </Card.Text>
                    <Card.Text >
                        <div className="section-bubble">
                            <div>
                                <h2>How to test Sterilizer</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                            <img
                                src={profile}
                                alt="Allan Kris Tiangco"
                               className="section-image"
                            />
                        </div>
                        </Card.Text>
                </ Card.Body>
            </ Card> 
        </div>
    );
  };
  
  export default Dryheat;