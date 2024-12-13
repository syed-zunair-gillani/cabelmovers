import { ProviderBox } from '@/components/provider/provider-box'
import SearchForm from '@/components/searchform'
import apolloClient from '@/config/client'
import { GET_ALL_PROVIDERS } from '@/config/query'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegHandshake, FaArrowRightLong, FaMapLocationDot } from 'react-icons/fa6'
import { BsShopWindow } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import PageHead from '@/components/metas/pagesmeta'


function Providers({ allProviders }: any) {

    return (
        <>

            <PageHead title="Best TV and Internet Service Providers We Work With | Cable Movers" description="Cable Movers partners with top TV and Internet service providers and offers one stop shop so you can Search, compare and order all on one site." url="https://www.cablemovers.net/providers" />

            <section className="min-h-[40vh]  flex items-center bg-[#215690]">
                <div className="container mx-auto px-4 py-5">
                    <div >
                        <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10 text-white">
                            Find TV & Internet Service Providers in
                            <br /><span className="text-[#ef9831]">your area.</span>
                        </h1>
                        <p className="text-xl text-center font-[Roboto] my-5 text-white">
                            Enter your zip so we can find the best providers in your area:
                        </p>
                        <div className='sm:grid justify-center'>
                            <SearchForm />
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className='text-3xl font-bold'>
                            Featured Providers
                        </h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10  ">
                            <Link href="/providers/att">  <Image src='/images/logo/att.jpg' alt="AT&T logo by Cable Movers" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    AT&T

                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/spectrum">  <Image src='/images/logo/Spectrum.jpg' alt="Spectrum logo by Cable Movers" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    SPECTRUM
                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/earthlink">  <Image src='/images/logo/EarthLink.jpg' alt="EarthLink logo by Cable Movers" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    EARTHLINK
                                </h2>
                            </Link>
                        </div>
                        <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                            <Link href="/providers/hughesnet">  <Image src='/images/logo/HughesNet.jpg' alt="HughesNet logo by Cable Movers" width={140} height={50} className='mx-auto' />
                                <h2 className="mt-4 text-lg  text-center">
                                    HUGHESNET
                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className='text-3xl font-bold'>
                            Top TV and Internet Service Providers
                        </h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 text-center">
                        {
                            allProviders.map((item: any, idx: number) => {
                                return (
                                    <>
                                        <ProviderBox key={idx} item={item} />

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* <section className="">
                <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    <div className="text-center">
                        <h2 className='text-3xl font-bold'>
                            WHY CHOOSE CABLEMOVERS.NET?
                        </h2>
                        <p className='text-base mt-5 mb-10'>
                            Finding Internet & TV providers is tough, but we've made it easy.
                        </p>
                    </div>
                    <div className='flex md:flex-row flex-col gap-8 items-center justify-center'>
                        <div className='bg-[#F3FAFF]  w-full p-8 rounded-2xl'>
                            <FaMapLocationDot className="text-[#0066d4] text-6xl transform md:rotate-0 rotate-90 mx-auto" />
                            <h5 className='text-base font-bold text-center mt-5'>
                                NATIONWIDE COVERAGE
                            </h5>
                            <p className='text-base  text-center mt-3'>Find all Internet and TV providers available to you in your Area.</p>
                        </div>
                        <div>
                            <FaArrowRightLong className="text-[#0066d4] text-3xl transform md:rotate-0 rotate-90" />
                        </div>
                        <div className='bg-[#F3FAFF]  w-full p-8 rounded-2xl'>

                            <BsShopWindow className="text-[#0066d4] text-6xl transform md:rotate-0 rotate-90 mx-auto" />

                            <h5 className='text-base font-bold text-center mt-5'>
                                ONE STOP SHOP
                            </h5>
                            <p className='text-base  text-center mt-3'>compare all Internet and TV plans, order service for no extra charge.</p>
                        </div>
                        <div>
                            <FaArrowRightLong className="text-[#0066d4] text-3xl transform md:rotate-0 rotate-90" />
                        </div>


                        <div className='bg-[#F3FAFF]  w-full p-8 rounded-2xl'>

                            <FaRegHandshake className="text-[#0066d4] text-6xl transform md:rotate-0 rotate-90 mx-auto" />
                            <h5 className='text-base font-bold text-center mt-5'>

                                TOP BRANDS
                            </h5>
                            <p className='text-base  text-center mt-3'>We partnered with Top Brands to help you shop smartly.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='bg-[#FD8800] py-5'>

                <div className='container mx-auto grid grid-cols-2 items-center md:text-5xl text-xl font-bold uppercase'>
                    <div className="grid items-center md:justify-end justify-center">
                        Call to Setup
                    </div>
                    <div className=" items-center justify-start  flex gap-3">  <FaPhoneAlt className="ml-5 md:text-5xl text-2xl font-normal  " /> <Link href="tel:1-833-592-0098">1-833-592-0098</Link> </div>



                </div>
            </section>


        </>
    )
}

export default Providers


export const getStaticProps: GetStaticProps = async () => {
    const [providers] = await Promise.all([
        apolloClient.query({ query: GET_ALL_PROVIDERS }),
    ]);
    const allProviders = providers.data.allProviders.nodes;
    return {
        props: {
            allProviders
        },
    };
}
