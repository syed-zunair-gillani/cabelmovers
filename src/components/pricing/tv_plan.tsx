import Link from 'next/link'
import React from 'react'

const TV_Plan = ({ Plans, pro_phone }: any) => {
    //console.log("🚀 ~ file: tv_plan.tsx:5 ~ Plans:", Plans)
    return (
        <div className=" w-full lg:max-w-[1200px] mx-auto h-auto">
            <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                <div className='md:w-full min-w-fit grid md:grid-cols-4 grid-cols-1 bg-[#215690] '>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <h4 className="md:text-base text-xs font-bold text-center text-white">
                                Package
                            </h4>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <h4 className="md:text-base text-xs font-bold text-center text-white mb-2">
                                Channels
                            </h4>
                        </div>
                    </div>
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <h4 className="md:text-base text-xs font-bold text-center text-white">
                                Price
                            </h4>
                        </div>
                    </div>
                    <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                        <div>
                            <h4 className="md:text-base text-xs font-bold text-center text-white mb-2">
                                Order Now
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='flex md:flex-col flex-row w-full md:overflow-hidden overflow-x-scroll'>
                    {Plans?.map((plan: any) => (
                        <div key={plan.id} className='w-full flex md:flex-row flex-col dtable' >
                            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                                <div>
                                    <p className="text-center md:text-base text-xs">
                                        {plan.package}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                                <div>
                                    <p className="text-center md:text-base text-xs font-bold">
                                        {plan.speeds}
                                    </p>
                                    <p className="text-center md:text-xs text-xs">
                                        {plan.speedInfo}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                                <div>
                                    <p className="text-center md:text-base text-xs font-bold">
                                        {plan.price}

                                    </p>
                                    <p className="text-center md:text-xs text-xs">
                                        {plan.priceInfo}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full grid justify-center md:p-5 p-2 md:h-auto h-[120px] overflow-hidden items-center">
                                <div>
                                    <Link href={`tel:${pro_phone}`} className="md:text-base text-[9px] font-medium text-white bg-[#ef9831] hover:bg-[#215690] md:px-3 px-[5px] py-1.5 rounded-3xl block w-[90px] md:w-[140px] text-center mx-auto">
                                        {pro_phone}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TV_Plan
