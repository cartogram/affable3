import React, { Component } from 'react'
import { AsyncStorage, Text, TouchableOpacity, View, Switch } from 'react-native'
import { Button, Form, Item, Input,Label} from 'native-base';
import Modal from 'react-native-modal'
import styled from 'styled-components/native'
import { compose, ApolloClient, gql, graphql, withApollo } from 'react-apollo'

import {
  createUser,
  signinUser,
  userQuery
} from './gql'

const StyleSignUp = styled.View``

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    emailSubscription: false,
  }

   createUser = () => {
    const {email, password, name} = this.state
    console.log(this.state)
    this.props.createUser({variables: {email, password, name }})
      .then((response) => {
        this.props.signinUser({variables: {email, password}})
          .then((response) => {
            AsyncStorage.setItem('graphcoolToken', response.data.signinUser.token)
            console.log(this.props.client)
          }).catch((e) => {
            console.error(e)
          })
      }).catch((e) => {
        console.error(e)
      })
  }

  render () {
    const {email, password, name, emailSubscription} = this.state
    return (
      <StyleSignUp >
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
            />
          </Item>
          <Item floatingLabel >
            <Label>Password</Label>
            <Input
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
           <Item floatingLabel >
            <Label>Name</Label>
            <Input
              value={this.state.name}
              onChangeText={(name) => this.setState({name})}
            />
          </Item>
          <Button bordered onPress={this.createUser}>
            <Text>Login</Text>
          </Button>
        </Form>
      </StyleSignUp>
    )
  }
}

export default compose(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' }}),
  graphql(signinUser, {name: 'signinUser'}),
  graphql(createUser, { name: 'createUser' })
)(SignUp)
