import React from 'react'

function Form() {
    return (
        <div className='form' id=''>
            <div className="grid">
                <div className="grid grid-cols-2 sm:block">
                    <div className="Form-Left mx-14">
                        <form action="" method="post" className=''>
                            <h1 className='text-center text-3xl font-bold font-serif'>Contact Us</h1>
                        </form>
                    </div>
                    <div className="Map-Right">
                        <h1 className='mx-14 text-center text-3xl font-bold font-serif'>Locate Us</h1>
                        <div className="maps">
                            <iframe async src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.4698066962346!2d36.702879769504484!3d-3.4067044423762005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18370533c32008a1%3A0xe7b0da903299ed4!2sKisangara%20Tours%20%26%20Safaris%20Ltd!5e0!3m2!1sen!2stz!4v1707723045150!5m2!1sen!2stz"
                                className='px-10 my-4 sm:p-4'
                                width="100%"
                                height="300"
                                title='maps'
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default React.memo(Form);