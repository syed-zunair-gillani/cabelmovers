import React from 'react'
import Background from '../../../public/images/background_01-scaled.jpeg';
import Image from 'next/image';
import Link from 'next/link';
import { LuPhoneCall } from 'react-icons/lu';
import { BiPhone } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import PageHead from '@/components/metas/pagesmeta';

const LpBestIsps = () => {
  const img = Background.src
  return (
    <>
    <PageHead title="Best ISPS | Cable Movers" description="Reliable High Speed Internet Plans for May, 2024" url="https://www.cablemovers.net/lp-best-isps" curl="https://www.cablemovers.net/lp-best-isps" />
      
      <header className='shadow py-4 relative z-50'>
        <div className='container mx-auto px-4 flex items-center gap-7'>
          <div className="sm:w-1/3 w-full">
            <Link href="/lp-best-isps">
              <Image src="/logo.png" alt="Cable Movers Logo" width={155} height={34} className='md:w-auto inline-block ' />
            </Link>
          </div>
          <div className='sm:w-2/3 w-full hidden sm:flex flex-col items-end'>
            <p className='text-xl font-semibold text-[#215690]'>
              SPECIAL OFFERS AVAILABLE WHEN YOU CALL
            </p>
            <Link href="tel:833-592-0098" className="items-center gap-2 text-[#ef9831] hover:text-[#215690] font-[Roboto] flex justify-end">
              <LuPhoneCall size={20} />
              <span className="text-xl font-semibold">Call 833-592-0098</span>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className='relative py-28 -mt-24  bg-[url("/images/home-slide.webp")]'>
          <div className="container mx-auto px-4 flex md:flex-row flex-col gap-7 items-center">
            <div className='md:w-1/2 w-full py-10'>
              <h5 className='text-lg font-bold text-[#ef9831] mb-2'>
                Get a $100 Gift Card when you Order Qualifying Internet Package
              </h5>
              <h1 className="text-3xl md:text-4xl md:leading-tight font-bold text-white mb-4">
                Reliable High Speed Internet Plans for  <span className='text-[#ef9831]'>May, 2024</span>
              </h1>
              <div className='features text-white mb-5'>
                <ul>
                  <li className='!text-base'>
                    Download Speeds up to 5000 Mbps
                  </li>
                  <li className='!text-base'>
                    Quick, Easy and Free Professional Installation
                  </li>
                  <li className='!text-base'>
                    Internet with Free Modem, No Contracts and No Data Caps
                  </li>
                  <li className='!text-base'>
                    Access from harder to reach locations including rural and remote areas
                  </li>
                </ul>
              </div>
              <Link href={`tel:833-592-0098`} className="border-2 border-[#ef9831] hover:border-[#215690] bg-[#ef9831] hover:bg-[#215690] group rounded-md md:w-fit w-full px-7 py-2 flex gap-3 items-center mb-4">
                <BiPhone className='text-4xl text-[#215690] group-hover:text-white' />
                <div className='md:text-lg text-base font-bold text-white flex flex-col '>
                  <span className='text-[#215690] text-base group-hover:text-white'> Call for a Free Quote</span>
                  833-592-0098
                </div>
              </Link>
            </div>
            <div className='md:w-1/2 w-full md:block hidden'>
              <Image src="/images/slide1.webp" alt="Feature Image" width={1200} height={1626} className='object-cover w-full h-full' />
            </div>
          </div>
        </section>
        <section className='py-16 bg-[#f8f9ff]'>
          <div className='container mx-auto px-4 flex flex-col gap-16'>
            {Data?.map((item, idx) => {
              return <div key={idx} className='md:w-full w-full flex md:flex-row flex-col items-center gap-7 bg-white md:p-12 md:pb-12 p-[30px] pb-[50px] shadow-[0_35px_44px_0_rgba(33,46,144,0.08)] rounded-2xl relative'>
                <h2 className='text-xl font-bold absolute md:top-1/2 md:-translate-y-1/2 md:-left-[-30px] md:-translate-x-full left-1/2 -translate-x-1/2 top-[-30px] md:h-[58px] md:w-[69px] h-[48px] w-[49px] bg-[#ef9831] text-black flex items-center justify-center rounded-[5px]'>
                  {item?.id}
                </h2>
                <div className='md:w-1/5 w-full'>
                  <Image src={item?.img} alt='logo' width={140} height={50} className='md:mx-0 mx-auto' />
                </div>
                <div className='md:w-2/5 w-full'>
                  <h4 className='text-xl font-extrabold mb-3'>
                    Key Features
                  </h4>
                  <ul className='flex flex-col gap-1'>
                    {item?.features?.map((feature, i) => {
                      return <li key={i} className='md:text-base text-sm font-normal'>
                        {feature?.list}
                      </li>
                    })}
                  </ul>
                </div>
                <div className='md:w-1/5 w-full md:order-3 order-4'>
                  <p className='text-base font-bold md:text-left text-center mb-2'>
                    Price Starting From:
                  </p>
                  <h3 className='md:text-4xl text-3xl font-extrabold md:text-left text-center text-[#ef9831]'>
                    ${item?.price}/mo
                  </h3>
                  {/* <Link href={item?.link} className="md:text-sm text-base font-bold text-white bg-[#ef9831] hover:bg-[#215690] rounded-md md:w-fit w-full px-3 py-2 flex items-center mt-4">
                    See pricing & Packages
                  </Link> */}
                </div>
                <div className='md:w-1/5 w-full md:order-4 order-3'>
                  <Link href={`tel:${item?.tel}`} className="items-center gap-2 text-[#215690] font-[Roboto] flex md:justify-end justify-start">
                    <FaPhoneAlt size={18} className='bg-[#215690] text-[#ef9831] w-10 h-10 rounded-full p-2.5' />
                    <span className="text-xl font-semibold">{item?.tel}</span>
                  </Link>
                  <p className='text-xs md:text-right text-start mt-2'>
                    special offers available when you call
                  </p>
                </div>
              </div>
            })}

          </div>
        </section>
        <section className='bg-[#215690]'>
          <div className='container mx-auto px-4 flex md:flex-row flex-col items-center gap-7'>
            
            <div className='md:w-3/5 w-full py-8'>
              <h2 className='md:text-4xl text-2xl font-bold text-[#ef9831] md:text-start text-center'>
                DON’T MISS YOUR GIFT CARD OFFER!
              </h2>
              <p className='md:text-3xl text-xl font-bold text-white my-5 md:text-start text-center'>
                Call now and order your Internet service to claim your limited time gift card offer.
              </p>
              <Link href={`tel:833-592-0098`} className="border-2 border-[#ef9831] bg-[#ef9831] hover:bg-[#215690] group rounded-md md:w-fit w-full px-7 py-2 flex gap-3 items-center mb-4">
                <BiPhone className='text-4xl text-[#215690] group-hover:text-white' />
                <div className='md:text-lg text-base font-bold text-white flex flex-col '>
                  <span className='text-[#215690] text-base group-hover:text-white'> Call for a Free Quote</span>
                  833-592-0098
                </div>
              </Link>
            </div>
            <div className='md:w-2/5 w-full'>
              <Image src="/images/agent.png" alt='img' width={1058} height={1764} className='max-w-[318px] w-full  -mt-24 md:block hidden' />
            </div>
          </div>
        </section>
        <footer className='pt-10 bg-[#515151]'>
          <div className='container mx-auto px-4'>
            <p className='text-sm font-normal text-white mb-8'>
              *Service provider availability varies by service address. Not all offers available in all areas, pricing subject to change at any time. Multiple year commitment may be required with ETFs, additional taxes, upfront fees and terms may apply
            </p>
            <p className='text-sm font-normal text-white pb-5'>
              Copyright © 2024 CableMovers.net
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default LpBestIsps


const Data = [
  {
    id: 1,
    provider: "AT&T",
    img: "/images/logo/att.jpg",
    features: [
      {
        list: "99% proven reliability",
      },
      {
        list: "No annual contracts",
      },
      {
        list: "Straightforward pricing",
      },
      {
        list: "Speeds up to 5 GIGs",
      },
    ],
    price: "55.00",
    tel: "855-205-8483",
    link: "https://www.cablemovers.net/providers/att",
  },
  {
    id: 2,
    provider: "Frontier",
    img: "/images/logo/froniter.jpg",
    features: [
      {
        list: "No Data caps",
      },
      {
        list: "No annual contracts",
      },
      {
        list: "Transparent pricing",
      },
      {
        list: "25x faster than cable",
      },
    ],
    price: "49.99",
    tel: "833-548-0158",
    link: "https://www.cablemovers.net/providers/frontier",
  },
  {
    id: 3,
    provider: "Windstream",
    img: "/images/logo/Windstream.jpg",
    features: [
      {
        list: "No Data caps",
      },
      {
        list: "No annual contracts",
      },
      {
        list: "No Bundle required",
      },
      {
        list: "Enhanced In-Home Wire Protection",
      },
    ],
    price: "39.99",
    tel: "844-229-2047",
    link: "https://www.cablemovers.net/providers/windstream",
  },
  {
    id: 4,
    provider: "EarthLink",
    img: "/images/logo/EarthLink.jpg",
    features: [
      {
        list: "Unlimited data",
      },
      {
        list: "Symmetrical speeds",
      },
      {
        list: "No credit checks",
      },
      {
        list: "No data caps, no throttling",
      },
    ],
    price: "49.95",
    tel: "866-574-0037",
    link: "https://www.cablemovers.net/providers/earthlink",
  },
  {
    id: 5,
    provider: "Spectrum",
    img: "/images/logo/Spectrum.jpg",
    features: [
      {
        list: "Reliable download speed",
      },
      {
        list: "No contracts or data caps",
      },
      {
        list: "Free modem with Antivirus software",
      },
      {
        list: "Bundle with Spectrum TV Voice, and Mobile",
      },
    ],
    price: "49.99",
    tel: "855-591-2618",
    link: "https://www.cablemovers.net/providers/spectrum",
  },
  {
    id: 6,
    provider: "Optimum",
    img: "/images/logo/Optimum.jpg",
    features: [
      {
        list: "Speed and Reliability",
      },
      {
        list: "No contracts or data caps",
      },
      {
        list: "Equipment Included",
      },
      {
        list: "Bundle with Optimum TV Voice, and Mobile",
      },
    ],
    price: "40.00",
    tel: "844-695-1006",
    link: "https://www.cablemovers.net/providers/optimum",
  },
  {
    id: 7,
    provider: "Hughesnet",
    img: "/images/logo/HughesNet.jpg",
    features: [
      {
        list: "Whole Home Wi-Fi",
      },
      {
        list: "Unlimited Data",
      },
      {
        list: "Stream movies/music",
      },
      {
        list: "2 year price lock guarantee",
      },
    ],
    price: "49.99",
    tel: "855-935-3085",
    link: "https://www.cablemovers.net/providers/hughesnet",
  },
  {
    id: 8,
    provider: "CenturyLink",
    img: "/images/logo/CenturyLink.jpg",
    features: [
      {
        list: "No Data limits",
      },
      {
        list: "No annual contracts",
      },
      {
        list: "No introductory rates",
      },
      {
        list: "Lightning fast fiber plans",
      },
    ],
    price: "50.00",
    tel: "855-963-0426",
    link: "https://www.cablemovers.net/providers/centurylink",
  },
  {
    id: 9,
    provider: "Xfinity",
    img: "/images/logo/xfinity.jpg",
    features: [
      {
        list: "No contracts or data caps",
      },
      {
        list: "Wall-to-wall coverage with an xFi Pod",
      },
      {
        list: "99.9% network reliability",
      },
      {
        list: "Bundle with Xfinity TV, Voice, and Mobile",
      },
    ],
    price: "19.99",
    tel: "844-581-1129",
    link: "https://www.cablemovers.net/providers/xfinity",
  },
]
