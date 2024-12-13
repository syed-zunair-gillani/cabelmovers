import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from 'next/router'
import SearchZipcodeModelBox from './search-zipcode-modelBox'

export default function Faqs_City({ city, type, allProviders, totalProviderCount, countServiceType, cheepProviders }: any) {
  
    city = !city ? "" : `${city},`
    const { query } = useRouter();
    let state = query.state;
    const [open, setOpen] = useState<any>(1);
    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(null)
        }
        setOpen(id)
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const handleModelBox = () => {
        setIsOpen(true)
    }





    return (
        <>
            <SearchZipcodeModelBox setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
            {type === "internet" &&
                <>
                    <h2 className="text-2xl font-bold">
                        <span className=" uppercase"> <span className="  text-[#ef9831] uppercase">{city} {state} </span> </span>  Internet FAQ’s
                    </h2>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(1)}>
                                <p className="text-lg font-semibold " >
                                    1.	Who is the Best Internet Service Provider in   <span className=" uppercase"> <span className=" uppercase">{city} {state} </span> </span> ?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 1 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 1 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                {totalProviderCount} Internet service providers are available in {city} Based on the availability {allProviders[0].title} is the best internet service provider in {city} <span className=" uppercase">{state} </span>.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(2)}>
                                <p className="text-lg font-semibold " >

                                    2.	Who is the fastest Internet service provider in  <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 2 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 2 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                {
                                    allProviders[0]?.title
                                }  is the fastest internet service provider in {city} and offers max download speed up to {allProviders[0]?.services_info_internet_services_summary_speed }Mbps - in select areas.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(3)}>
                                <p className="text-lg font-semibold " >
                                    3.	Who is the cheapest Internet service provider in  <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 3 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 3 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                {cheepProviders[0].title} is the cheapest internet service provider in {city} with price starting from ${cheepProviders[0]?.providersInfo?.proPrice || cheepProviders[0]?.pro_price}.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(4)}>
                                <p className="text-lg font-semibold " >
                                    4.	What is the typical internet speed options offered in  <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 4 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 4 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                In {city} internet speed options can vary among internet service providers but most plans include speeds from 25 mbps to 5000 mbps.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(5)}>
                                <p className="text-lg font-semibold " >
                                    5.	How do I check the availability of Internet service providers in   <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 5 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 5 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To check Internet service providers availability, <button className="text-blue-400" onClick={handleModelBox}>Enter your zip code</button>  to find the best internet options available to you.
                            </p>
                        </div>
                    </div>

                </>

            }

            {type === "tv" &&
                <>
                    <h2 className="text-2xl font-bold">
                        <span className=" uppercase"> <span className="  text-[#ef9831] uppercase">{city} {state} </span> </span> TV FAQ’s               </h2>

                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(1)}>
                                <p className="text-lg font-semibold " >
                                    How do I check the availability of TV service providers in   <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 1 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 1 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To check TV service providers availability, <button className="text-blue-400" onClick={handleModelBox}>Enter your zip code</button> to find the best TV options available to you.  </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(2)}>
                                <p className="text-lg font-semibold " >

                                    2.	How do I setup TV service in my new home in  <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 2 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 2 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To setup TV service in your new home, contact the above listed service providers, inquire about their plans and select the plan that works for you. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(3)}>
                                <p className="text-lg font-semibold " >
                                    3.	Can I get TV service without any contract in   <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 3 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 3 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                Yes. A few TV service providers in  <span className=" uppercase">{city} {state} </span> offer no contract or month to month services. Call the providers to know more. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(4)}>
                                <p className="text-lg font-semibold " >
                                    4.	Who is the Best TV Service Provider in   <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 4 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 4 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                {totalProviderCount} TV service providers are available in {city} Based on the availability and pricing {allProviders[0]?.title}  is the best TV service provider in <span className=" uppercase">{city} {state} </span>. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(5)}>
                                <p className="text-lg font-semibold " >
                                    5.	Who is the cheapest TV service provider in   <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 5 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 5 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                {cheepProviders[0]?.title}  is the cheapest TV service provider in  <span className=" uppercase">{city} {state} </span> with price starting from ${cheepProviders[0]?.services_info_tv_services_price}   </p>
                        </div>
                    </div>
                </>

            }

            {type === "internet-tv" &&
                <>
                    <h2 className="text-2xl font-bold">
                        <span className=" uppercase"> <span className="  text-[#ef9831] uppercase">{city} {state} </span> </span> Internet and TV FAQ’s;              </h2>

                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(1)}>
                                <p className="text-lg font-semibold " >
                                    1.	How do I check the availability of Internet and TV service providers in    <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 1 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 1 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To check Internet and TV service providers bundles availability, <button className="text-blue-400" onClick={handleModelBox}>Enter your zip code</button> to find the best bundle options available to you. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(2)}>
                                <p className="text-lg font-semibold " >

                                    2.	How do I setup internet and TV service in my new home in  <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 2 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 2 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                To setup internet and TV service in your new home, contact the above listed service providers, inquire about their plans and select the plan that works for you. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(3)}>
                                <p className="text-lg font-semibold " >
                                    3.	Can I get internet and TV bundle without any contract in   <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 3 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 3 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                Yes. A few service providers in  <span className=" uppercase">{city} {state} </span> offer no contract or month to month services. Check with the providers to know more. </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(4)}>
                                <p className="text-lg font-semibold " >
                                    4.	Who is the Best bundle Service Provider in   <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 4 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 4 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                {totalProviderCount}  Bundle service providers are available in {city} Based on the availability  {
                                    allProviders[0]?.title
                                }  is the best bundle service provider in <span className=" uppercase">{city} {state} </span>.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit border border-[#F0F0F0] rounded-[10px] p-[30px] shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
                        <div className="">
                            <div className="flex justify-between cursor-pointer" onClick={() => handleFaq(5)}>
                                <p className="text-lg font-semibold " >
                                    5.	Can I bundle Internet and TV service in  <span className=" uppercase">{city} {state} </span>?
                                </p>
                                <span className="text-lightBlue">

                                    <AiOutlinePlus size={24}
                                        className={`${open === 5 ? "rotate-45 transform transition duration-200" : "rotate-0 transform transition duration-200"}`} />

                                </span>
                            </div>
                        </div>
                        <div className={`${open === 5 ? 'flex' : 'hidden'} `}>
                            <p className="text-base font-medium mt-5" >
                                Yes. Many providers in {city} offer bundle options to combine internet and TV services for potential cost savings. </p>
                        </div>
                    </div>
                </>

            }

        </>
    );
}

