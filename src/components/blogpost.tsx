import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Blogpost({ data }: any) {
    return (
        <Link href={`/blog/${data?.node?.slug}`}>
        <div className="rounded-lg p-4 lg:p-0 shadow-md">
            <Image src={data?.node?.featuredImage?.node?.mediaItemUrl} alt="Cable Movers blog post featured image" className="rounded-tr-lg rounded-tl-lg" width={500} height={360} />
            <div className="p-5">
                <h2 className="font-bold text-xl text-gray-800 text-center">{data?.node?.title}</h2>
                <div className="text-gray-700 mt-2 text-justify text-sm" dangerouslySetInnerHTML={{ __html: data?.node?.excerpt }} />
            </div>
        </div>
        </Link>

    )
}
