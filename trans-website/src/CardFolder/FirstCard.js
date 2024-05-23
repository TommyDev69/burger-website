import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import SweetBurg1 from '../Images/SweetBurg.png'

import swal from 'sweetalert';
// import Swal from 'sweetalert2/src/sweetalert2.js'

import '../CardFolder/card.css'
class FirstCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonName: 'Asap'
        }
    }

    actionButtonClick() {
        this.setState({
            // mess: swal("Hello world!")
            mess: swal({
                icon: 'warning',
                title: 'Are you sure?',
                text: "if submitted you won't be able to revert this! ⚠️",
                buttons: {
                    // status: true,
                    cancel: 'Cancel',
                    confirm: { text: 'Submit', className: 'sweet-warning' }
                },


            })
                .then((save) => {
                    if (save) {
                        swal("Poof! Your Order has been submited!", {
                            icon: "success",
                            buttons: 'Thank You',
                            // confirm: {className: 'sweet-warning' }
                            dangerMode: true
                        })
                    } else {
                        swal("Your Order with be cancel", {
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
            <Card id='fullCardBody' md={12}>
                <Row>
                    <Col md={4}>
                        <Card.Img variant="center" className='img-md-responsive' size={12} style={{ width: '20vw', paddingTop: '50%' }} src={SweetBurg1} alt='TastyBurger' />

                    </Col>

                    <Col md={8}>
                        <Card.Body >
                            <Card.Title className='pt-5' style={{ fontSize: "25px" }}> Tasty Burger</Card.Title>
                            <Card.Title className='off' style={{ fontStyle: 'italic', fontSize: '40px', }}>20% <sub>Off</sub></Card.Title>
                            <Card.Text className='instrution'>
                                We have a variety of of Burger and the Discount is cut of by 20%
                            </Card.Text>
                            <Button className='viewMenuCard' onClick={() => this.actionButtonClick()}>{this.state.buttonName}</Button>
                        </Card.Body>
                    </Col>

                </Row>

            </Card>
            </div>
        )
    }
}

export default FirstCard
