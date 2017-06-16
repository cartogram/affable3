import React from 'react'
import { ScrollView, View, Button } from 'react-native'
import { withRouter } from 'react-router-native'
import { compose, graphql } from 'react-apollo'
import { Container, Content, Card, CardItem, Text } from 'native-base';

import { FEED_QUERY } from './gql'
import Affirmation from '../Affirmation'

class Feed extends React.Component {

  render () {
    const {
      FeedQuery
    } = this.props

    if (this.props.FeedQuery.loading) {
      return (<Text>Loading</Text>)
    }

    const affirmationList = FeedQuery.allAffirmations.map(a => (
      <Affirmation
        key={a.id}
        affirmation={a}
      />
    ))

    return (
      <View>
        <ScrollView>
          <View>
            {affirmationList}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default compose(
  graphql(FEED_QUERY, { name: 'FeedQuery' })
)(Feed)
