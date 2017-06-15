import { gql } from 'react-apollo'

import Affirmation from '../Affirmation'

const FEED_QUERY = gql`
  query allAffirmations {
    allAffirmations(orderBy: createdAt_DESC) {
      id
      text
      author
    }
  }
`

export { FEED_QUERY }
