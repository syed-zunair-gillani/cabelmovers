import React from 'react'
import SearchForm from '@/components/searchform'
import Technology_Box from '../provider/technology-box'
import Provider_Nav_City from '../provider/provider-nav-city';
import { ProviderCardState } from '../provider/provider-card-state';
import Inter_Service_State from '../provider/inter-service-state';
import { useRouter } from 'next/router'
import FastTable_CardProviderState from '../provider/fasttable-cardProviderState';
import CheepTable_CardProviderState from '../provider/cheeptable-cardProviderState';
import OverView from '../overview';
import PageHead from '../metas/pagesmeta';
import Faqs_City from '@/components/faqs_city';
import { formatType } from '@/utils'
import SearchZipcodeModelBox from '../search-zipcode-modelBox';
import Review from '../Review/Review';

export default function CitiesModule({ allProviders, allProviderslist }: any) {
  const { query } = useRouter();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [reviewModelOpen, setReviewModerOpen] = React.useState(false);

  const type = query?.zipcode?.length === 2 ? "internet" : query?.zipcode?.[0];
  const city_code = query?.zipcode?.length === 2 ? query?.zipcode?.[1] : query?.zipcode?.[2];
  const state = query?.zipcode?.length === 2 ? query?.zipcode?.[0] : query?.zipcode?.[1];
  let C_State = (state as string)?.toUpperCase();

  const inputString = city_code || "";
  const parts = inputString?.split('-');
  const capitalizedWords: string[] = parts?.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));
  const city = capitalizedWords.join(' ');
  allProviders = allProviders?.filter((item: any) => item?.providers_types?.some((i: any) => i.toLowerCase() === type));
  const servicesTypes = allProviders?.map((item: any) => { return (item.providers_service_types) })
  const newServicesTypes = servicesTypes?.map((st: any) => st.map((serviceType: any) => ({ name: serviceType.name, description: serviceType.description })));
  const uniqueServiceType: any = [];
  const seenNames = new Set();
  newServicesTypes?.forEach((st: any) => {
    st.forEach((serviceType: any) => {
      if (!seenNames.has(serviceType.name)) {
        uniqueServiceType.push(serviceType);
        seenNames.add(serviceType.name);
      }
    });
  });

  const allProvidersFast = [...allProviders];
  const allProvidersCheep = [...allProviders];
  const cheepProviders = allProvidersCheep.sort((a: any, b: any) => {
    if (type === "tv") {
      return a.services_info_tv_services_price - b.services_info_tv_services_price;
    } else if (type === "internet-tv") {
      return a.services_info_internet_tv_bundles_price - b.services_info_internet_tv_bundles_price;
    } else {
      return a.pro_price - b.pro_price;
    }
  });

  const FastProviders = allProvidersFast.sort((a: any, b: any) => {
    const speedA = parseInt(a.services_info_internet_services_speed.split("-")[1], 10);
    const speedB = parseInt(b.services_info_internet_services_speed.split("-")[1], 10);
    return speedB - speedA;
  });
  const totalProviderCount = allProviders?.length || 0;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();
  const currentMonthNumber = currentMonthIndex + 1;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthName = monthNames[currentMonthIndex];

  const handleModelBox = () => {
    setIsOpen(true)
  }



  return (
    <>
      <SearchZipcodeModelBox setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <PageHead
        title={
          type === "internet" ? `Best Internet Providers in ${city}, ${C_State}  | Top ${totalProviderCount} Options` : 
          type === "tv"       ? `Best TV Providers in ${city}, ${C_State}  | Top ${totalProviderCount} Options` :
          type === "landline" ? `Best Home Phone Service Providers in ${city}, ${C_State}` :
          type === "internet-tv" && `Bundle Service Plans & Providers in ${city}, ${C_State}`
        }
        description={

            type === "internet" ? `Best ${totalProviderCount} Internet Providers in ${city}, ${C_State}: ${allProviders?.slice(0, 2).map((item: any, idx: number) => (
            `${idx + 1} ${item?.title}: ${item?.services_info_internet_services_features || 'N/A'}, Price: $${item?.services_info_internet_services_price || 'N/A'}`)).join(', ')}` :

            type === "tv" ? `Best ${totalProviderCount} Cable TV Providers in ${city}, ${C_State}: ${allProviders?.slice(0, 2).map((item: any, idx: number) => (
              `${idx + 1} ${item?.title}: ${item?.services_info_tv_services_summary_features || 'N/A'}, Price: $${item?.services_info_tv_services_price || 'N/A'}`)).join(', ')}` :

            type === "landline" ? `Best ${totalProviderCount} Home Phone Service Providers in ${city}, ${C_State}: ${allProviders?.slice(0, 2).map((item: any, idx: number) => (
                `${idx + 1} ${item?.title}: ${item?.services_info_landline_services_summary_features || 'N/A'}, Price: $${item?.services_info_landline_services_price || 'N/A'}`)).join(', ')}` :

            type === "internet-tv" && `Bundle TV and Internet Service Plans & Providers in ${city}, ${C_State}: ${allProviders?.slice(0, 2).map((item: any, idx: number) => (
                  `${idx + 1} ${item?.title} bundles in ${city}, Price: $${item?.services_info_internet_tv_bundles_price || 'N/A'}`)).join(', ')}`
        }

        url={`https://www.cablemovers.net/${type}/${state}/${city_code}`} curl={`https://www.cablemovers.net/${type}/${state}/${city_code}`}
      />
      <section className="min-h-[40vh]  flex items-center bg-gray-50">
        <div className="container mx-auto px-4 items-center">
          <div className='flex justify-center flex-col items-center'>
            <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
              {formatType(type)} Providers in <br /><span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
            </h1>
            <p className="text-xl text-center font-[Roboto] my-5">
              Enter your zip code so we can find you the best providers in your area:
            </p>
            <button className="text-[#ef9831] border hover:bg-[#ef9831] hover:text-white border-[#ef9831] p-3 px-8 rounded-lg" onClick={handleModelBox}>Change Location</button>
          </div>
        </div>
      </section>

      <Provider_Nav_City />

      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold  capitalize leading-10">
              {formatType(type)} Providers in <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
            </h2>
          </div>
          <div className='grid gap-7'>
            {
              allProviders?.map((item: any, idx: number) => {

                var summaryData = {
                  logo: item?.featured_image,
                  provider: item?.title,
                  type: item.providers_service_types,
                  mobileNo: item.pro_phone,
                  slug: item.slug,
                  pro_offer: item.pro_offer,
                  speed: type === "internet" ? item.services_info_internet_services_speed :
                    type === "tv" ? item.services_info_tv_services_speed :
                      type === "landline" ? item.services_info_landline_services_speed :
                        type === "internet-tv" && item.services_info_internet_tv_bundles_speed,
                  summery: type === "internet" ? item.services_info_internet_services_features :
                    type === "tv" ? item.services_info_tv_services_features :
                      type === "landline" ? item.services_info_landline_services_features :
                        type === "internet-tv" && item.services_info_internet_tv_bundles_features,
                  price: type === "internet" ? item.services_info_internet_services_price :
                    type === "tv" ? item.services_info_tv_services_price :
                      type === "landline" ? item.services_info_landline_services_price :
                        type === "internet-tv" && item.services_info_internet_tv_bundles_price
                }

                return (
                  <>
                    <ProviderCardState key={idx} count={idx} type={type} item={summaryData} offer={item?.pro_offer} />

                  </>
                )
              })
            }
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *DISCLAIMER: Availability vary by service address. not all offers available in all areas, pricing subject to change at any time. Additional taxes, fees, and terms may apply.
            </p>
          </div>
        </div>
      </section>


      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className=''>
            <h2 className="text-2xl font-bold">
              Overview of {formatType(type)} Providers in <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
            </h2>

            <OverView uniqueServiceType={uniqueServiceType} type={type} city={city} state={state} allProviders={allProviders} />
          </div>
        </div>
      </section>



      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold  capitalize leading-10">
              Cheap  {formatType(type)} Providers in <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
            </h2>
            <p className='text-xl font-[Roboto] mt-5'>Affordability is essential when choosing your {formatType(type)} Provider; in an age where staying connected is more crucial than ever, we bring you budget-friendly {formatType(type)} options that don't compromise on quality. Below are the cheap {formatType(type)} Providers in {city}, {C_State}.</p>
          </div>

          <div className={`md:w-full min-w-fit grid grid-cols-2 bg-[#215690]`}>
            <div className="border-r grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
              <div>
                <h4 className="md:text-base text-xs text-center text-white">
                  Provider
                </h4>
              </div>
            </div>
            <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
              <div>
                <h4 className="md:text-base text-xs text-center text-white mb-2">
                  Pricing starts from
                </h4>
              </div>
            </div>
          </div>
          <div className='grid'>
            {
              cheepProviders?.map((item: any, idx: number) => {
                var summaryData = {
                  provider: item?.title,
                  slug: item.slug,
                  price: type === "internet" ? item.services_info_internet_services_price :
                    type === "tv" ? item.services_info_tv_services_price :
                      type === "landline" ? item.services_info_landline_services_price :
                        type === "internet-tv" && item.services_info_internet_tv_bundles_price,
                }
                return (
                  <>
                    <CheepTable_CardProviderState key={idx} count={idx} item={summaryData} />

                  </>
                )
              })
            }
          </div>
        </div>
      </section>


      {type !== 'internet-tv' && type !== 'tv' && type !== 'landline' && (

        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold  capitalize leading-10">

                Fastest {formatType(type)} Providers In <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
              </h2>
              <p className='text-xl font-[Roboto] mt-5'>If speed is your top priority consider the following {formatType(type)} Providers in {city}, {C_State}. These providers offer impressive download speeds that cater to the needs of heavy internet users, streamers, and online gamers.</p>
            </div>

            <div className={`md:w-full min-w-fit grid  grid-cols-2 bg-[#215690]`}>
              <div className="border-r grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                  <h4 className="md:text-base text-xs text-center text-white">
                    Provider
                  </h4>
                </div>
              </div>
              <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                <div>
                  <h4 className="md:text-base text-xs text-center text-white">
                    Max Download Speed
                  </h4>
                </div>
              </div>
            </div>
            <div className='grid'>
              {
                FastProviders?.map((item: any, idx: number) => {

                  var summaryData = {
                    provider: item?.title,
                    speed: item.services_info_internet_services_summary_speed,
                    slug: item.slug,
                  }

                  return (
                    <>
                      <FastTable_CardProviderState key={idx} count={idx} item={summaryData} />

                    </>
                  )
                })
              }
            </div>

          </div>
        </section>

      )}




      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className='mb-10'>
            <h2 className="text-2xl font-bold">
              Summary of {formatType(type)} Providers in  <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
            </h2>
            <div className="w-fit hint mx-auto block md:hidden mt-5" >
              Swipe Left to See All →
            </div>
          </div>
          <div>


            <div className=" w-full lg:max-w-[1200px] mx-auto h-auto mb-6">
              <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                <div className={`md:w-full min-w-[50px] grid ${type === 'landline' ? 'md:grid-cols-8' : type === 'internet-tv' ? 'md:grid-cols-8' : 'md:grid-cols-7'}  grid-cols-1 bg-[#215690] `}>
                  <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                    <div>
                      <h4 className="md:text-base text-xs text-center text-white">
                        Provider
                      </h4>
                    </div>
                  </div>
                  <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                    <div>
                      <h4 className="md:text-base text-xs text-center text-white">
                        Connection Type
                      </h4>
                    </div>
                  </div>
                  {type !== "landline" && (
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                      <div>
                        <h4 className="md:text-base text-xs text-center text-white mb-2">
                          {type === "tv" ? (
                            "Channels"
                          ) : (
                            "Max Download Speed"
                          )}
                        </h4>
                      </div>
                    </div>)}

                  {type === "internet-tv" &&
                    <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                      <div>
                        <h4 className="md:text-base text-xs text-center text-white mb-2">
                          Channels
                        </h4>
                      </div>
                    </div>}

                  <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto md:col-span-3 h-[120px] items-center">
                    <div>
                      <h4 className="md:text-base text-xs text-center text-white mb-2">
                        Features
                      </h4>
                    </div>
                  </div>
                  <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center md:col-span">
                    <div>
                      <h4 className="md:text-base text-xs text-center text-white mb-2">
                        Pricing starts from
                      </h4>
                    </div>
                  </div>
                </div>
                <div className='flex md:flex-col flex-row w-full md:overflow-hidden overflow-x-scroll'>

                  {
                    allProviders?.map((item: any, idx: number) => {
                      var summaryData = {
                        provider: item?.title,
                        slug: item.slug,
                        type: item.providers_service_types,
                        summery: type === "internet" ? item.services_info_internet_services_summary_features :
                          type === "tv" ? item.services_info_tv_services_summary_features :
                            type === "landline" ? item.services_info_landline_services_summary_features :
                              type === "internet-tv" && item.services_info_internet_tv_bundles_summary_features,

                        speed: type === "internet" ? item.services_info_internet_services_summary_speed :
                          type === "tv" ? item.services_info_tv_services_summary_speed :
                            type === "landline" ? item.services_info_landline_services_summary_speed :
                              type === "internet-tv" && item.services_info_internet_tv_bundles_summary_speed,
                        channel: item.services_info_internet_tv_bundles_summary_channel,
                        price: type === "internet" ? item.services_info_internet_services_price :
                          type === "tv" ? item.services_info_tv_services_price :
                            type === "landline" ? item.services_info_landline_services_price :
                              type === "internet-tv" && item.services_info_internet_tv_bundles_price,
                      }

                      return (
                        <>

                          <Inter_Service_State data={summaryData} key={idx} type={type} />
                        </>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {type !== "landline" && (

        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className='mb-10'>
              <h2 className="text-2xl font-bold mb-2">

                Types of {formatType(type)} Technologies Available in  <span className="text-[#ef9831] ">{city}, <span className='uppercase'>{state}</span></span>
              </h2>
              <p className='text-base'>
                {city}, {C_State} is well-connected with a diverse range of {formatType(type)} connection types to its residents, each with with its own advantages and considerations. These connection types include    {
                  uniqueServiceType.map((t: any, i: number) => (
                    <span key={i}> <span dangerouslySetInnerHTML={{ __html: t.name }} /> , </span>
                  ))
                }. Understanding these options can help you make an informed decision based on your needs and location.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">

              {
                uniqueServiceType.map((t: any, i: number) => (
                  <Technology_Box
                    icon={t.name}
                    title={t.name}
                    key={i}
                    content={t.description}
                  />
                ))
              }
            </div>
          </div>
        </section>)}

      <section className="px-4  my-16 container mx-auto">
        <button onClick={()=>setReviewModerOpen(true)} className='border-[#EF9831] border-[2px] text-[#EF9831] p-3 px-5 rounded-lg hover:bg-[#EF9831] hover:text-white font-medium'>Leave a Review</button>
        <div className="  grid gap-10">
          {/* <Faqs_City city={city} type={type} state={state} zipcode="" cheepProviders={cheepProviders} allProviders={allProviders} totalProviderCount={totalProviderCount} /> */}
          
          <Review reviewModelOpen={reviewModelOpen} setReviewModerOpen={setReviewModerOpen} allProviderslist={allProviderslist}/>
        </div>

      </section>
    </>
  )
}


