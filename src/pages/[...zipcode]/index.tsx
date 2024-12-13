import {
  CITES_by_STATE,
  GET_ALL_PROVIDERS,
  GET_PROVIDERS,
  GET_PROVIDERS_CITY,
  GET_ZIPCODE,
  SingleZone,
} from "@/config/query";
import { GetServerSideProps } from "next";
import { Get_State_by_Multi_Zipcode } from "../../utils/get_states_by_multizipcode";
import ZipCodeModule from "@/components/zipcode";
import CitiesModule from "@/components/cities";
import StateModule from "@/components/state";
import apolloClient from "@/config/client";

export default function Providers({
  ZipData,
  StateData,
  CityData,
  zipcode,
  allcities,
  state,
  type,
  allProviderslist
}: any) {
  console.log("🚀 ~ allProviders:", allProviderslist)
  // city pages
  if (CityData?.providers?.length > 0) {
    return (
      <CitiesModule
        city={allcities}
        my_city=""
        allProviders={CityData.providers}
        CityData={CityData}
        type="internet"
        allProviderslist={allProviderslist}
      />
    );
  }
  // state pages
  if (StateData?.providers?.length > 0) {
    return (
      <StateModule
        state={state}
        allcities={allcities}
        allProviders={StateData.providers}
        type="internet"
      />
    );
  }
  // zipcode pages
  return (
    <ZipCodeModule
      zipcode={zipcode}
      city="{zoneData[0]?.cities?.nodes[0]?.name}"
      state="{zoneData[0]?.states?.nodes[0]?.name} "
      allProviders={ZipData}
      zones=""
      type={type}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  var query_state = query?.zipcode?.[0] || "";
  var query_zipcode = query?.zipcode?.[1]?.replace("zip-", "");

  if (
    (query_state === "internet" ||
    query_state === "tv" ||
    query_state === "internet-tv" ||
    query_state === "landline" )
  ) {
    // check if only state has
    if ( query?.zipcode?.length === 2 &&
        ["internet", "tv", "internet-tv", "landline"].includes(query_state) &&
        !query?.zipcode?.[1].includes("zip-")
    ) {
      var state =  query?.zipcode?.[1];
      try {
        const response_city = await fetch(
          `https://cblproject.cablemovers.net/wp-json/custom/v1/area-zones?state=${state}`
        );
        const providers_state_data = await response_city.json();
        if (providers_state_data?.data?.status === 404) {
          return {
            notFound: true,
          };
        }
        const providers_data = await Get_State_by_Multi_Zipcode(
          providers_state_data
        );
        const [cities]: any = await Promise.all([
          apolloClient.query({
            query: CITES_by_STATE,
            variables: { state: state },
          }),
        ]);
        var allcities = cities.data.states.nodes;
        if (providers_data?.providers?.length > 0) {
          return {
            props: {
              StateData: providers_data,
              allcities,
              state: state,
            },
          };
        }
      } catch (error) {
        throw new Error("Failed!");
      }
    }

    // if city has bcz (query?.zipcode) has length 3  *** For City Module ***
    if (
      query?.zipcode?.length === 3 ||
      (query?.zipcode?.length === 2 &&
        query_state.length === 2 &&
        !query?.zipcode?.[1].includes("zip-"))
    ) {
      var cityParmas =
        query?.zipcode?.length === 2
          ? query?.zipcode?.[1]
          : query?.zipcode?.[2];
      
          const response = await apolloClient.query({
            query: GET_ALL_PROVIDERS,
          });

      const [cityproviders] = await Promise.all([
        apolloClient.query({
          query: GET_PROVIDERS_CITY,
          variables: { city: cityParmas },
        }),
      ]);
      const providers_city_data = cityproviders.data.zones.nodes;
      if (providers_city_data?.length <= 0) {
        return {
          notFound: true,
        };
      }
      const providers_data = await Get_State_by_Multi_Zipcode(
        providers_city_data
      );
      return {
        props: {
          CityData: providers_data,
          allProviderslist: response?.data?.allProviders?.nodes
        },
      };
    }
  }

  // check zone exist
  const zoneResponse = await apolloClient.query({
    query: SingleZone,
    variables: {
      id: query_zipcode,
    },
  });
  const isZone = zoneResponse.data.zone;
  if (!isZone) {
    return {
      notFound: true,
    };
  }

  const [providers] = await Promise.all([
    apolloClient.query({
      query: GET_PROVIDERS,
      variables: { terms: query_state, value: query_zipcode },
    }),
    // apolloClient.query({ query: GET_ZIPCODE, variables: { title: query_zipcode } })
  ]);
  const allProviders = providers.data.allProviders.nodes;
  //const zoneData = zone_data.data.zones.nodes;

  // Redirect To Page Not Found
  if (allProviders?.length <= 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      ZipData: allProviders,
      zipcode: query_zipcode,
      type: query_state,
      //  zoneData
    },
  };
};
