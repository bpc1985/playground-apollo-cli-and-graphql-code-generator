import { gql } from 'apollo-boost';

export default gql`
  query Countries {
    countries {
      code
      name
      emoji
      continent {
        name
      }
      currency
      languages {
        name
        native
      }
    }
  }
`;