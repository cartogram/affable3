import React from 'react'
import { Container, Content, Text } from 'native-base';


import Feed from '../Feed'
import Footer from '../Footer'
import Header from '../Header'
import Create from '../Create'

class Home extends React.Component {

  render () {
    return (
      <Container>
        <Header />
        <Content>
          <Feed />
        </Content>
        <Create />
        <Footer />
      </Container>
    )
  }

  createPost = () => {
    this.props.router.push('/create');
  }
}

export default Home
