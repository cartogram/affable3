import { gql } from 'react-apollo'

const AFFRIMATION_FRAGMENT = gql`
  fragment Affirmation on Affirmation {
    id
  }
`

export { AFFRIMATION_FRAGMENT }
