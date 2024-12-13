import React from 'react'
import { FaHandshake, FaMoneyBill, FaRegClock, FaUserTie } from 'react-icons/fa6'

const Why_ChooseUs = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className='text-center md:text-4xl text-2xl font-bold'>
                        Why Choose Cable Movers?
                    </h2>
                    <p className='text-xl font-normal my-4'>
                        Finding TV and Internet Service Providers is complex and time consuming but cable movers make the search process so easy and simple that saves you time and money. Here’s why you should shop with us.
                    </p>
                </div>
                <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-7">
                    <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <FaHandshake className="h-10 w-10 text-[#215690]" />
                        <h2 className="mt-4 text-xl font-bold">
                            Convenience
                        </h2>
                        <p className="mt-1 text-base">
                            Cable Movers can simplify the task of setting up your Internet or TV service. Instead of searching individual provider sites do all your research, compare plans and order service all on one site.
                        </p>
                    </div>
                    <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <FaRegClock className="h-10 w-10 text-[#215690]" />
                        <h2 className="mt-4 text-xl font-bold">
                            Time Savings
                        </h2>
                        <p className="mt-1 text-base">
                            Cable Movers can help you save time. Enter your zip code once and compare all options available at your address.
                        </p>
                    </div>
                    <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <FaMoneyBill className="h-10 w-10 text-[#215690]" />
                        <h2 className="mt-4 text-xl font-bold">
                            Cost Savings
                        </h2>
                        <p className="mt-1 text-base">
                            Instead of tracking offers from multiple provider websites, compare current prices in real time at Cable Movers and get the best deal that fit your budget.
                        </p>
                    </div>
                    <div className="block rounded-xl border border-gray-100 p-8 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                        <FaUserTie className="h-10 w-10 text-[#215690]" />
                        <h2 className="mt-4 text-xl font-bold">
                            Expert Advice
                        </h2>
                        <p className="mt-1 text-base">
                            Our trained agents can answer any service related question and recommend the best options available in your area.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why_ChooseUs
