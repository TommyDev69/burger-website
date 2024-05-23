import React from 'react'
import BurgarLogo from '../Images/BurgerLogo.png'
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavHead(props) {
    return (
        <div>
            {/* <Container> */}
            <Navbar collapseOnSelect expand="md" className="navHead ">
<Container>
                <Navbar.Brand classNadme='mx-auto ' stylee={{ marginLeft: '6%' }}>
                    <img src={BurgarLogo} alt='Burgar' id='BurgarLogo' stylee={{ marginLeft: '120%' }} />
                </Navbar.Brand>
                {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
                <Navbar.Toggle aria-controls="navbarScroll" className='togButton' />
                <Navbar.Collapse onMouseDown={'true'}  id="navbarScroll">
                    <Nav className="mx-5" style={{paddingLeft: '8%' }}>
                        <Link to={'Home'} className='NavLabel ' style={{ color: '#fbaf32',  paddingLeft: '4%' }} active>{props.Home}</Link>
                        <Link to={"/CardBody"} className='NavLabel ' style={{ paddingLeft: '4%' }}>{props.About}</Link>
                        <Link to={"/CardBody"} className='NavLabel ' style={{ paddingLeft: '4%' }}>{props.Feature}</Link>
                        <Link to={"/CardBody"} className='NavLabel ' style={{ paddingLeft: '4%' }}>{props.Chef}</Link>
                        <Link to={"/CardBody"} className='NavLabel ' style={{ paddingLeft: '4%' }}>{props.Menu}</Link>
                        <Link to={"/CardBody"} className='NavLabel ' style={{ paddingLeft: '4%' }}>{props.Booking}</Link>
                        <NavDropdown title="Pages"   id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Link href="#pricing" className='NavLabel' style={{ paddingLeft: '5%' }}>{props.Contact}</Link>
                    </Nav>
                    <Nav style={{ paddingLeft: '15%' }}>
                        <Form className="d-flex" >
                            <Form.Control type="search" placeholder="Product" style={{color:'#fbaf32', fontWeight:'bold'}} classNeame='px-auto' aria-label="Search"/>
                            <Button variant="outline-warning" style={{marginLeft:'3%'}}>Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            

        </div>
    )
}
export default NavHead;
