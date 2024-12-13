import Image from "next/image";
import Link from "next/link";
export const ProviderBox = ({ item }: any) => {
    //console.log(item);
    return (
        <>

            <div className="block rounded-xl border border-gray-100 p-3 shadow-xl transition hover:border-[#215690]/10 hover:shadow-[#215690]/10">
                <Link href={`/providers/${item.slug}`} >
                    <Image src={item.featuredImage?.node.mediaItemUrl} alt="Partners logos by Cable Movers" width={140} height={50} className='mx-auto' />
                    <h2 className="mt-4 text-lg  text-center uppercase">
                        {item.title}
                    </h2>
                </Link>
            </div>


        </>
    )
}
