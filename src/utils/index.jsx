import { icons } from '@/const/icons';
export const getIcon = (iconname) => {
  const filter_icon = icons.find((i) => i.name === iconname);
  return filter_icon;
};

export const getUniqueCities = (cities) => {
  const uniqueIds = new Set();
  const uniqueCities = cities?.filter((item) => {
    if (uniqueIds.has(item.cities.nodes[0].name)) {
      return false;
    }
    uniqueIds.add(item.cities.nodes[0].name);
    return true;
  });
  return uniqueCities;
};

export const generateArrayForBreadcrum = (data) => {
  const parts = data.replace(/^\/|\/$/g, '').split('/');
  const result = parts.reduce((acc, part, index) => {
    const slug = index > 0 ? `${acc[index - 1].slug}/${part}` : part;
    acc.push({ name: part.charAt(0).toUpperCase() + part.slice(1), slug });
    return acc;
  }, []);

  return result;
};

export function formatType(type) {
  if (type === 'internet') {
    return 'Internet';
  } else if (type === 'tv') {
    return 'TV';
  } else if (type === 'internet-tv') {
    return 'TV and Internet';
  } else if (type === 'landline') {
    return 'Landline';
  } else {
    return type;
  }
}
