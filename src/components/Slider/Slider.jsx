import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import './slider.scss'

const Slider = () => {

    const [slide, setcurrentSlide] = useState(0)

    const data = [
        "https://images.pexels.com/photos/3136649/pexels-photo-3136649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2760098/pexels-photo-2760098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4339852/pexels-photo-4339852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6334598/pexels-photo-6334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"



    ]

    const prevSlide = () =>{
        setcurrentSlide(slide === 0 ? 2 : (prev) => prev - 1)
    }

    
    const nextSlide = () =>{
        setcurrentSlide(slide === 2 ? 0 : (prev) => prev + 1)
    }
  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${slide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
        </div>

      <div className="icons">
            <div className="icon" onClick={prevSlide}>
            <ArrowCircleLeftOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <ArrowCircleRightOutlinedIcon/>
            </div>
      </div>

    </div>
  )
}

export default Slider
