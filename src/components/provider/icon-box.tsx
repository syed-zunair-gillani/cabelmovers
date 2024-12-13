import React from 'react'
import { FaTv, FaWifi, FaMobileAlt, FaFileAlt } from 'react-icons/fa'
import { HiArrowsUpDown } from 'react-icons/hi2'
import { GiAerialSignal } from 'react-icons/gi'

const iconComponents: any = {
    TV: <FaTv />,
    Wifi: <FaWifi />,
    Mobile: <FaMobileAlt />,
    File: <FaFileAlt />,
    ArrowsUp: <HiArrowsUpDown />,
    Signal: <GiAerialSignal />,

};

function IconBox({ title, content, icon }: any) {
    const iconComponent = iconComponents[icon] || null;
    return (
        <div className="block rounded-xl border border-gray-100 px-8 py-10 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
            <span className="text-4xl !text-[#215690] text-center block w-fit mx-auto">
                {iconComponent}
            </span>
            <h2 className="mt-5 text-xl font-bold text-center">
                {title}
            </h2>
            <p className="mt-5 text-base text-center">
                {content}
            </p>
        </div>
    )
}

export default IconBox