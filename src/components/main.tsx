import React from 'react'
import SearchForm from './searchform'

const Main = () => {
    return (
        <section className="flex justify-center mt-10 ">
            <div className="bg-[#F3FAFF] container mx-auto px-4 shadow-xl rounded-3xl sm:px-10 grid md:grid-cols-2 items-center">
                <div className="py-10">
                    <h1 className="sm:text-5xl text-2xl font-bold">
                        Find <span className="text-[#ef9831]">TV & Internet Service Providers</span> in Your Area
                    </h1>
                    <div className="w-full py-5 mt-6 bg-white border md:h-52 h-40 rounded-3xl flex">
                        <SearchForm />
                        
                    </div>
                </div>
                <div className="sm:block hidden">
                    <img src="/images/hso.webp" alt="Main Banner Cable Movers" className="ml-auto h-[485px] " />
                </div>
            </div>
        </section>
    )
}

export default Main
