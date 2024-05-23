import React from 'react';
import { Form, Button } from 'react-bootstrap';

function NavCauroDisplayButton() {
    return (
        <div  className='cauStyle' stywle={{ paddingBottom: '15%' }}>
            <h1 className='  ingredient'>Best <span style={{ color: '#fbaf32' }}>Quality  </span> Ingredient</h1>
            <p className=' text-md-center'  style={{  fontSize: '18px', fontFamily: 'serif' }}>They are important because they create a sense of trust and transparency between the consumer and the manufacturer. 
            By highlighting the fact that only the best ingredients are used, 
            </p>


            <Form className="d-flex butin">

                <Button  className='viewMenu text-md-center' md='true' size="lg" >View Menu</Button>
                <Button  className='viewTableButton text-md-center' size="lg">Book Table</Button>

            </Form>

        </div>

    );

}
export default NavCauroDisplayButton;