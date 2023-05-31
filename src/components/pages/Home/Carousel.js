import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import carousel1 from '../../../assets/carousel1.jpg';
import carousel2 from '../../../assets/carousel2.jpg';
import carousel3 from '../../../assets/carousel3.jpg';
import { useState } from 'react';

const Carousel = () => {

    const slides = [
        {
            url: carousel1,
            for: 'special for business',
            heading: 'Corporate Discount Rooms',
            price: 99.00
        },
        {
            url: carousel2,
            for: 'especially for you',
            heading: 'Hotel Rooms for the Family',
            price: 129.00
        },
        {
            url: carousel3,
            for: 'holiday offer',
            heading: 'Hotel Rooms for Holidays',
            price: 89.00
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='max-w-[1680px] h-96 md:h-[780px] w-full m-auto relative '>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full bg-bottom bg-cover duration-500 group">
                <div className=' w-full h-full flex flex-col gap-5 md:gap-12 pl-10 items-start justify-center bg-black/50 text-white'>
                    <h4 className={`transition-all duration-1000 uppercase flex items-center gap-2 md:gap-10 font-bold text-2xl`}>
                        <span>{slides[currentIndex].for}</span>
                        <hr className='md:w-32 w-16 border' />
                    </h4>
                    <div className='font-serif'>
                        <h2 className='md:text-8xl text-5xl font-medium'>
                            {slides[currentIndex].heading}
                        </h2>
                        <p className='md:text-5xl text-4xl text-[#D3A478] mt-5'>from <span className='md:text-6xl font-bold text-5xl'>${slides[currentIndex].price}.00 </span> / night</p>
                    </div>
                    <button className='transition-all duration-500 font-semibold py-3 px-5 bg-[#D3A478] border-2 border-[#D3A478] hover:bg-opacity-0 '>SEE THE ROOMS</button>
                </div>
                {/* left arrow */}
                <div onClick={prevSlide} className='md:hidden group-hover:block absolute top-[50%] left-5 border-white border text-2xl p-5 text-white cursor-pointer '>
                    <BsChevronLeft size={15} />
                </div>
                {/* right arrow */}
                <div onClick={nextSlide} className='md:hidden group-hover:block absolute top-[50%] right-5 border-white border text-2xl p-5 text-white cursor-pointer '>
                    <BsChevronRight size={15} />
                </div>
                <div className="flex absolute bottom-3 w-full justify-center">
                    <div className='flex bg-black p-2 px-5 gap-3'>{
                        slides.map((slide, slideIndex) => (
                            <button key={slideIndex} onClick={() => goToSlide(slideIndex)} className='p-[2px] border-2 border-[#A67866] '></button>
                        ))
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default Carousel