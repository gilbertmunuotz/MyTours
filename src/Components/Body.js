import React from 'react'
import ReactPlayer from 'react-player/lazy'
// import myVideo from "../Videos/Welcome";

function Body() {
    return (
        <div className='Body'>
            <h1 className='text-5xl text-center mt-10 uppercase'>John Deere Adventures</h1>
            <p className='mx-14 text-xl first-letter:text-5xl'>Welcome to John Deere Adventures!

                Since 2000, John Deere Adventures has been leading unforgettable tours in the heart of East Africa, showcasing the breathtaking beauty and unique cultures of Tanzania. We're passionate about sharing our love for this incredible country with travelers from all over the world, and we offer a wide range of tours to suit every interest and budget.

                Our journey began in the vibrant city of Arusha, Tanzania's safari capital. Nestled at the foot of Mount Meru, Arusha is the perfect gateway to the Serengeti National Park, the Ngorongoro Crater, and other world-renowned wildlife reserves.

                Unforgettable Experiences Await</p>


            <div className="whychoose">
                <div className="grid grid-cols-2 gap-3 mx-14 mt-8">
                    <div className="">
                        <ReactPlayer
                            className=""


                        />
                    </div>


                    <div className="mx-12">
                        <h2 className='text-2xl text-center font-bold'>Why Choose Us</h2>
                        <p className='text-xl'>We are committed to responsible tourism practices and believe in protecting the environment and supporting local communities. We work with local guides and businesses, and we offset the carbon footprint of our tours.

                            Ready to embark on your own Tanzanian adventure?
                            
                            Contact John Deere Adventures today and start planning your unforgettable journey!</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Body