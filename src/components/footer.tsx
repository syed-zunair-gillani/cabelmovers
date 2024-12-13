import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks, Providers_Data, Services_data } from '@/const/exports'
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoLinkedinSquare, BiLogoYoutube } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='bg-[#000] pt-16 pb-4 '>
      <div className='container mx-auto px-4 grid md:grid-cols-5 grid-cols-1 gap-5'>
      <div className='col-span-2'>
          <Link href="/">
            <Image src="/logo.png" alt="Cable Movers footer logo" height={56} width={254} />
          </Link>
          <p className='text-sm font-normal text-white/75 mt-5'>
            All names, logos, trademarks displayed are the sole property of their respective owners; cablemovers.net employs these trademarks solely for the purpose of describing the products and services provided by each respective trademark holder. We offer information for comparative purposes and do not directly provide internet and TV services, nor do we endorse one service provider over another. We are financially supported by compensation from our internet and TV partners.
          </p>
          <ul className='flex gap-5 mt-5'>
            <li>
              <Link href="https://www.facebook.com/cablemovers.net" className='text-white/75 hover:text-white text-2xl'>
                <BiLogoFacebookCircle />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/cablemovers" className='text-white/75 hover:text-white text-2xl'>
                <BiLogoTwitter />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/company/cablemovers-net" className='text-white/75 hover:text-white text-2xl'>
                <BiLogoLinkedinSquare />
              </Link>
            </li>
            
          </ul>
        </div>
        
        <div className='col-span-2'>
          <h6 className='text-lg font-normal text-white mb-5 '>
            PROVIDERS
          </h6>
          <ul className='grid md:grid-cols-3 grid-cols-1 gap-1'>
            {Providers_Data?.map((item: any, idx: number) => {
              return <li key={idx}>
                <Link href={item?.link} className='text-sm font-medium capitalize text-white/75 hover:text-white'>
                  {item?.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
        <div>
          <h6 className='text-lg font-normal text-white mb-5'>
            COMPANY
          </h6>
          <ul className='grid gap-3'>
            {NavLinks?.map((item: any, idx: number) => {
              return <li key={idx}>
                <Link href={item?.link} className='text-sm font-medium capitalize text-white/75 hover:text-white'>
                  {item?.name}
                </Link>
              </li>
            })}
          </ul>
        </div>
      </div>
      <div className='container mx-auto px-4 mt-12 pt-4 border-t border-white/20'>
        <p className='text-sm font-normal text-white/75'>
          Copyright © 2024 CableMovers.net. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
