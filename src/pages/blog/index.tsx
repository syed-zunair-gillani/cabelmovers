import Blogpost from '@/components/blogpost'
import PageBanner from '@/components/pageBanner'
import SearchForm from '@/components/searchform'
import apolloClient from '@/config/client'
import { AllPosts } from '@/config/query'
import { GetServerSideProps, GetStaticProps } from 'next'
import React from 'react'
import PageHead from '@/components/metas/pagesmeta'

function Blog({ BlogPosts }: any) {

    return (
        <>

            <PageHead title="Latest News, Reviews and Guides on Internet and TV Service Providers" description="Cable Movers will keep you updated on latest news, reviews and guides on Internet and TV service providers." url="https://www.cablemovers.net/blog" curl="https://www.cablemovers.net/blog" />

            <PageBanner title="Blog" />
            <main className="py-16 max-w-screen-lg mx-auto">

                <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
                    {
                        BlogPosts.map((item: any, idx: number) => {
                            return (
                                <>

                                    <Blogpost key={idx} data={item} />

                                </>
                            )
                        })
                    }

                </div>
            </main>
            <section className="py-16 bg-[#F3FAFF]">
                <div className='container mx-auto px-4 my-10 grid md:grid-cols-2 grid-cols-1 gap-5 items-center'>
                    <div className="">
                        <h2 className='md:text-4xl text-2xl font-extrabold leading-normal md:text-start text-center'>
                            Find TV and Internet Service Providers in Your Area:
                        </h2>
                    </div>
                    <div className='flex items-center md:justify-end justify-center [&>div:nth-child(1)]:md:mr-0 [&>div:nth-child(1)]:w-fit'>
                        <SearchForm />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog


export const getServerSideProps: GetServerSideProps = async () => {
    const [allposts] = await Promise.all([
        apolloClient.query({ query: AllPosts }),
    ]);
    const BlogPosts = allposts.data.posts.edges;
    return {
        props: {
            BlogPosts
        },
    };
}
