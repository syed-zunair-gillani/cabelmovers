import React from 'react'

function PageBanner({ title }: any) {
    return (
        <section className='py-24 bg-[#215690]'>
            <div className='container mx-auto px-4'>
                <h1 className="sm:text-5xl text-4xl leading-normal font-extrabold text-white text-center">
                    {title}
                </h1>
            </div>
        </section>
    )
}

export default PageBanner