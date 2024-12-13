import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { LuPhoneCall } from 'react-icons/lu';

const Provider_Nav = ({zipcode}:any) => {
    const [nav, setNav] = useState(false);


    const changeBackground = () => {
        if (window.scrollY >= 350) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }
    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeBackground);
    }

    return (
       <section className={`bg-[#215690] py-5 lg:pt-5 lg:pb-1.5 shadow-sm border-y border-zinc-400/20  ${nav ? 'fixed top-0 left-0 right-0' : 'sticky'
            }`}>
            <Link href="tel:833-592-0098" className="items-center lg:hidden container mx-auto gap-2 text-[#ef9831] font-[Roboto] flex justify-center text-center">
                <LuPhoneCall size={28} />
                <span className="text-2xl font-bold">Call to Order 833-592-0098</span>
            </Link>
            <div className="container mx-auto hidden lg:block px-4">
                <div>
                    <ul className='flex md:gap-3 gap-1.5 items-center'>
                        <li>
                            <Link href={`/internet/zip-${zipcode}`} className='bg-[#ef9831] hover:bg-[#215690] text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
                                Internet Providers
                            </Link>
                        </li>
                        <li>
                            <Link href={`/tv/zip-${zipcode}`} className='bg-[#ef9831] hover:bg-[#215690] text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
                                TV Providers
                            </Link>
                        </li>
                        <li>
                            <Link href={`/internet-tv/zip-${zipcode}`} className='bg-[#ef9831] hover:bg-[#215690] text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
                                Internet and TV Providers
                            </Link>
                        </li>
                        <li>
                            <Link href={`/landline/zip-${zipcode}`} className='bg-[#ef9831] hover:bg-[#215690] text-white md:text-base text-xs text-center inline-block w-full font-medium font-[Roboto] md:px-3 px-1.5 py-1.5 rounded-3xl'>
                                Landline Providers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Provider_Nav
