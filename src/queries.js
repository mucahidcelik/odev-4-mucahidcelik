import { gql } from '@apollo/client';

export const GET_CITY_BY_ID = gql`
query GetCityById($id: [String!]){
  getCityById(id: $id, config:{units: metric}){
    name
    weather{
      summary{
        title
        description
        icon
      }
      temperature{
        actual
        feelsLike
        min
        max
      }
    }
  }
}
`;