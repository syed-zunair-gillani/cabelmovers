
import PageBanner from '@/components/pageBanner'
import apolloClient from '@/config/client'
import SearchForm from '@/components/searchform'
import { GET_POST_SLUG } from '@/config/query'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import PageHead from '@/components/metas/pagesmeta'

const Category = ({ SinglePost }: any) => {
  return (
    <>
      <PageHead title={SinglePost.title} description={SinglePost?.blogSeo?.seoDescription} url={`https://www.cablemovers.net/blog/${SinglePost?.slug}`} />
      <PageBanner title={SinglePost.title} />
      <main className="py-16 max-w-screen-lg mx-auto singlePost">
        <div className="p-4">
          <Image src={SinglePost?.featuredImage?.node?.mediaItemUrl} alt="technology" className="rounded-lg" width={1280} height={853} />
          <div className="p-5">
            <div className="text-gray-700 mt-2 text-sm" dangerouslySetInnerHTML={{ __html: SinglePost?.content }} />
          </div>
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

export default Category


export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug
  const response = await apolloClient.query({
    query: GET_POST_SLUG,
    variables: {
      slug
    },
  });
  const SinglePost = response.data.postBy;

  return {
    props: {
      SinglePost,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
