import { gql } from 'react-apollo'

const USER_QUERY = gql`
  query {
    user {
      id
      name
      email
    }
  }
`

export {
  USER_QUERY
}
