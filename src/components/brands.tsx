import { Galler_Data } from '@/const/exports'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Brands = () => {
  return (
    <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5 ">
      {Galler_Data?.map((item: any, idx: number) => {
        return <li key={idx} className='bg-white rounded-2xl px-4 py-4 flex items-center'>
          <Link href="#" className="">
            <Image src={item?.img} alt={item?.img} width={120} height={50} className='object-contain' />
          </Link>
        </li>
      })}
    </ul>
  )
}

export default Brands