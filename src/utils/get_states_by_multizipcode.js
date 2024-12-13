export const Get_State_by_Multi_Zipcode = async (providers_city_data) => {
  const zoneTitlesQ = providers_city_data?.map((zone) => zone.title);
  const resultStringQ = zoneTitlesQ?.join(',');
  const All_zones_listQ = resultStringQ?.replace(/["\[\]]/g, '');
  const postData = {
    internet_services: All_zones_listQ,
  };
  const response_data = await fetch(
    'https://cblproject.cablemovers.net/wp-json/custom/v1/providers',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }
  );
  const providers_data = await response_data.json();
  return providers_data;
};
