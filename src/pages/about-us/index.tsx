import PageBanner from '@/components/pageBanner'
import SearchForm from '@/components/searchform'
import React from 'react'
import PageHead from '@/components/metas/pagesmeta';
import SearchZipcodeModelBox from '@/components/search-zipcode-modelBox';

function About_Us() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const handleModelBox = () => {
        setIsOpen(true)
    }
    return (
        <>
        <SearchZipcodeModelBox setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
          
            <PageHead title="About Us | Cable Movers" description="Here at Cable Movers, we make it easy to search, compare and order Internet and TV service providers. Call 833-592-0098 to learn more." url="https://www.cablemovers.net/about-us" curl="https://www.cablemovers.net/about-us" />
      
            <PageBanner title="About Us" />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-bold'>
                            What We Do
                        </h2>
                        <p className='text-xl font-normal my-4'>
                            The abundance of internet, TV, and bundle options can be overwhelming. Our aim is to simplify your decision-making process. At cablemovers.net, we provide a one stop solution for internet and TV providers, whether you're seeking bundle comparisons or determining the ideal speeds for your daily online activities.
                            We are here to assist you in comparing internet and TV providers within your locality, ensuring that you're well-informed before making a financial commitment
                        </p>
                    </div>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-bold'>
                            How We Make Money
                        </h2>
                        <p className='text-xl font-normal my-4'>
                            To uphold an ad-free experience for you, we sustain our platform by forming affiliate partnerships with Internet and TV providers, as well as other links showcased on our website. While this might occasionally impact the providers we highlight and their positioning on our site, please be assured that it has no bearing on the impartial information we provide for user comparison.
                        </p>
                    </div>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-bold'>
                            How We Rank Our Providers
                        </h2>
                        <p className='text-xl font-normal my-4'>
                            We aim to provide you with comprehensive choices, which is why we feature all major TV providers on our website. Our reviews consider aspects like availability, reliability, customer support, user feedback, and overall value for your money. We believe that these insights will empower you to make the best decision for your needs.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-[#F3FAFF]">
                <div className='container mx-auto px-4 my-10 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-extrabold leading-normal md:text-start text-center'>
                            Find Internet and TV Service Providers
                        </h2>
                    </div>
                    <div className='flex items-center md:justify-end justify-center [&>div:nth-child(1)]:md:mr-0 [&>div:nth-child(1)]:w-fit'>
                    <button className="text-[#ef9831] border hover:bg-[#ef9831] hover:text-white border-[#ef9831] p-3 px-8 rounded-lg" onClick={handleModelBox}>Change Location</button>
        
                    </div>
                </div>
            </section>
        </>
    )
}

export default About_Us
