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
        <div className="Home" id='home'>
            <div className="relative h-[90vh] overflow-hidden">
                <Navbar />
                <div className="h-full flex flex-col justify-center items-center">
                    <h1 className="text-7xl sm:text-6xl text-green-500 font-bold rounded-lg absolute left-0 sm:left-1/2 top-1/3 transform -translate-x-0 sm:-translate-x-1/2 px-4 py-2 z-10">
                        You Dream It...
                        <p className="text-xl sm:text-lg">
                            We Make It Happen
                        </p>
                    </h1>
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <Slider {...settings} className="w-full h-full">
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full h-full">
                                    <img src={slide} alt={`Slide ${index + 1}`} className="sm:h-[90vh] w-full h-full object-cover bg-cover" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Home);