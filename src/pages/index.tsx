import CityBox from '@/components/city-box';
import SearchForm from '@/components/searchform';
import ServiceBox from '@/components/service-box';
import Why_ChooseUs from '@/components/why-choose-us';
import Link from 'next/link';
import React from 'react'
import { HiOutlineSearchCircle, HiOutlineShoppingCart } from 'react-icons/hi'
import { BiGitCompare } from 'react-icons/bi'
import Image from 'next/image';
import { LuPhoneCall } from 'react-icons/lu'
import { AllPosts } from '@/config/query';
import { GetServerSideProps } from 'next';
import apolloClient from '@/config/client';
import Blogpost from '@/components/blogpost';
import PageHead from '@/components/metas/pagesmeta';


export default function Home({ BlogPosts }: any) {


   return (
      <>
       <PageHead title="Cable Movers | Find The Best TV and Internet Service Providers" description="Moving or looking to change your service provider, Cable Movers can help. Compare TV and Internet Service Providers, plans and prices by ZIP code." url="https://www.cablemovers.net/" curl="https://www.cablemovers.net/" />
       
         <section className={`min-h-screen h-full flex items-center bg-[url("/images/slide3.jpg")] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50`}>
            <div className="container mx-auto px-4 gap-7 items-center">
               <div className="py-10">
                  <h1 className="text-3xl md:text-5xl text-center md:leading-tight font-bold text-white">
                     Find <span className="text-[#ef9831]">TV and Internet Providers</span> in your Area.
                  </h1>
                  <p className='text-[22px] text-center md:px-24 font-normal text-white my-5'>
                     Compare TV, Internet and Landline Providers, plans and prices by ZIP code.
                  </p>
                  <div className="flex justify-center">
                     <SearchForm />
                  </div>
               </div>
               <div className=''>
                  {/* <Image src="/images/slug-bg.png" alt="Cable Movers: Find TV and Internet Service Providers" width={1200} height={1626} className='object-cover w-full h-full' /> */}
               </div>
            </div>
         </section>

         <section className="py-16 ">
            <div className="container mx-auto px-4">
               <div className="mb-10">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     How it Works?
                  </h2>
               </div>
               <div className='relative grid gap-7 md:grid-cols-3'>
                  <ServiceBox
                     img={<HiOutlineSearchCircle className="text-6xl text-[#215690] mx-auto" />}
                     title="Search "
                     content="Find providers in your area with a simple zip code search."
                  />
                  <ServiceBox
                     img={<BiGitCompare className="text-6xl text-[#215690] mx-auto" />}
                     title="Compare"
                     content="Compare plans and prices from available providers in your area."
                  />
                  <ServiceBox
                     img={<HiOutlineShoppingCart className="text-6xl text-[#215690] mx-auto" />}
                     title="Order"
                     content="Give us a call, we’ll help you setup your service."
                  />
               </div>
            </div>
            <div className='container mx-auto h-[1px] bg-black/20 my-16'></div>
            <div className='container mx-auto px-4'>
               <div className="mx-auto max-w-3xl">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     Find The Best TV and Internet Providers
                  </h2>
                  <p className='text-xl font-normal text-center mt-4'>
                     Here at Cable Movers, we research and review leading providers and have found the most popular plans and deals on every TV and Internet Service Providers to help you shop smartly.
                  </p>
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className='container mx-auto px-4'>
               <div className=''>
                  <h3 className='text-3xl font-bold mb-10'>
                     TV Providers
                  </h3>
                  <div className='grid md:grid-cols-6 grid-cols-3 gap-7'>
                     <div className="">
                        <Link href="/providers/directv">
                           <Image src='/images/logo/DIRECTV.jpg' alt="DIRECTV TV plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/spectrum">
                           <Image src='/images/logo/Spectrum.jpg' alt="Spectrum TV plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/dish">
                           <Image src='/images/logo/dish.jpg' alt="Dish TV plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/xfinity">
                           <Image src='/images/logo/xfinity.jpg' alt="Xfinity TV plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/optimum">
                           <Image src='/images/logo/Optimum.jpg' alt="Optimum TV plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/cox">
                           <Image src='/images/logo/Cox.jpg' alt="Cox TV plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                  </div>
               </div>
               <div className='container mx-auto h-[1px] bg-black/20 my-16'></div>
               <div>
                  <h3 className='text-3xl font-bold mb-10'>
                     Internet Providers
                  </h3>
                  <div className='grid md:grid-cols-6 grid-cols-3 gap-7'>
                     <div className="">
                        <Link href="/providers/spectrum">
                           <Image src='/images/logo/Spectrum.jpg' alt="Spectrum Internet plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/att">
                           <Image src='/images/logo/att.jpg' alt="AT&T Internet plans and pricing from Cable Movers" width={140} height={60} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/earthlink">
                           <Image src='/images/logo/EarthLink.jpg' alt="Earthlink Internet plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/hughesnet">
                           <Image src='/images/logo/HughesNet.jpg' alt="HughesNet Internet plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/frontier">
                           <Image src='/images/logo/froniter.jpg' alt="Frontier Internet plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                     <div className="">
                        <Link href="/providers/optimum">
                           <Image src='/images/logo/Optimum.jpg' alt="Optimum Internet plans and pricing from Cable Movers" width={140} height={50} className='mx-auto' />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className='container mx-auto px-4'>
               <div className="mx-auto max-w-3xl mb-10">
                  <h2 className='text-center md:text-4xl text-2xl font-bold'>
                     Compare TV and Internet Providers by Cities.
                  </h2>
               </div>
               <div>
                  <CityBox />
               </div>
            </div>
         </section>

         <section className="py-16 bg-[#F3FAFF]">
            <div className='container mx-auto px-4 my-10 flex lg:flex-row flex-col justify-center gap-5 items-center'>
               <div className="">
                  <h3 className='md:text-3xl text-2xl text-center lg:text-left font-extrabold leading-normal'>
                     Enter your zip code to find providers and plans in your area:
                  </h3>
               </div>
               <div className='flex md:justify-end justify-center [&>div:nth-child(1)]:mr-0 [&>div:nth-child(1)]:w-fit w-full'>
                  <SearchForm />
               </div>
            </div>
         </section>

         <section className="py-24">
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 items-center'>
               <div className="">
                  <Image src="/images/callus.jpg" alt="Call Cable Movers" width={750} height={750} className='rounded-lg' />
               </div>
               <div className="">
                  <h2 className='md:text-5xl text-3xl leading- font-extrabold text-black'>
                     Need Help Finding The Best Provider For You?
                  </h2>
                  <p className='md:text-xl text-lg font-medium text-black my-5'>
                     Whether you have some questions about the plan or need a little advice, Cable Movers can help you find the best TV and Internet Service Providers in your area. Give us a call and we’ll take care of you.
                  </p>
                  <Link href="tel:833-592-0098" className='text-[#ef9831] hover:text-[#215690] md:text-3xl text-xl font-extrabold hover:underline flex items-center gap-4 w-fit'>
                     <LuPhoneCall /> 833-592-0098
                  </Link>
               </div>
            </div>
         </section>

         <Why_ChooseUs/>

         {/* <section className="py-16">
            <div className="container mx-auto px-4">
               <div className="mb-10">
                  <h2 className='text-left md:text-4xl text-2xl font-bold'>
                     Featured Posts
                  </h2>
               </div>
               <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
                  {BlogPosts?.slice(0,3).map((item: any, idx: number) => {
                     return (
                        <Blogpost key={idx} data={item} />
                     );
                  })}


               </div>
            </div>
         </section> */}
      </>
   );
}

export const getServerSideProps: GetServerSideProps = async () => {
   const [allposts] = await Promise.all([
      apolloClient.query({ query: AllPosts }),
   ]);
   const BlogPosts = allposts.data.posts.edges;
   return {
      props: {
         BlogPosts
      },
   };
}
