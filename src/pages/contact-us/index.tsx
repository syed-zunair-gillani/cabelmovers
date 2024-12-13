import PageBanner from '@/components/pageBanner'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import PageHead from '@/components/metas/pagesmeta';


function Contact_Us() {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<any>()
    const [sending, setSending] = useState(false)

    const onSubmit: SubmitHandler<any> = (data: any) => {
        setSending(true)
        fetch('/api/email', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
                alert('Message Successfully Sent. Thank You!');
                reset();
                setSending(false)
            }
        });
    }
    return (
        <>

            <PageHead title="Contact Us | Cable Movers" description="Get in touch with Cable Movers about customer service, ISP listings, advertising opportunities and more." url="https://www.cablemovers.net/contact-us" curl="https://www.cablemovers.net/contact-us" />

            <div>
                <PageBanner title="Contact Us" />
                <section className="pb-16 -mt-12">
                    <div className='container mx-auto px-4'>
                        <div className="w-full flex items-center justify-center">
                            <form className="bg-white shadow-xl rounded py-10 lg:px-28 px-8" onSubmit={handleSubmit(onSubmit)}>
                                <h3 className="md:text-3xl text-xl font-bold leading-7 text-center">
                                    Have question?
                                </h3>
                                <p className='text-xl font-normal mt-3'>
                                    We’re here to help. Leave a message and we’ll get you an answer soon.
                                </p>
                                <div className="md:flex w-full gap-5 items-center mt-12">
                                    <div className="md:w-1/2 flex flex-col">
                                        <label className="text-base font-semibold leading-none">Name</label>
                                        <input {...register("name", { required: true })} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input name" />
                                        {errors.name && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                    <div className="md:w-1/2 flex flex-col md:mt-0 mt-7">
                                        <label className="text-base font-semibold leading-none">Email</label>
                                        <input {...register("email", { required: true })} type="email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                                        {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                </div>
                                <div className="md:flex w-full gap-5 items-center mt-8">
                                    <div className="md:w-1/2 flex flex-col">
                                        <label className="text-base font-semibold leading-none">Phone number</label>
                                        <input {...register("phone")} type="tel" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Phone number" />
                                        {errors.phone && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                  
                                    <div className="md:w-1/2 flex flex-col md:mt-0 mt-7">
                                        <label className="text-base font-semibold leading-none">Subject</label>
                                        <select {...register("subject", { required: true })} id="subject" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100">
                                            <option selected>Select a Subject</option>
                                            <option value="Customer Service">Customer Service</option>
                                            <option value="New Service for my Home">New Service for my Home</option>
                                            <option value="ISP: New/Update Listing">ISP: New/Update Listing</option>
                                            <option value="Advertising Opportunities">Advertising Opportunities</option>
                                            <option value="Other">Other</option>                                            
                                        </select>
                                        {errors.subject && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full flex flex-col mt-8">
                                        <label className="text-base font-semibold leading-none">Comments</label>
                                        <textarea {...register("comment", { required: true })} tabIndex={0} aria-label="leave a Comments" role="textbox" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                                        {errors.comment && <span className='text-xs text-red-500'>This field is required</span>}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <input type='submit' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#ef9831] hover:bg-[#215690]" value={sending ? 'SENDING...' : `SUBMIT`} />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact_Us
