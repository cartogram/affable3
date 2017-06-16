import { gql } from 'react-apollo'

const CREATE_AFFIRMATION_MUTATION = gql`
  mutation createAffirmation($text: String!, $author: String!) {
    createAffirmation(text: $text, author: $author) {
      id
      text
      author
    }
  }
`
export { CREATE_AFFIRMATION_MUTATION }
