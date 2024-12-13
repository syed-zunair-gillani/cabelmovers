import React from 'react';
import Provider_Nav from '../provider/provider-nav';
import { ProviderCard } from '../provider/provider-card';
import Inter_Service from '../provider/inter-service';
import Technology_Box from '../provider/technology-box';
import { useRouter } from 'next/router';
import Cheep_Table_CardProvider from '../provider/cheeptable-cardProvider';
import Fast_Table_CardProvider from '../provider/fasttable-cardProvider';
import OverView from '../overview';
import PageHead from '../metas/pagesmeta';
import Faqs_Zip from '@/components/faqs_zip';
import SearchZipcodeModelBox from '../search-zipcode-modelBox';
import { formatType } from '@/utils';

function ZipCodeModule({
  zipcode,
  city,
  state,
  allProviders,
  zones,
  type,
}: any) {
  //console.log("🚀 ~ ZipCodeModule ~ allProviders:", allProviders)

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { query } = useRouter();
  var types = query?.type;

  const servicesTypes = allProviders?.map((item: any) => {
    return item?.serviceTypes?.nodes;
  });
  const newServicesTypes = servicesTypes?.map((st: any) =>
    st?.map((serviceType: any) => ({
      name: serviceType.name,
      description: serviceType.description,
    }))
  );
  const uniqueServiceType: any = [];
  const seenNames = new Set();
  newServicesTypes?.forEach((st: any) => {
    st?.forEach((serviceType: any) => {
      if (!seenNames.has(serviceType.name)) {
        uniqueServiceType.push(serviceType);
        seenNames.add(serviceType.name);
      }
    });
  });

  const totalProviderCount = allProviders?.length || 0;
  const allProvidersFast = [...allProviders];
  const allProvidersCheep = [...allProviders];
  const allProvidersSummary = [...allProviders];
  const cheepProviders = allProvidersCheep.sort(
    (a: any, b: any) => a.providersInfo?.proPrice - b.providersInfo?.proPrice
  );
  const FastProviders = allProvidersFast.sort((fa: any, fb: any) => {
    const speedA = parseInt(
      fa.providersInfo?.servicesInfo?.internetServices?.speed?.split('-')[1],
      10
    );
    const speedB = parseInt(
      fb.providersInfo?.servicesInfo?.internetServices?.speed?.split('-')[1],
      10
    );
    return speedB - speedA;
  });

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const handleModelBox = () => {
    setIsOpen(true);
  };

  return (
    <>
      <SearchZipcodeModelBox setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <PageHead
        title={
          type === 'internet'? `Internet Providers in ZIP Code ${zipcode} | Top ${totalProviderCount} Options`:
          type === 'tv'? `TV Providers in ZIP Code ${zipcode} | Top ${totalProviderCount} Options`:
          type === 'landline'? `Landline Phone Service Providers in ZIP Code ${zipcode}`:
          type === 'internet-tv' &&`Bundle Service Plans & Providers in ZIP Code ${zipcode}`
        }
        description={
          type === 'internet'? `Top ${totalProviderCount} Internet Providers in Zip Code ${zipcode}; ${allProviders?.slice(0, 3).map((item: any, idx: number) =>
            `${idx + 1}- ${item?.title} Speed: ${item?.providersInfo?.servicesInfo.internetServices?.speed || 'N/A'}Mbps Price: $${item?.providersInfo?.servicesInfo.internetServices.price || 'N/A'}`).join(', ')}`:
          
          type === 'tv'? `Top ${totalProviderCount} Cable TV Providers in Zip Code ${zipcode}; ${allProviders?.slice(0, 4).map((item: any, idx: number) =>
            `${idx + 1}- ${item?.title} Channels: ${item?.providersInfo?.servicesInfo.tvServices?.speed ||'N/A'}  Price: $${item?.providersInfo?.servicesInfo?.tvServices.price || 'N/A'}`).join(', ')}`:
          
          type === 'landline'? ` Compare Top ${totalProviderCount} Reliable and Affordable Landline Phone Service Providers in Zip Code ${zipcode}; ${allProviders?.slice(0, 3).map((item: any, idx: number) =>
            `${idx + 1}- ${item?.title} is Available in Zip Code ${zipcode} Price: $${item?.providersInfo?.servicesInfo?.landlineServices.price || 'N/A'}`).join(', ')}`:
          
          type === 'internet-tv' &&`Bundle TV, Internet Service Plans & Providers in Zip Code ${zipcode}; ${allProviders?.slice(0, 2).map((item: any, idx: number) =>
            `${idx + 1}- ${item?.title} Channels: ${item?.providersInfo?.servicesInfo?.internetTvBundles?.channels || 'N/A'} Speed: ${item?.providersInfo?.servicesInfo?.internetTvBundles?.speed || 'N/A'}Mbps Price: $${item?.providersInfo?.servicesInfo?.internetTvBundles.price || 'N/A'}`).join(', ')}`
        }
        url={`https://www.cablemovers.net/${type}/zip-${zipcode}`} curl={`https://www.cablemovers.net/${type}/zip-${zipcode}`}
      />
      <section className="min-h-[40vh]  flex items-center bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-col items-center">
            <h1 className="sm:text-5xl text-2xl font-bold text-center max-w-[850px] mx-auto capitalize leading-10">
              {formatType(type)} Providers in <br /> ZIP Code{' '}
              <span className="text-[#ef9831] ">{zipcode}</span>
            </h1>
            <p className="text-xl text-center font-[Roboto] my-5">
              Enter your zip so we can find the best {formatType(type)}{' '}
              Providers in your area:
            </p>
            <button
              className="text-[#ef9831] border hover:bg-[#ef9831] hover:text-white border-[#ef9831] p-3 px-8 rounded-lg"
              onClick={handleModelBox}
            >
              Change Location
            </button>
          </div>
        </div>
      </section>
      <Provider_Nav zipcode={zipcode} />
      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl font-bold  capitalize leading-10">
              {formatType(type)} Providers in{' '}
              <span className="text-[#ef9831] ">{zipcode} </span>
            </h2>
          </div>
          <div className="grid gap-7">
            {allProviders?.map((item: any, idx: number) => {
              console.log('🚀 ~ allProviders?.map ~ item:', item);
              var summaryData = {
                logo: item?.featuredImage?.node?.mediaItemUrl,
                provider: item?.title,
                type: item.serviceTypes?.nodes,
                summery:
                  type === 'internet'? item.providersInfo?.servicesInfo.internetServices
                  : type === 'tv'? item.providersInfo?.servicesInfo?.tvServices
                  : type === 'landline'? item.providersInfo?.servicesInfo?.landlineServices
                  : type === 'internet-tv' &&item.providersInfo?.servicesInfo?.internetTvBundles,
                  mobileNo: item.providersInfo?.proPhone,
                  slug: item.slug,
                 price:
                  type === 'internet'? item.providersInfo?.servicesInfo.internetServices.price
                  : type === 'tv'? item.providersInfo?.servicesInfo?.tvServices.price
                  : type === 'landline'? item.providersInfo?.servicesInfo?.landlineServices.price
                  : type === 'internet-tv' &&item.providersInfo?.servicesInfo?.internetTvBundles.price,
              };

              return (
                <>
                  <ProviderCard
                    count={idx}
                    type={type}
                    item={summaryData}
                    zone={zones}
                    offer={item.providersInfo?.proOffer}
                  />
                </>
              );
            })}
          </div>
          <div>
            <p className="text-sm font-[Roboto] mt-10">
              *DISCLAIMER: Availability vary by service address. not all offers available in all areas, pricing subject to change at any time. Additional taxes, fees, and terms may apply.
            </p>
          </div>
        </div>
      </section>

      {type !== 'internet' && type !== 'tv' && type !== 'internet-tv' && type !== 'landline' && (
      <section className="my-16">
        <div className="container mx-auto px-4">
          <div className="">
            <h2 className="text-2xl font-bold">
              Overview of {formatType(type)} Providers in{' '}<span className="text-[#ef9831] ">{zipcode} </span>
            </h2>
            <p className="text-xl font-[Roboto] mt-5">
              As of the time this page was written, {zipcode} has{' '} {totalProviderCount} {formatType(type)} Providers offering Various types of {formatType(type)} plans and deals to its residents. You'll likely have Options from
              {uniqueServiceType.map((t: any, i: number) => (
                <span key={i}>
                  {' '}
                  <span dangerouslySetInnerHTML={{ __html: t.name }} />{' '}
                  {i < uniqueServiceType.length - 1 && ', '}{' '}
                </span>
              ))}{' '}
              {formatType(type)} Providers.{' '}
              {allProviders?.slice(0, 1).map((item: any, idx: number) => (
                <span key={idx}> {item?.title} </span>
              ))}{' '}
              is the best {formatType(type)} Provider in {zipcode}
            </p>
          </div>
        </div>
      </section>
      )}

      {type !== 'internet' && type !== 'tv' && type !== 'internet-tv' && type !== 'landline' && (
          <section className="my-16">
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <h2 className="text-2xl font-bold  capitalize leading-10">
                  Cheap {formatType(type)} Providers in{' '}
                  <span className="text-[#ef9831] ">{zipcode} </span>
                </h2>
                <p className="text-xl font-[Roboto] mt-5">
                  Affordability is essential when choosing your{' '}
                  {formatType(type)} Provider; in an age where staying connected
                  is more crucial than ever, we bring you budget-friendly{' '}
                  {formatType(type)} options that don't compromise on quality.
                  Below are the cheap {formatType(type)} Providers in {zipcode}.
                </p>
              </div>

              <div
                className={`md:w-full min-w-fit grid grid-cols-2 bg-[#215690]`}
              >
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
              <div className="grid">
                {cheepProviders?.map((item: any, idx: number) => {
                  var summaryData = {
                    logo: item?.featuredImage?.node?.mediaItemUrl,
                    provider: item?.title,
                    type: item.serviceTypes?.nodes,
                    summery:
                      type === 'internet'
                        ? item.providersInfo?.servicesInfo.internetServices
                        : type === 'tv'
                        ? item.providersInfo?.servicesInfo?.tvServices
                        : type === 'landline'
                        ? item.providersInfo?.servicesInfo?.landlineServices
                        : type === 'internet-tv' &&
                          item.providersInfo?.servicesInfo?.internetTvBundles,

                    mobileNo: item.providersInfo?.proPhone,
                    slug: item.slug,
                    price:
                      type === 'internet'
                        ? item.providersInfo?.servicesInfo.internetServices
                            .price
                        : type === 'tv'
                        ? item.providersInfo?.servicesInfo?.tvServices.price
                        : type === 'landline'
                        ? item.providersInfo?.servicesInfo?.landlineServices
                            .price
                        : type === 'internet-tv' &&
                          item.providersInfo?.servicesInfo?.internetTvBundles
                            .price,
                  };

                  return (
                    <>
                      <Cheep_Table_CardProvider
                        key={idx}
                        type={types}
                        item={summaryData}
                        zone={zones}
                        offer={item.providersInfo?.proOffer}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      {type !== 'internet' && type !== 'tv' && type !== 'internet-tv' && type !== 'landline' && (
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-2xl font-bold  capitalize leading-10">
                Fastest {formatType(type)} Providers in{' '}
                <span className="text-[#ef9831] ">{zipcode} </span>
              </h2>
              <p className="text-xl font-[Roboto] mt-5">
                If speed is your top priority consider the following{' '}
                {formatType(type)} Providers in {zipcode}. These providers offer
                impressive download speeds that cater to the needs of heavy
                internet users, streamers, and online gamers.
              </p>
            </div>

            <div
              className={`md:w-full min-w-fit grid  grid-cols-2 bg-[#215690] ${
                type === 'internet-tv' ? ' md:grid-cols-2' : ' md:grid-cols-2'
              } `}
            >
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
                    {type === 'tv'
                      ? 'Channels'
                      : type === 'internet-tv'
                      ? 'Max Download Speed '
                      : 'Max Download Speed '}
                  </h4>
                </div>
              </div>
            </div>
            <div className="grid">
              {FastProviders?.map((item: any, idx: number) => {
                var summaryData = {
                  logo: item?.featuredImage?.node?.mediaItemUrl,
                  provider: item?.title,
                  type: item.serviceTypes?.nodes,
                  summery:
                    type === 'internet'
                      ? item.providersInfo?.servicesInfo.internetServices
                      : type === 'tv'
                      ? item.providersInfo?.servicesInfo?.tvServices
                      : type === 'internet-tv' &&
                        item.providersInfo?.servicesInfo?.internetTvBundles,

                  mobileNo: item.providersInfo?.proPhone,
                  slug: item.slug,
                  price:
                    type === 'internet'
                      ? item.providersInfo?.servicesInfo.internetServices.price
                      : type === 'tv'
                      ? item.providersInfo?.servicesInfo?.tvServices.price
                      : type === 'internet-tv' &&
                        item.providersInfo?.servicesInfo?.internetTvBundles
                          .price,
                };

                return (
                  <>
                    <Fast_Table_CardProvider
                      key={idx}
                      type={types}
                      item={summaryData}
                      zone={zones}
                      offer={item.providersInfo?.proOffer}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {type !== 'internet' && type !== 'tv' && type !== 'internet-tv' && type !== 'landline' && (
          <section className="my-16">
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <h2 className="text-2xl font-bold">
                  Summary of {formatType(type)} Providers in{' '}
                  <span className="text-[#ef9831] ">{zipcode} </span>
                </h2>
                <div className="w-fit hint mx-auto block md:hidden mt-5">
                  Swipe Left to See All →
                </div>
                {type === 'landline' && (
                  <p className="text-xl font-[Roboto] mt-5">
                    Affordability is essential when choosing your landline home
                    phone service provider; in today's world staying connected
                    with loved ones, colleagues and emergency services is more
                    crucial than ever, we bring you budget-friendly options that
                    don't compromise on quality. Below are the cheap landline
                    phone service providers in {zipcode}.
                  </p>
                )}
              </div>
              <div>
                <div className=" w-full lg:max-w-[1200px] mx-auto h-auto mb-6">
                  <div className="w-full h-auto shadow-xl border rounded-t-md rounded-b-md flex md:flex-col flex-row items-stretch">
                    <div
                      className={`md:w-full min-w-[50px] grid ${
                        type === 'landline'
                          ? 'md:grid-cols-8'
                          : type === 'internet-tv'
                          ? 'md:grid-cols-8'
                          : 'md:grid-cols-7'
                      }  grid-cols-1 bg-[#215690] `}
                    >
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

                      {type !== 'landline' && (
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                          <div>
                            <h4 className="md:text-base text-xs text-center text-white mb-2">
                              {type === 'tv'
                                ? 'Channels'
                                : 'Max Download Speed '}
                            </h4>
                          </div>
                        </div>
                      )}

                      {type === 'internet-tv' && (
                        <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center">
                          <div>
                            <h4 className="md:text-base text-xs text-center text-white mb-2">
                              Channels
                            </h4>
                          </div>
                        </div>
                      )}

                      <div className="md:border-r border-r-0 md:border-b-0 border-b grid justify-center md:p-5 p-2 md:h-auto md:col-span-2 h-[120px] items-center">
                        <div>
                          <h4 className="md:text-base text-xs text-center text-white mb-2">
                            Features
                          </h4>
                        </div>
                      </div>
                      <div className="grid justify-center md:p-5 p-2 md:h-auto h-[120px] items-center  md:col-span-2 ">
                        <div>
                          <h4 className="md:text-base text-xs text-center text-white mb-2">
                            Pricing starts from
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row w-full md:overflow-hidden overflow-x-scroll">
                      {allProvidersSummary?.map((item: any, idx: number) => {
                        var summaryData = {
                          provider: item?.title,
                          slug: item?.slug,
                          type: item.serviceTypes?.nodes,
                          mobileNo: item.providersInfo?.proPhone,
                          summery:
                            type === 'internet'
                              ? item.providersInfo?.servicesInfo
                                  .internetServices
                              : type === 'tv'
                              ? item.providersInfo?.servicesInfo?.tvServices
                              : type === 'landline'
                              ? item.providersInfo?.servicesInfo
                                  ?.landlineServices
                              : type === 'internet-tv' &&
                                item.providersInfo?.servicesInfo
                                  ?.internetTvBundles,
                          price:
                            type === 'internet'
                              ? item.providersInfo?.servicesInfo
                                  .internetServices.price
                              : type === 'tv'
                              ? item.providersInfo?.servicesInfo?.tvServices
                                  .price
                              : type === 'landline'
                              ? item.providersInfo?.servicesInfo
                                  ?.landlineServices.price
                              : type === 'internet-tv' &&
                                item.providersInfo?.servicesInfo
                                  ?.internetTvBundles.price,
                        };
                        return (
                          <>
                            <Inter_Service
                              data={summaryData}
                              key={idx}
                              type={type}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      {type !== 'internet' && type !== 'tv' && type !== 'internet-tv' && type !== 'landline' && (
        <section className="my-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-2xl font-bold">
                Types of {formatType(type)} Technologies Available in{' '}
                <span className="text-[#ef9831] ">{zipcode} </span>
              </h2>
              <p className="text-base">
                {zipcode} is well-connected with a diverse range of{' '}
                {formatType(type)} connection types to its residents, each with
                with its own advantages and considerations. These connection
                types include{' '}
                {uniqueServiceType.map((t: any, i: number) => (
                  <span key={i}>
                    {' '}
                    <span dangerouslySetInnerHTML={{ __html: t.name }} /> ,{' '}
                  </span>
                ))}
                . Understanding these options can help you make an informed
                decision based on your needs and location.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
              {uniqueServiceType.map((t: any, i: number) => (
                <Technology_Box
                  icon={t.name}
                  title={t.name}
                  key={i}
                  content={t.description}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {type !== 'internet' && type !== 'tv' && type !== 'internet-tv' && type !== 'landline' && (
          <section className="my-16">
            <div className="container mx-auto px-4 grid gap-10">
              <Faqs_Zip
                city={city}
                type={type}
                state={state}
                zipcode={zipcode}
                cheepProviders={cheepProviders}
                allProviders={allProviders}
                totalProviderCount={totalProviderCount}
              />
            </div>
          </section> 
        )}
    </>
  );
}

export default ZipCodeModule;
