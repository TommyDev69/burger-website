import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import SweetPizza2 from '../Images/pizza.png'

import swal from 'sweetalert';


import './card.css'
// import '../src/App.css'

class SecCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonName: 'Asap'
    }
  }

  actionButtonCLICK() {
    this.setState({
      mess: swal({
        icon: 'warning',
        title: 'Are you sure?',
        text: "if submitted you won't be able to revert this! ⚠️",
        type: 'warning',
        buttons: {
          cancel: 'Cancel',
          confirm: { text: 'Submit', className: 'sweet-warning' }
        },


      })
        .then((save) => {
          if (save) {
            swal("Poof! Your Order has been submited!", {
              icon: "success",
              type: "success",
              buttons: 'Thank You',
            })
          } else {
            swal("Your Order will be Cancel!", {
              icon: "error",

              type: "danger",
              buttons: 'Cancel Anyways!',

              dangerMode: true,
            });
          }
        })

    })
  }

  render() {
    return (
      <div md='true'>
      <Card id='fullCardBody'>
        <Row>
          <Col md={4}>
            <Card.Img variant="center" className='img-responsive' style={{ width: '18vw', paddingTop: '50%' }} src={SweetPizza2} alt='TastyBurger' />

          </Col>

          <Col md={8}>
            <Card.Body >
              <Card.Title className='pt-5' style={{ fontSize: "25px" }}> Tasty Plaster</Card.Title>
              <Card.Title className='off' style={{ fontStyle: 'italic', fontSize: '40px' }}>20% <sub>Off</sub></Card.Title>
              <Card.Text className="instrution">
                We have a variety of of Pizza and the Discount is cut of by 20%
              </Card.Text>
              <Button className='viewMenuCard' onClick={() => this.actionButtonCLICK()}>{this.state.buttonName}</Button>
            </Card.Body>
          </Col>

        </Row>

      </Card>
      </div>
    )
  }
}

export default SecCard
