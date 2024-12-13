import Link from 'next/link'
import React from 'react'

const ServiceBox = ({ img, title, content, link }: any) => {
    return (
        <div className="w-full py-5 bg-white rounded-3xl">
            <div className="mt-5">
                <span className='block'>
                    {img}
                </span>
                <h2 className="mt-5 text-center text-2xl font-bold">
                    {title}
                </h2>
                <div>
                    <p className="px-5 mt-5 text-base text-center">
                        {content}
                    </p>
                    {/* <Link href={link} className='px-5 py-2 mt-5 text-base text-center block bg-[#ef9831] hover:bg-[#215690] text-white w-fit mx-auto'>
                        Check Availability
                    </Link> */}
                </div>
            </div>
        </div>
    )
}

export default ServiceBox