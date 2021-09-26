import gql from "graphql-tag";

export const PRODUCT_LIST_QUERY = gql`
  query ProductList {
    product_list {
      rocket_id
      rocket_name
      rocket_type
      description
      cost_per_launch
      country
      company
      active
    }
  }
`;
