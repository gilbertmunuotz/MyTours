import React from 'react';
import ReactPlayer from 'react-player'
import card1 from "../Images/card.jpg";
import myVideo from '../Videos/Welcome.mp4';

function Body() {
    return (
        <div className='Body'>
            <div className="bodyone">
                <h1 className='text-5xl text-center mt-10 uppercase'>John Deere Adventures</h1>
                <p className='mx-14 text-xl first-letter:text-5xl'>Welcome to John Deere Adventures!

                    Since 2000, John Deere Adventures has been leading unforgettable tours in the heart of East Africa, showcasing the breathtaking beauty and unique cultures of Tanzania. We're passionate about sharing our love for this incredible country with travelers from all over the world, and we offer a wide range of tours to suit every interest and budget.

                    Our journey began in the vibrant city of Arusha, Tanzania's safari capital. Nestled at the foot of Mount Meru, Arusha is the perfect gateway to the Serengeti National Park, the Ngorongoro Crater, and other world-renowned wildlife reserves.

                    Unforgettable Experiences Await</p>
            </div>

            <div className="whychoose">
                <div className="grid grid-cols-2 gap-3 mx-14 mt-8">
                    <div className="video">
                        <ReactPlayer
                            url={myVideo}
                            controls={true}
                            muted={true}
                        />
                    </div>

                    <div className="mx-12 self-center">
                        <h2 className='text-2xl text-center font-bold'>Why Choose Us</h2>
                        <p className='text-xl'>We are committed to responsible tourism practices and believe in protecting the environment and supporting local communities. We work with local guides and businesses, and we offset the carbon footprint of our tours.

                            Ready to embark on your own Tanzanian adventure?

                            Contact John Deere Adventures today and start planning your unforgettable journey!</p>
                    </div>
                </div>
            </div>

            <div className="cards">
                <h5 className='font-bold text-5xl text-center my-10'>Tours & Safari</h5>
                <div className="grid grid-cols-3 gap-6 mx-14">
                    <section className='bg-gray-200 rounded-lg shadow-2xl shadow-gray-400 p-8 z-10'>
                        <img src={card1} alt="" className='object-fill' />
                        <div className="explanations">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam consequuntur facere, voluptatem exercitationem repudiandae et ullam accusantium illo tenetur architecto sint libero repellat. Esse cumque veniam neque architecto distinctio!</p>
                            <button className='rounded-full bg-green-600 p-2'>Book Now</button>
                        </div>
                    </section>

                    <section className='bg-gray-200 rounded-lg shadow-2xl shadow-gray-400 p-8'>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam atque, reiciendis corrupti dicta id eum voluptatum harum similique odit soluta eveniet asperiores molestias quidem dolorum in. Enim laborum at animi?</h3>
                        <button className='rounded-full bg-green-600 p-2'>Book Now</button>
                    </section>

                    <section className='bg-gray-200 rounded-lg shadow-2xl shadow-gray-400 p-8'>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam atque, reiciendis corrupti dicta id eum voluptatum harum similique odit soluta eveniet asperiores molestias quidem dolorum in. Enim laborum at animi?</h3>
                        <button className='rounded-full bg-green-600 p-2'>Book Now</button>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default Body