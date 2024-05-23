import React from 'react';
import { Form, Button } from 'react-bootstrap';

function NavCauroDisplayButton3() {
    return (
        <div style={{ paddingBottom: '15%' }}>
            <h1 className='ingredient'>Fastest Order <span style={{ color: '#fbaf32' }}> Delivery</span></h1>
            <p style={{ widbth: '100px', fontSize: '18px', fontFamily: 'serif' }}>
                Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. 
                Morbi <p>sagittis, orci sodales varius fermentum, tortor</p>
            </p>

            <Form className="d-flex butin">

                <Button className='viewMenu ' >View Menu</Button>
                <Button className='viewTableButton'>Book Table</Button>

            </Form>

        </div>

    );

}
export default NavCauroDisplayButton3;