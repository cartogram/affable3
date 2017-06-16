import React from 'react'
import { Card, CardItem, Text  } from 'native-base';
import styled from 'styled-components/native'

// const Text = styled.Text`
//   display: block;
// `

// const TextBlock = styled.View`
//   display: block;
// `

import { AFFIRMATION_FRAGMENT } from './gql'

const Affirmation = ({
  affirmation: {
    text,
    author
  }
}) => (
  <Card>
    <CardItem >
      <Text note>{author}: </Text>
      <Text>{text}</Text>
    </CardItem>
  </Card>
)

Affirmation.fragments = {
  Affirmation: AFFIRMATION_FRAGMENT
}

export default Affirmation

