import React from 'react'

import { FaSatelliteDish, FaWifi, FaMobileAlt, FaFileAlt } from 'react-icons/fa'
import { MdOutlineCable } from 'react-icons/md'
import { GiWireCoil,GiWireframeGlobe } from 'react-icons/gi'
import { BsModem } from 'react-icons/bs'
import { RiWirelessChargingLine } from 'react-icons/ri'

const iconComp: any = {
    "Cable": <MdOutlineCable />,
    "DSL": <BsModem />,
    "Fiber": <GiWireCoil />,
    "Satellite": <FaSatelliteDish />,
    "Fixed Wireless": <RiWirelessChargingLine />,
    "Streaming": <GiWireframeGlobe />,
};


const Technology_Box = ({ title, content, icon }: any) => {
    const iconComponent = iconComp[icon] || null;
 
    return (
        <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
            <span className="text-4xl !text-[#215690] block w-fit">
                {iconComponent}                
            </span>
            <h2 className="mt-4 text-xl font-bold">
               <span dangerouslySetInnerHTML={{__html:title}}></span> 
            </h2>
            <p className="mt-1 text-base">
                {content}
            </p>
        </div>
    )
}

export default Technology_Box