import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './Hero.css'
import Button from '../Button/Button';

const Hero = () => {

    const [heroContentNumber, setHeroContentNumber] = useState(0)

    const heroContents = [
        {
            "heading": "We are Digital meets fashion",
            "description": "Show your Maisha store pride, get your high quality swag directly from us.",
            "image": "public/images/first-hero-image.png"
        },

        {
            "heading": "Redefining Style Through Innovation",
            "description": "Embrace the future of fashion with cutting-edge designs that blend creativity and technology seamlessly.",
            "image": "public/images/second-hero-image.png"
        },

        {
            "heading": "Where Fashion Meets the Digital Frontier",
            "description": "Step into a new era of style with trendsetting apparel that fuses digital sophistication with modern elegance.",
            "image": "public/images/third-hero-image.png"
        }
    ]

    const handleSliderDecrement = () => {
        if (heroContentNumber <= 0) {
            return
        } else {
            setHeroContentNumber(prev => prev - 1);
        }
    }

    const handleSliderIncrement = () => {

        if (heroContentNumber === heroContents.length - 1) {
            return;
        } else {
            setHeroContentNumber(prev => prev + 1)
        }

    }

    return (

        <>

            <div className='mainParent' >

                {

                    <>
                        <div className="heading-and-descriptions">

                            <h2>
                                {heroContents[heroContentNumber].heading}
                            </h2>

                            <p>
                                {heroContents[heroContentNumber].description}
                            </p>

                        </div>

                        <div className="hero-image">

                            <img src={heroContents[heroContentNumber].image} alt="store image" />

                        </div>
                    </>

                }

                <div className="sliders">

                    <div onClick={handleSliderDecrement} className='slider-one' >
                        <FaChevronLeft />
                    </div>

                    <div onClick={handleSliderIncrement} className='slider-two'>
                        <FaChevronRight />
                    </div>

                </div>

            </div>

                <button><Button title="Shop from us" /></button>

        </>

    )
}

export default Hero