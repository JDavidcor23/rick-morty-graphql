import {gql} from "@apollo/client";

export const queryCharacter = gql`
query ($characterID: ID!) {
  character(id: $characterID) {
    id
    name
    status
    species
    type
    gender
    origin {
      name
    }
    location {
      name
    }
    created
    image
  }
}
`;