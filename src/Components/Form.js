import React from 'react'

function Form() {
    return (
        <div className='Form'>
            <div className="grid">
                <div className="grid grid-cols-2">
                    <div className="Form-Left mx-14">
                        <form action="" method="post" className=''>
                            <h1 className='text-center text-3xl font-bold font-serif'>Contact Us</h1>
                        </form>
                    </div>
                    <div className="Map-Right">
                        <h4 className='text-center text-3xl font-bold font-serif'>Locate Us</h4>
                        <h6 className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, a excepturi deleniti sapiente quisquam inventore! Non nostrum, facere exercitationem pariatur eos necessitatibus est eum corrupti temporibus quod repellat debitis magni?</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form