import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { BiMinus } from 'react-icons/bi'
import { BsUiChecks } from 'react-icons/bs'

const Availability = () => {
    const [checkIn, setCheckIn] = useState(0)
    const [checkOut, setCheckOut] = useState(0)
    const [guests, setGuests] = useState(1)
    // const [first, setfirst] = useState(second)



    const plusGuests = () => {
        const totalGuests = guests + 1;
        setGuests(totalGuests)
    }

    const minusGuests = () => {
        if (guests <= 1) {
            return
        }
        const totalGuests = guests - 1;
        setGuests(totalGuests);
    }

    return (
        <div className='bg-[#191919] w-full h-28 py-2'>
            <div className="container relative flex flex-wrap justify-center items-center gap-6 h-full text-white mx-auto uppercase">
                <div className='border-r space-y-1 border-dashed w-60'>
                    <p className='font-serif'>CHECK-IN</p>
                    <input className='text-black cursor-pointer' type="date" onChange={e => setCheckIn(e.target.value)} />
                </div>
                <div className='border-r space-y-1 border-dashed w-60'>
                    <p className='font-serif'>CHECK-OUT</p>
                    <input className='text-black cursor-pointer' type="date" onChange={e => setCheckOut(e.target.value)} />
                </div>
                <div className='relative border-r border-dashed w-60'>
                    <p className='font-serif mb-3'>GUESTS</p>
                    <div className='flex'>
                        <h5 className='text-3xl uppercase font-semibold'>
                            {
                                guests > 1 ? guests + " guests" : guests + " guest"
                            }
                        </h5>
                        <div className='border mr-2 absolute right-0 -top-2.5 flex flex-col border-[#D3A478]'>
                            <button onClick={plusGuests} className='text-[#D3A478]  p-2 hover:bg-[#D3A478] hover:text-white'>
                                <HiPlus size={30} />
                            </button>
                            <button onClick={minusGuests} className='text-[#D3A478] p-2 hover:bg-[#D3A478] hover:text-white '>
                                <BiMinus size={30} />
                            </button>
                        </div>
                    </div>
                    {/* <div className={`absolute flex  justify-between w-60 text-black bg-white shadow-md p-5`}>
                        <p>
                            <span className='font-semibold text-3xl'>{guests}</span>
                            {
                                guests > 1 ? " Guests" : " Guest"
                            }
                        </p>
                        <div className='border border-[#D3A478]'>
                            <button onClick={minusGuests} className='text-[#D3A478] p-2 hover:bg-[#D3A478] hover:text-white '>
                                <BiMinus size={30} />
                            </button>
                            <button onClick={plusGuests} className='text-[#D3A478]  p-2 hover:bg-[#D3A478] hover:text-white'>
                                <HiPlus size={30} />
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="relative px-4 flex items-center underline cursor-pointer underline-offset-2 bg-[#A67866] hover:bg-white hover:text-black hover:no-underline h-full  uppercase">
                    <BsUiChecks size={18} className='mr-4' />
                    <span className='font-bold'>Check Availability</span>
                </div>
            </div>
        </div>
    )
}

export default Availability