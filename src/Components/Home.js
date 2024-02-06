import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Navbar from '../Components/NavBar';
import "slick-carousel/slick/slick-theme.css";
import Picture1 from "../Images/picture1.jpg";
import Picture2 from "../Images/picture2.jpg";
import Picture3 from "../Images/picture3.jpg";

function Home() {
    const slides = [Picture1, Picture2, Picture3];

    const settings = {
        dots: true,
        lazyLoad: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 100,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        adaptiveHeight: true,
    };

    return (
        <div className="Home">
            <div className="bg-cover">
                <Navbar />
                <Slider {...settings} className="bg-cover min-h-screen z-0">
                    {slides.map((slide) => (
                        <span className="slides" key={slide.src}>
                            <img src={slide} alt="Slide" className='w-full object-cover overflow-clip' />
                        </span>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Home;
