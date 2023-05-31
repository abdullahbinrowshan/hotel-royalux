import React from 'react';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';

const AboutSection = () => {

    const logos = [logo1, logo2, logo3]

    return (
        <div className=' container mx-auto md:mx-10 my-40 md:flex justify-center items-center h-96'>
            <div className='w-full'>
                <h4 className={`transition-all duration-1000 uppercase flex items-center gap-2 md:gap-10 font-bold`}>
                    <span>HIGH QUALITY STANDARDS</span>
                    <hr className='md:w-32 w-16 border border-[#ffc48d]' />
                </h4>
                <h2 className='text-6xl mt-5 font-serif'>Rooms For Every Need</h2>
                <p className='text-slate-500 mt-16'>
                    We welcome you to the best luxury New York hotel. It offers the highest level of comfort and relaxation. Large selection of rooms and apartments for every taste and for every need. Qualified staff, delicious dinners, bar, drinks, relaxation area and underground parking. A five-star hotel with history, atmosphere and a warm welcome.
                </p>
                <div className="logo mt-10 flex gap-5 items-center">
                    {
                        logos.map((logo, index) => (
                            <img src={logo} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex justify-center">
                <iframe width="440" height="450" src="https://www.youtube.com/embed/vmoCLeIJbw4?controls=0&amp;start=38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default AboutSection