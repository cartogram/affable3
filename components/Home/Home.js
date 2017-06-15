import React from 'react'
import { ScrollView, View, Text, Button } from 'react-native'
import { withRouter } from 'react-router-native'

import Feed from '../Feed'
import Footer from '../Footer'
import Header from '../Header'
import Create from '../Create'

class Home extends React.Component {

  render () {
    return (
      <View>
        <Header />
        <Feed />
        <Create />
        <Footer />
      </View>
    )
  }

  createPost = () => {
    this.props.router.push('/create');
  }
}

export default Home
