import gql from "graphql-tag";

export const PRODUCT_QUERY = gql`
  query Product($rocket_id: String!) {
    product(rocket_id: $rocket_id) {
      rocket_id
      rocket_name
      description
      cost_per_launch
      country
      company
      success_rate_pct
      active
    }
  }
`;
