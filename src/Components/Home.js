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
            <div className="w-full h-[90vh] relative overflow-hidden">
                <Navbar />
                {/* Stack the h1 and Slider to ensure h1 sits on top */}
                <div className="flex flex-col h-full">
                    <h1 className="text-6xl text-green-600 font-bold rounded-lg absolute top-1/2 left-0 self-center z-10 px-4 py-2 sm:hidden">
                        You Dream It...
                        <p className='text-2xl'>
                            We Make It Happen
                        </p>
                    </h1>
                    <Slider {...settings} className="w-full h-full z-0">
                        {slides.map((slide) => (
                            <span className="slides" key={slide.src}>
                                <img src={slide} alt="Slide" className="w-full h-full object-contain opacity-95" />
                            </span>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Home;
