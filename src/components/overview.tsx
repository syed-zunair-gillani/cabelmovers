import React from 'react'

function OverView({ uniqueServiceType, type, city, state, totalProviderCount, allProviders,zipcode }: any) {

    function formatType(type: any) {
        if (type === "internet") {
            return "Internet";
        } else if (type === "tv") {
            return "TV";
        } else if (type === "internet-tv") {
            return "TV and Internet";
        } else {

            return type;
        }
    }
    return (

        <p className='text-xl font-[Roboto] mt-5'>
            As of the time this page was written, {city === '' ? <span className='uppercase'>{state}</span> : city}  has Two or more {formatType(type)} Service Providers offering various types of {formatType(type)} plans to its residents. You’ll likely have options from
            {
                uniqueServiceType.map((t: any, i: number) => (
                    <span key={i}> <span dangerouslySetInnerHTML={{ __html: t.name }} /> {i < uniqueServiceType.length - 1 && ', '} </span>

                ))
            } {formatType(type)} Service Providers.  {
                allProviders?.slice(0, 1).map((item: any, idx: number) => (
                    <span key={idx}>  {item?.title} </span>
                ))
            } is the best {formatType(type)} Service Provider in {city && `${city} ,` } <span className='uppercase'>{state || zipcode}</span> .
        </p>


    )
}

export default OverView


