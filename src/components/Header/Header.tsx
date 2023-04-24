import React, {Component, MouseEvent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import {Link } from 'react-router-dom'
import './Header.css'

class Header extends Component{ 

  constructor(props:any){
         super(props);
         this.routeChange = this.routeChange.bind(this);
     }

     routeChange(e: MouseEvent<HTMLButtonElement>){
      e.preventDefault();
      alert('route')
     }

     render(){
         return (
          <Container className='header_container'>
            <Row>
             <Col lg='6' md='6' className='center'>
              <section className="header_content">
                <h2 className='header_title'>Dan's Hats</h2>
                <p> Only the greatest of hats</p>
                    <div className='button_container'>
                    <Link to = "/products">
                      <button 
                      className="buy_btn">
                        Buy now
                      </button></Link>
                    </div>   
                  </section>
                  </Col>
                </Row>
              </Container>
           
         )
     }
}

export default Header
