import React, { Component } from 'react'
import { Text, TouchableOpacity, View, AsyncStorage } from 'react-native'
import Modal from 'react-native-modal'
import styled from 'styled-components/native'
import { ApolloClient, gql, graphql, withApollo } from 'react-apollo'

import SignUp from '../SignUp'

const StyledUser = styled.View`
  position: absolute;
  right: 16px;
  bottom: 16px;
  left: auto;
`
const StyledLogoutButton = styled.TouchableOpacity`

`

class User extends Component {
  _logout = () => {
    AsyncStorage.removeItem('graphcoolToken', () => {
      console.log('logged out')
      console.log(this.props.client)
    })
  }
  render () {
    return (
      <StyledUser >
        <StyledLogoutButton onPress={this._logout}>
          <Text>Log Out</Text>
        </StyledLogoutButton>
      </StyledUser>
    )
  }
}

export default User
