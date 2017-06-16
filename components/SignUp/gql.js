import { gql } from 'react-apollo'

const createUser = gql`
  mutation ($email: String!, $password: String!, $name: String!) {
    createUser(authProvider: {email: {email: $email, password: $password}}, name: $name) {
      id
    }
  }
`

const signinUser = gql`
  mutation ($email: String!, $password: String!) {
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`

const userQuery = gql`
  query {
    user {
      id
    }
  }
`

export {
  createUser,
  signinUser,
  userQuery
}
