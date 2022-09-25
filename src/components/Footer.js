import React, { Component } from 'react';
import Col from "react-bootstrap/Col";

class Footer extends Component {
    render() {
        return (
            <div>
                <Col className="text-center" style={{background:'#6e6e6e',
                height:'60px',margin:0,color:"#FFFFFF", fontFamily:'Serif'}}>
                Skill-based finding system determines an employee
                based on his or her knowledge, experience, education and 
                specialized training. 
                <p>© 2021 Skill-Based Employees Finding System. Privacy Policy and Terms of Service apply.</p>
                </Col>  
            </div>
        );
    }
}

export default Footer;      
                      
                    
                    