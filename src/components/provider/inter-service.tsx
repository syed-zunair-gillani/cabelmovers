import React from 'react'
import Link from 'next/link'
const Inter_Service = ({ data, type }: any) => {


    return (
        <div className={`min-w-[120px] md:w-full  grid   ${type === 'landline' ? 'md:grid-cols-8' : type === 'internet-tv' ? 'md:grid-cols-8' : 'md:grid-cols-7'}    dtable`}>
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    <p className="text-center md:text-base text-xs">

                        <Link href={`/providers/${data.slug}`} target="_blank" >  {data?.provider} </Link>
                    </p>
                </div>
            </div>
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                    {
                        data?.type.map((t: any, i: number) => (
                            <p className="text-center md:text-base text-xs" key={i}>
                                {t.name}
                            </p>
                        ))
                    }

                </div>
            </div>

            {type !== "landline" && (
                <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                    <div>
                        <p className="text-center md:text-base text-xs">
                            {data?.summery?.summarySpeed}  {type !== 'tv' && (<>Mbps</>)}

                        </p>
                    </div>
                </div>)}

            {type === "internet-tv" &&
                <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                    <div>
                        <p className="text-center md:text-base text-xs">

                            {data?.summery?.summaryChannel}
                        </p>
                    </div>
                </div>
            }
            <div className="w-full md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center md:col-span-2">
                <div>
                    <p className="text-center md:text-base text-xs">
                        {data?.summery?.summaryFeatures}
                    </p>
                </div>
            </div>
            <div className="w-full grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center  md:col-span-2">
                <div>
                    <p className="text-center md:text-base text-xs">
                        ${data?.price}/mo
                    </p>
                </div>
            </div>

            {type === "landline" && (
            <div className="grid gap-3 items-center justify-center p-5 md:border-l border-l-0 md:border-b-0 border-b  md:col-span-2">
                   <Link href={`tel:${data.mobileNo}`} className="text-base text-white font-[Roboto] uppercase px-5 py-2.5 bg-[#215690] hover:bg-[#ef9831] ">{data?.mobileNo} </Link>
                   <Link href={`/providers/${data.slug}`} className="text-base text-white font-[Roboto] uppercase px-5 py-2.5 bg-[#ef9831] hover:bg-[#215690]">View Plans</Link>
            </div>
            )}
         
        </div>
    )
}

export default Inter_Service