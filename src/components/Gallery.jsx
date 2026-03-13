import React, { } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const Gallery = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
      };


    return (
      <div>
          <Card className="container custom-card">
            <Card.Body style={{ display: 'center' , height: "100%" }}>
              <Card.Title className="font-weight-bold"><h1>Sterilization</h1></Card.Title> 
                <Card.Text >
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  Sterilization is a critical process in healthcare that completely destroys or eliminates all forms of microorganisms, including bacteria, viruses, fungi, and bacterial spores, from medical instruments and devices. It is essential for ensuring that surgical instruments are safe to use on patients and for preventing infections during medical procedures. One of the most common methods used in hospitals is steam sterilization, which uses high-temperature steam under pressure to effectively kill microorganisms. For sterilization to be successful, specific conditions such as the correct temperature, pressure, and exposure time must be achieved and maintained throughout the sterilization cycle. Proper packaging is also important because it allows the sterilizing agent to penetrate the instruments while maintaining sterility after the process is complete. To verify that sterilization has been effective, sterile processing departments use monitoring methods such as mechanical indicators that track cycle conditions, chemical indicators that show exposure to sterilization parameters, and biological indicators that confirm the destruction of microorganisms. Sterilization plays a vital role in maintaining patient safety and preventing healthcare-associated infections.
                  </div>
                </Card.Text>
                <h4> Sterilizer Methods</h4>
                  <ul>
                    <li>
                      <Link className="nav-item" style={linkStyle} to="/Steam">
                        <button className="nav-link rounded method-link">Steam</button>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-item" style={linkStyle} to="/Eo">
                        <button className="nav-link rounded method-link">Ethylene Oxide (EO)</button>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-item" style={linkStyle} to="/Ltgp">
                        <button className="nav-link rounded method-link">Low-Temp Gas Plasma(LTGP)</button>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-item" style={linkStyle} to="/Vpro">
                        <button className="nav-link rounded method-link">Low-Temp Hydrogen Peroxide (V-PRO)</button>
                      </Link> 
                    </li>
                    <li>
                      <Link className="nav-item" style={linkStyle} to="/Ozone">
                        <button className="nav-link rounded method-link">Hydrogen Peroxide Ozone</button>
                      </Link> 
                    </li>
                    <li>
                      <Link className="nav-item" style={linkStyle} to="/Iuss">
                        <button className="nav-link rounded method-link">Immediate-Use Steam Sterilization (IUSS)</button>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-item" style={linkStyle} to="/Dryheat">
                        <button className="nav-link rounded method-link">DRY HEAT</button>
                      </Link> 
                    </li>
                  </ul>
                <Card.Text >
                       
                  </Card.Text>
          </ Card.Body>
        </ Card> 
      </div>
    );
  };
  
  export default Gallery;