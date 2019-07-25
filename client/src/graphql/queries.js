import gql from "graphql-tag";

export default {
  FETCH_PRODUCTS: gql`
    {
      products {
        _id
        name
        description
      }
    }
  `,
  IS_LOGGED_IN: gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `,
  FETCH_PRODUCT: gql`
    query FetchProduct($id: ID!) {
      product(_id: $id) {
        name
        description
        weight
        cost
      }
    }
  `
}