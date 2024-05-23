import React, { Component } from 'react'
import FirstCard from './FirstCard';
import SecCard from './SecCard';
import { Container, Row, Col } from 'react-bootstrap';
class CardBody extends Component {
  render() {
    return (
      <div className='container-md-flud' >
       <Container md='true'>
        <Row style={{marginTop:'4%'}}>
            <Col >
            <FirstCard />
            </Col>
            <Col>
            <SecCard md='true'/>

            </Col>
        </Row>

      </Container>
      </div>
    
        
    ) 
    }
}

export default CardBody;
