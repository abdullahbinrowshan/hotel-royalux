import { Link } from 'react-router-dom';
import { GiCarKey } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <div className={`bg-white transition-all ${!isNavOpen ? 'overflow-hidden relative' : 'overflow-visible'}  text-black font-semibold w-full h-24 shadow-md`}>
                <div className="container  mx-auto px-1 flex justify-around items-center h-full">
                    <div className="title-container">
                        <h1 className='text-2xl font-serif'> <Link to={'/'}> Royalux</Link></h1>
                    </div>
                    <div className="routes-container hidden md:block uppercase">
                        <ul className='flex gap-5'>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to={'/room'}>Room</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`absolute transition-all h-full z-10 duration-500 p-5 bg-black text-white w-8/12 shadow-2xl right-0 top-0 pt-24 md:hidden ${!isNavOpen ? 'translate-x-full -mr-96' : 'translate-x-0 -mr-0'}  uppercase`}>
                        <button className='bg-white border-white border top-9 right-14 p-2 absolute z-50' onClick={() => setIsNavOpen(!isNavOpen)}>
                            <GrClose color="white" />
                        </button>
                        <ul>
                            <li className="hover:bg-[#A67866] mb-3 p-2">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className='hover:bg-[#A67866] mb-3 p-2'>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className='hover:bg-[#A67866] mb-3 p-2'>
                                <Link to={'/room'}>Room</Link>
                            </li>
                            <li className='hover:bg-[#A67866] mb-3 p-2'>
                                <Link to={'/about'}>About Us</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="book-button-container z-0 relative font-bold transition-all flex items-center bg-[#b58e7e] hover:bg-[#A67866] px-6 h-full uppercase">
                        <p>
                            <GiCarKey className='text-5xl absolute top-2 left-1 z-10 text-white' />
                            <span className="underline text-white h-full">Book Room Now</span>
                        </p>
                    </Link>
                    <div className="toggle-btn text-2xl md:hidden">
                        <button onClick={() => setIsNavOpen(!isNavOpen)}>
                            <RxHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar