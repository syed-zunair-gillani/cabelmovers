import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const CityBox
    = () => {
        return (
            <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
                {Cities?.map((item: any, idx: number) => {
                    return <li key={idx} className='bg-[#F5F5F5] rounded-2xl px-4 py-4 text-[#215690] font-[Roboto] hover:drop-shadow-xl hover:shadow-bg-[#f5f5f5] group'>
                        <Link href= {item?.slug} className="">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl group-hover:underline">
                                    {item?.name}
                                </h3>
                                <BsArrowRight strokeWidth="1" className="items-center text-right" />
                            </div>
                            
                        </Link>
                    </li>
                })}
            </ul>
        )
    }

export default CityBox

export const Cities = [
    {
        name: "Los Angeles",
        slug: "/internet/ca/los-angeles"
    },
    {
        name: "New York",
        slug: "/internet/ny/new-york"
    },
    {
        name: "Boston",
        slug: "/internet/ma/boston"
    },
    {
        name: "Las Vegas",
        slug: "/internet/nv/las-vegas"
    },
    {
        name: "Phoenix",
        slug: "/internet/az/phoenix"
    },
    {
        name: "Atlanta",
        slug: "/internet/ga/atlanta"
    },
    {
        name: "Houston",
        slug: "/internet/tx/houston"
    },
    {
        name: "Denver",
        slug: "/internet/co/denver"
    },
    {
        name: "Orlando",
        slug: "/internet/fl/orlando"
    },
    {
        name: "Chicago",
        slug: "/internet/il/chicago"
    },
    {
        name: "Detroit",
        slug: "/internet/mi/detroit"
    },
    {
        name: "Philadelphia",
        slug: "/internet/pa/philadelphia"
    },
]
