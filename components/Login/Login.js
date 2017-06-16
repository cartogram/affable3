import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import styled from 'styled-components/native'
import { ApolloClient, gql, graphql, withApollo } from 'react-apollo'

import SignUp from '../SignUp'

const StyledModal = styled.View`
  background: white;
  padding: 16px;
`
const StyledLoginButton = styled.TouchableOpacity`

`

const StyledLogin = styled.View`
  position: absolute;
  right: 16px;
  bottom: 16px;
  left: auto;
`

class Login extends Component {
  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render () {
    return (
      <StyledLogin >
        <StyledLoginButton onPress={this._showModal}>
          <Text>Log In</Text>
        </StyledLoginButton>
        <Modal isVisible={this.state.isModalVisible}>
          <StyledModal style={{ flex: 1 }}>
            <TouchableOpacity onPress={this._hideModal}>
              <Text>Close</Text>
            </TouchableOpacity>
            <SignUp />
          </StyledModal>
        </Modal>
      </StyledLogin>
    )
  }
}

const createUserMutation = gql`
  mutation createUser($idToken: String!, $name: String) {
    createUser(
      authProvider: {
        auth0: {
          idToken: $idToken
        }
      },
      name: $name
    ){
      id
    }
  }`

export default withApollo(graphql(createUserMutation, { name: 'createUser' })(Login))
