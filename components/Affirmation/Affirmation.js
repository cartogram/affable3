import React from 'react'
import { View, Text } from 'react-native'

import { AFFIRMATION_FRAGMENT } from './gql'

const Affirmation = ({
  affirmation: {
    text,
    author
  }
}) => (
  <View>
    <Text>{author}</Text>
    <Text>{text}</Text>
  </View>
)

Affirmation.fragments = {
  Affirmation: AFFIRMATION_FRAGMENT
}

export default Affirmation

