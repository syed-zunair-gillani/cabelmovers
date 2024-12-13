import Link from 'next/link'
import React from 'react'

const Fast_Table_CardProvider = ({ item, type, offer }: any) => {
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto bg-[#fafafa]">
            <div className="w-full h-auto  flex md:flex-col flex-row items-stretch">
                <div className={`md:w-full w-full grid grid-cols-2 ${type === 'internet-tv' ? ' md:grid-cols-5' : ' md:grid-cols-2'}`}>
                    <div className="border-l border-r border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <p className="text-center md:text-base text-xs">
                            <Link href={`/providers/${item.slug}`} target="_blank">   {item?.provider}</Link>
                            </p>
                        </div>
                    </div>
                    <div className="border-r border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        {item?.summery?.summarySpeed} Mbps
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fast_Table_CardProvider