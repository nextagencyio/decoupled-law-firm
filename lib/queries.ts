import { gql } from '@apollo/client'

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        statsItems {
          ... on ParagraphStatItem { id number label }
        }
        featuredPracticesTitle
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_PRACTICE_AREAS = gql`
  query GetPracticeAreas($first: Int = 20) {
    nodePracticeAreas(first: $first, sortKey: TITLE) {
      nodes {
        id title path
        ... on NodePracticeArea {
          body { processed summary }
          image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
        }
      }
    }
  }
`

export const GET_ATTORNEYS = gql`
  query GetAttorneys($first: Int = 50) {
    nodeAttorneys(first: $first, sortKey: TITLE) {
      nodes {
        id title path
        ... on NodeAttorney {
          body { processed }
          practiceArea { ... on TermInterface { id name } }
          role { ... on TermInterface { id name } }
          email phone office
          photo { url alt width height variations(styles: [MEDIUM]) { name url width height } }
          education { processed }
          barAdmissions
        }
      }
    }
  }
`

export const GET_CASE_STUDIES = gql`
  query GetCaseStudies($first: Int = 20) {
    nodeCaseStudies(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path
        ... on NodeCaseStudy {
          body { processed summary }
          practiceArea { ... on TermInterface { id name } }
          outcome
          image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
        }
      }
    }
  }
`

export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id title path
        created { timestamp }
        ... on NodeNews {
          body { processed summary }
          image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          category { ... on TermInterface { id name } }
          featured
        }
      }
    }
  }
`

export const GET_FEATURED_PRACTICE_AREAS = gql`
  query GetFeaturedPracticeAreas {
    nodePracticeAreas(first: 4, sortKey: TITLE) {
      nodes {
        id title path
        ... on NodePracticeArea {
          body { summary }
          image { url alt variations(styles: [MEDIUM]) { name url width height } }
        }
      }
    }
  }
`

export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        id title path
        created { timestamp }
        ... on NodeNews {
          body { summary }
          image { url alt variations(styles: [MEDIUM]) { name url width height } }
          category { ... on TermInterface { id name } }
          featured
        }
      }
    }
  }
`

export const GET_FEATURED_CASE_STUDIES = gql`
  query GetFeaturedCaseStudies {
    nodeCaseStudies(first: 3, sortKey: CREATED_AT) {
      nodes {
        id title path
        ... on NodeCaseStudy {
          practiceArea { ... on TermInterface { id name } }
          outcome
        }
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage { id title body { processed } }
          ... on NodePracticeArea {
            id title path body { processed }
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
          ... on NodeAttorney {
            id title path body { processed }
            practiceArea { ... on TermInterface { id name } }
            role { ... on TermInterface { id name } }
            email phone office barAdmissions
            photo { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
            education { processed }
          }
          ... on NodeCaseStudy {
            id title path body { processed }
            practiceArea { ... on TermInterface { id name } }
            outcome
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
          }
          ... on NodeNews {
            id title path created { timestamp }
            body { processed }
            image { url alt width height variations(styles: [LARGE, MEDIUM]) { name url width height } }
            category { ... on TermInterface { id name } }
            featured
          }
          ... on NodeHomepage {
            id title heroTitle heroSubtitle
            heroDescription { processed }
            statsItems { ... on ParagraphStatItem { id number label } }
            featuredPracticesTitle
            ctaTitle ctaDescription { processed } ctaPrimary ctaSecondary
          }
        }
      }
    }
  }
`
