import { gql } from '@apollo/client';

export const AllPosts = gql`
  query GET_POSTS {
    posts(first: 10000) {
      edges {
        node {
          title
          content
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const GET_ZIPCODE = gql`
query GET_ZIPCODE($title: String = "") {
  zones(where: {title: $title}) {
    nodes {
      title
      cities {
        nodes {
          name
          slug
        }
      }
      states {
        nodes {
          name
          slug
        }
      }
    }
  }
}
`;

export const GET_ALL_PROVIDERS = gql`
  query GET_ALL_PROVIDERS {
    allProviders(
      first: 100
      where: { orderby: { field: MENU_ORDER, order: ASC } }
    ) {
      nodes {
        title
        slug
        id
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        providersInfo {
          proPhone
          proPrice
          proSpeed
          features
        }
        databaseId
      }
    }
  }
`;

export const GET_PROVIDERS = gql`
  query GET_PROVIDERS($terms: [String] = "", $value: String = "") {
    allProviders(
      where: {
        orderby: { field: MENU_ORDER, order: ASC }
        metaQuery: {
          metaArray: { key: "internet_services", value: $value, compare: LIKE }
        }
        taxQuery: {
          relation: AND
          taxArray: { taxonomy: PROVIDERTYPE, terms: $terms, field: SLUG }
        }
      }
      first: 100
    ) {
      nodes {
        title
        slug
        serviceTypes {
          nodes {
            name
            description
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        providersInfo {
          proPhone
          proPrice
          proSpeed
          proOffer
          features
          featuresBlock {
            title
            icon
            details
          }
          servicesInfo {
            internetServices {
              features
              speed
              price
              summaryFeatures
              summarySpeed
            }
            landlineServices {
              features
              speed
              price
              summaryFeatures
              summarySpeed
            }
            internetTvBundles {
              channels
              features
              speed
              price
              summaryChannel
              summaryFeatures
              summarySpeed
            }
            tvServices {
              features
              speed
              price
              summaryFeatures
              summarySpeed
            }
          }
        }
        terms {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const GET_ZONE = gql`
  query GetZone($ztitle: String!) {
    zones(where: { title: $ztitle }) {
      nodes {
        title

        cities {
          nodes {
            name
          }
        }
        states {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export const SINGLE_Provider = gql`
  query SINGLE_Provider($slug: ID!) {
    singleProvider(id: $slug, idType: URI) {
      title
      slug
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      providersInfo {
        proPhone
        proPrice
        proSpeed
        features
        bannerImage {
          mediaItemUrl
        }

        servicesInfo {
          internetServices {
            summarySpeed
          }
        }

        internetAndPhoneBundlesShort
        internetAndTvBundlesShort
        internetPlansShort
        internetTvPhoneBundlesShort
        tvPlansShort
        block {
          content
          heading
        }
        cons
        pros
        internetPlans {
          package
          price
          priceInfo
          speedInfo
          speeds
        }
        internetPlansWirelessHomes {
          package
          price
          priceInfo
          speedInfo
          speeds
        }
        internetPlansFusion {
          package
          price
          priceInfo
          speedInfo
          speeds
        }
        internetTvPhoneBundles {
          channels
          channelsInfo
          package
          price
          priceInfo
          speedInfo
          speeds
          voice
          voiceInfo
        }
        internetAndMobileBundles {
          package
          price
          priceInfo
          speedInfo
          speeds
          voice
          voiceInfo
        }
        internetAndTvBundles {
          speeds
          speedInfo
          priceInfo
          price
          package
          channelsInfo
          channels
        }
        internetAndPhoneBundles {
          voiceInfo
          voice
          speeds
          speedInfo
          priceInfo
          price
          package
        }
        tvPlans {
          speeds
          speedInfo
          priceInfo
          price
          package
        }
        tvPlansLatino {
          speeds
          speedInfo
          priceInfo
          price
          package
        }
        faqS {
          answer
          question
        }
        featuresBlock {
          title
          details
          icon
        }
      }
    }
  }
`;

export const CITES = gql`
  query CITES {
    zones(
      where: {
        taxQuery: {
          taxArray: { taxonomy: CITY, terms: "ketchikan", operator: EXISTS }
        }
      }
    ) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export const ZoneByCity = gql`
  query ZoneByCity {
    zones {
      nodes {
        title
      }
    }
  }
`;

export const ALLZoneByCity = gql`
  query ALLZoneByCity($city: [String] = "") {
    zones(
      where: {
        taxQuery: {
          taxArray: { terms: $city, taxonomy: CITY, operator: EXISTS }
        }
      }
      first: 100
    ) {
      nodes {
        title
      }
    }
  }
`;

export const ALLZoneByZode = gql`
  query CITES_by_STATE($providerIds: [ID!]!) {
    zones(where: { in: $providerIds }) {
      nodes {
        title
      }
    }
  }
`;

export const CITES_by_STATE = gql`
  query CITES_by_STATE(
    $state: [String] = ""
    $after: String = ""
    $before: String = ""
  ) {
    states(where: { slug: $state }, first: 50) {
      nodes {
        zones(first: 50, after: $after, before: $before) {
          nodes {
            id
            title
            cities {
              nodes {
                name
                slug
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }
  }
`;

export const GET_ZONE_BY_CITY = gql`
  query GET_ZONE_BY_CITY {
    zones(
      where: {
        taxQuery: {
          taxArray: { taxonomy: CITY, terms: "ketchikan", operator: EXISTS }
        }
      }
    ) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export const GET_POST_SLUG = gql`
  query GET_POST_SLUG($slug: String = "") {
    postBy(slug: $slug) {
      title
      slug
      content
      excerpt
      blogSeo {
        seoDescription
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;

export const CityByStateQuery = gql`
  query CITES_by_STATE(
    $state: [String] = ""
    $after: String = ""
    $before: String = ""
  ) {
    states(where: { slug: $state }, first: 50) {
      nodes {
        zones(first: 50, after: $after, before: $before) {
          nodes {
            id
            title
            cities {
              nodes {
                name
                slug
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
      }
    }
  }
`;

export const GET_PROVIDERS_CITY = gql`
  query GET_PROVIDERS_CITY($city: [String] = "") {
    zones(
      where: {
        taxQuery: { taxArray: { taxonomy: CITY, field: SLUG, terms: $city } }
      }
      first: 1000
    ) {
      nodes {
        title
      }
    }
  }
`;



export const SingleZone = gql`
query GET_PROVIDERS($id: ID = "") {
  zone(id: $id, idType: SLUG) {
    id
  }
}
`