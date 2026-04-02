// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredAnimalsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Adoptable Animals
export const GET_ANIMALS = gql`
  query GetAnimals($first: Int = 20) {
    nodeAnimals(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeAnimal {
          body {
            processed
            summary
          }
          species {
            ... on TermSpecies {
              id
              name
            }
          }
          breed
          age
          gender
          adoptionFee
          animalStatus {
            ... on TermAnimalStatus {
              id
              name
            }
          }
          photo {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
          goodWithKids
          goodWithPets
        }
      }
    }
  }
`

export const GET_ANIMAL_BY_PATH = gql`
  query GetAnimalByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeAnimal {
            id
            title
            path
            body {
              processed
            }
            species {
              ... on TermSpecies {
                id
                name
              }
            }
            breed
            age
            gender
            adoptionFee
            animalStatus {
              ... on TermAnimalStatus {
                id
                name
              }
            }
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            goodWithKids
            goodWithPets
          }
        }
      }
    }
  }
`

// Events
export const GET_EVENTS = gql`
  query GetEvents($first: Int = 20) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          body {
            processed
            summary
          }
          eventDate {
            timestamp
          }
          endDate {
            timestamp
          }
          location
          eventType {
            ... on TermEventType {
              id
              name
            }
          }
          registrationUrl
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermEventType {
                id
                name
              }
            }
            registrationUrl
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Volunteer Opportunities
export const GET_VOLUNTEER_OPPORTUNITIES = gql`
  query GetVolunteerOpportunities($first: Int = 20) {
    nodeVolunteerOpportunities(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeVolunteerOpportunity {
          body {
            processed
            summary
          }
          commitment
          location
          skillsNeeded
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_VOLUNTEER_OPPORTUNITY_BY_PATH = gql`
  query GetVolunteerOpportunityByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeVolunteerOpportunity {
            id
            title
            path
            body {
              processed
            }
            commitment
            location
            skillsNeeded
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermNewsCategory {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            category {
              ... on TermNewsCategory {
                id
                name
              }
            }
            featured
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeAnimal {
            id
            title
            path
            body {
              processed
            }
            species {
              ... on TermSpecies {
                id
                name
              }
            }
            breed
            age
            gender
            adoptionFee
            animalStatus {
              ... on TermAnimalStatus {
                id
                name
              }
            }
            photo {
              url
              alt
              width
              height
            }
            goodWithKids
            goodWithPets
          }
          ... on NodeVolunteerOpportunity {
            id
            title
            path
            body {
              processed
            }
            commitment
            location
            skillsNeeded
          }
          ... on NodeEvent {
            id
            title
            path
            body {
              processed
            }
            eventDate {
              timestamp
            }
            endDate {
              timestamp
            }
            location
            eventType {
              ... on TermEventType {
                id
                name
              }
            }
            registrationUrl
          }
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            category {
              ... on TermNewsCategory {
                id
                name
              }
            }
            featured
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredAnimalsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured animals for homepage (limit to 3)
export const GET_FEATURED_ANIMALS = gql`
  query GetFeaturedAnimals {
    nodeAnimals(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeAnimal {
          species {
            ... on TermSpecies {
              id
              name
            }
          }
          breed
          age
          gender
          adoptionFee
          animalStatus {
            ... on TermAnimalStatus {
              id
              name
            }
          }
          photo {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
          goodWithKids
          goodWithPets
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            summary
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermNewsCategory {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

// Upcoming events for homepage
export const GET_UPCOMING_EVENTS = gql`
  query GetUpcomingEvents {
    nodeEvents(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeEvent {
          eventDate {
            timestamp
          }
          location
          eventType {
            ... on TermEventType {
              id
              name
            }
          }
        }
      }
    }
  }
`
