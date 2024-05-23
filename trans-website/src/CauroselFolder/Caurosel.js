import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import FirstImage1 from '../Images/carousel-1.jpg'
import SecImage2 from '../Images/carousel-2.jpg'
import ThirdImage3 from '../Images/carousel-3.jpg'

import NavCauroDisplayButton from './NavCauroDisplayButton';
import NavCauroDisplayButton2 from './NavCauroDisplayButton2';
import NavCauroDisplayButton3 from './NavCauroDisplayButton3';


// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Caurosel() {
    return (
        <div >
        <Carousel fade className='caurosel' indicators={false} controls={false}>
            <Carousel.Item interval={2200} className='caurosel'>
                <img src={FirstImage1} alt='image1' className='Caurosel-image'/>

                {/* <ExampleCarouselImage text="First slide" /> */}
                <Carousel.Caption>
                    <NavCauroDisplayButton />
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img src={SecImage2} alt='image2' className='Caurosel-image'  />

                {/* <ExampleCarouselImage text="Second slide" /> */}
                <Carousel.Caption>
                    <NavCauroDisplayButton2 />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src={ThirdImage3} alt='image3' className='Caurosel-image'  />

                {/* <ExampleCarouselImage text="Third slide" /> */}
                <Carousel.Caption>
                    <NavCauroDisplayButton3 />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default Caurosel



