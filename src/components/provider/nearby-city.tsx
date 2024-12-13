import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Nearby_City = () => {
    return (
        <div className='bg-[#F5F5F5] rounded-2xl px-4 py-4 text-[#215690] font-[Roboto] hover:drop-shadow-xl hover:shadow-bg-[#f5f5f5] group'>
            <Link href="#" className="">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl group-hover:underline">
                        Fern Park, FL
                    </h3>
                    <BsArrowRight strokeWidth="1" className="items-center text-right" />
                </div>
            </Link>
        </div>
    )
}

export default Nearby_City