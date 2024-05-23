import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
class Acting extends Component {
constructor(props) {
  super(props)

  this.state = {
     act:''
  }
}

    sweetAlert(){
        this.setState({
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
                    })
                } else {
                    swal("Your Order with be cancel", {
                        icon: "d",

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
      <div>
         <Button variant="primary" size="lg" active onClick={() =>this.sweetAlert()}>
        Primary button
      </Button>
      </div>
    )
  }
}

export default Acting
