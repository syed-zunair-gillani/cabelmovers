import { generateArrayForBreadcrum } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Breadcrum = () => {
     const router = useRouter()
     const bredcrumList = generateArrayForBreadcrum(router.asPath)

     return (
           <section className="pc-16">
               <ol className="flex items-center whitespace-nowrap container mx-auto px-3 md:pt-5 md:pb-2 pt-3" aria-label="Breadcrumb">
                    <li className="inline-flex items-center">
                         <Link className="flex items-center cursor-pointer text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href="/">
                              <svg className="flex-shrink-0 me-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                              Home
                         </Link>
                         <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </li>
                    {
                         bredcrumList?.map((item:any, idx:number) => (
                              <li className="inline-flex items-center" key={idx}>
                                   <Link className={`flex cursor-pointer items-center text-sm  ${idx+1 === bredcrumList.length ? '!text-gray-300' : 'text-gray-500 hover:text-blue-600 focus:outline-none'}`} href={`/${item.slug}`}>
                                        {item?.name}
                                        {
                                             idx+1 !== bredcrumList.length && <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                        }
                                   </Link>
                              </li>
                         ))
                    }
               </ol>
          </section>
     )
}

export default Breadcrum
