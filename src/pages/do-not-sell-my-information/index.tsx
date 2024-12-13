import PageBanner from '@/components/pageBanner'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head';
import PageHead from '@/components/metas/pagesmeta';

function Sell_Information() {
    return (
        <>

          
            <PageHead title="Do Not Sell My Information | Cable Movers" description="" url="https://www.cablemovers.net/do-not-sell-my-information" curl="https://www.cablemovers.net/do-not-sell-my-information" />
      
            <PageBanner title="Do Not Sell My Information" />
            <section className="py-16">
                <div className='container mx-auto px-4'>
                    <div className="">
                        <p className='text-xl mb-4 leading-relaxed'>
                            If you wish to opt out of the sale of your personal information, please send an email to <Link href="mailto:contact@cablemovers.net">contact@cablemovers.net</Link>, including your first and last name and phone number. You will receive acknowledgment of your message within seven (7) business days. After confirming your identity, we will proceed with your request within thirty (30) days.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sell_Information
