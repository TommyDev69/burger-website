import React from 'react'
import BlackD from '../Images/blackD.jpg'

import NavHeadProps from '../NavBarFolder/NavHeadProps';
import Caurosel from './Caurosel';
import CardBody from '../CardFolder/CardBody';
import '../App.css'

function NavCaurosel() {
  return (
    <div   style={{backgroundImage:`url(${BlackD})` , height: '100vh', width: '100%', opaciwty:'0.7', zInvdex:'1' }}>
      <NavHeadProps />
      <Caurosel />
      <CardBody />
    </div>
  )
}

export default NavCaurosel
