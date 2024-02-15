import React from 'react'
import { motion } from 'framer-motion'
import CEO from "../Images/CEO.jpg"
import last from '../Images/last.jpg'
import card from '../Images/card3.jpg'
import card1 from "../Images/card.jpg"
import card2 from '../Images/card2.jpg'
import test2 from '../Images/Test2.jpg'
import test3 from '../Images/Test3.jpg'
import test1 from '../Images/Test1.webp'
import Galla1 from '../Images/Galla1.jpg'
import Galla3 from "../Images/Galla3.jpg"
import Galla4 from '../Images/Gallery1.jpg'
import Galla2 from '../Images/Gallery2.jpg'

const animateHeader = {
    initialOffscreen: {
        y: 0
    },
    afterOnscreen: {
        y: 50,
        transition: {
            delay: 0.5
        }
    }
}

const animatePic = {
    initialOffscreen: {
        x: 0
    },
    afterOnscreen: {
        x: 50,
        transition: {
            delay: 0.5
        }
    }
}

const animateText = {
    initialOffscreen: {
        x: 0
    },
    afterOnscreen: {
        x: -50,
        transition: {
            delay: 0.5
        }
    }
}

function Body() {
    return (
        <div className='body' id='body'>
            <div className="Welcome-Text">
                <h1 className='text-5xl text-center mt-10 uppercase italic font-serif'>John Deere Adventures</h1>
                <p className='mx-14 text-xl first-letter:text-5xl first-letter:italic font-serif'>Welcome to John Deere Adventures!

                    Since 2000, John Deere Adventures has been leading unforgettable tours in the heart of East Africa, showcasing the breathtaking beauty and unique cultures of Tanzania. We're passionate about sharing our love for this incredible country with travelers from all over the world, and we offer a wide range of tours to suit every interest and budget.

                    Our journey began in the vibrant city of Arusha, Tanzania's safari capital. Nestled at the foot of Mount Meru, Arusha is the perfect gateway to the Serengeti National Park, the Ngorongoro Crater, and other world-renowned wildlife reserves.

                    Unforgettable Experiences Await</p>
            </div>

            <div className="CEOMessage">
                <motion.h2 className='text-3xl text-center font-bold font-serif mt-16 mb-4' variants={animateHeader} initial="initialOffscreen" whileInView={"afterOnscreen"} viewport={{ once: false }} >Message From CEO.</motion.h2>
                <div className="grid grid-cols-2 mx-14 mt-16 sm:block">
                    <motion.div className="video mx-auto" variants={animatePic} initial="initialOffscreen" whileInView={"afterOnscreen"} viewport={{ once: false }}>
                        <img src={CEO} alt="CEO pic" className='object-cover h-96 rounded-lg' />
                    </motion.div>

                    <div className="mx-12 self-center">
                        <motion.p className='text-xl font-serif' variants={animateText} initial="initialOffscreen" whileInView={"afterOnscreen"} viewport={{ once: false }}  >
                            As Johnwalking Ameda, the proud CEO of John Deere Adventures, I invite you to embark on an unforgettable journey with our esteemed company. For over two decades, we've been crafting unique experiences in the heart of Tanzania, we offer a diverse range of tourist activities, catering to adventurers of all kinds. Whether you seek the thrill of a wildlife safari across the vast savannas, the cultural immersion of visiting local villages, or the serenity of trekking through volcanic landscapes, John Deere Adventures has you covered. Come, join us, and discover the magic of Tanzania - it's an adventure waiting to be unfolded!
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="cards">
                <h5 className='font-bold text-3xl text-center my-10 font-serif'>Tours & Safari</h5>
                <div className="grid grid-cols-3 gap-6 mx-14 sm:block">
                    <section className='bg-gray-200 rounded-lg shadow-2xl shadow-gray-400 p-8'>
                        <img src={card1} alt="image2" className='object-fill rounded-lg' />
                        <div className="explanations">
                            <p className='my-2 font-serif'>
                                <strong>Witness the Great Migration<br /></strong>Experience the awe-inspiring Great Migration, as millions of wildebeest, zebra, and gazelle traverse the Serengeti and Masai Mara. Our expert guides ensure optimal viewing, guiding you to prime locations for witnes All.
                            </p>
                            <button className='rounded-full bg-green-600 p-2 font-serif'>Book Now</button>
                        </div>
                    </section>

                    <section className='bg-gray-200 rounded-lg shadow-2xl shadow-gray-400 p-8'>
                        <img src={card} alt="image2" className='object-fill rounded-lg' />
                        <h3 className='my-2 font-serif'>
                            <strong>Enjoy customized itineraries<br /></strong>Our Team promotes a knowledgeable team offering unique travel experiences for various styles, from adventurous backpackers to luxury seekers, ensuring a tailor-made experience for everyone.
                        </h3>
                        <button className='rounded-full bg-green-600 p-2 font-serif'>Book Now</button>
                    </section>

                    <section className='bg-gray-200 rounded-lg shadow-2xl shadow-gray-400 p-8'>
                        <img src={card2} alt="image3" className='object-fill rounded-lg' />
                        <p className='my-2 font-serif'>
                            <strong>Climb the slopes of Mount Kilimanjaro<br /></strong>Embark on a life-changing expedition to Mount Kilimanjaro, the "Roof of Africa," with expert guides and support. Choose from various routes and trekking options to accommodate different fitness levels.
                        </p>
                        <button className='rounded-full bg-green-600 p-2 font-serif'>Book Now</button>
                    </section>
                </div>
            </div>

            <div className="Gallery1">
                <div className="my-12">
                    <div className=" grid grid-cols-2 gap-4 mx-16 sm:block">
                        <section className='mx-12 sm:my-3'>
                            <motion.div className="relative" variants={animatePic} initial="initialOffscreen" whileInView={"afterOnscreen"} viewport={{ once: false }}>
                                <img src={Galla1} alt="image1" className="object-cover rounded-lg cursor-pointer" />
                                <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-3xl text-white font-serif">
                                    Serengeti
                                </h1>
                            </motion.div>
                        </section>
                        <section className='mx-12'>
                            <motion.div className="relative" variants={animateText} initial="initialOffscreen" whileInView={"afterOnscreen"} viewport={{ once: false }}>
                                <img src={Galla2} alt="image2" className="object-cover rounded-lg cursor-pointer" />
                                <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-3xl text-white font-serif">
                                    Mikumi
                                </h1>
                            </motion.div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="Gallery2">
                <div className="grid">
                    <div className="grid-cols-3">
                        <div className="flex mx-14 gap-4 sm:block">
                            <section className='relative'>
                                <img src={Galla4} alt="image2" className="object-fill rounded-lg bg-center" />
                                <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-3xl text-white font-serif">
                                    NgoroNgoro
                                </h1>
                            </section>

                            <section className='relative'>
                                <img src={last} alt="image2" className="object-fill rounded-lg bg-center" />
                                <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-3xl text-white font-serif">
                                    Manyara
                                </h1>
                            </section>

                            <section className='relative'>
                                <img src={Galla3} alt="image2" className="object-fill rounded-lg bg-center" />
                                <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-3xl text-white font-serif">
                                    Tarangire
                                </h1>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Testimonials">
                <h2 className='text-center text-3xl font-bold mt-12 font-serif sm:text-center'>Testimonials</h2>
                <section className="text-gray-600 body-font">
                    <div className="container px-2 py-12 mx-auto sm:self-center">
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img src={test1} alt='testimonials' className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
                                    <p className="leading-relaxed ">"John Deere Tours made our family safari to Tanzania an unforgettable experience! From the moment we arrived in Arusha, we were met with warm hospitality and expert guidance"</p>
                                    <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium tracking-wider text-sm font-serif">Holden Smith</h2>
                                    <p className="text-gray-500 font-serif">From The Smith Family, California, USA</p>
                                </div>
                            </div>

                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img src={test2} alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
                                    <p className="leading-relaxed">"John Deere Tours ensured I had the perfect opportunities to frame unforgettable shots. They even arranged special permits for me to access exclusive areas, allowing me to capture truly unique images."</p>
                                    <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm font-serif">William Jones</h2>
                                    <p className="text-gray-500 font-serif">Wildlife Photographer, United Kingdom</p>
                                </div>
                            </div>

                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img src={test3} alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
                                    <p className="leading-relaxed">"Our honeymoon safari was a perfect blend of romance, adventure, and luxury. After Arriving at our luxurious tented camp, the breathtaking views of the savanna, we knew we were in for something special."</p>
                                    <span className="inline-block h-1 w-10 rounded bg-green-600 mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm font-serif">Sarah & Michael Thompson,</h2>
                                    <p className="text-gray-500 font-serif">New York, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div >
    )
}

export default Body