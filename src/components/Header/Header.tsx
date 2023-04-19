import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {Link } from 'react-router-dom'
import './Header.css'

export interface IHeaderProps {};

const Header: React.FunctionComponent<IHeaderProps> = props => {
  return (
    <Container className='header_container'>
      <Row>
      <Col lg='6' md='6' className='center'>
          <section className="header_content">
            <h2 className='header_title'>Dan's Hats</h2>
            <p> Only the greatest of hats</p>
            <div className='button_container'>
              <button
              className='buy_btn'>
               Buy Now
              </button>
            </div>
              
             
          </section>
        </Col>

      </Row>
    </Container>
  )
}

export default Header