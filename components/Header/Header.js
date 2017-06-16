import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { compose, graphql } from 'react-apollo'
import theme from '../../styles'

import Login from '../Login'
import User from '../User'

import {
  USER_QUERY
} from './gql'

const StyledHeader = styled.View`
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
`
const Logo = styled.Text`
  color: ${theme.colors.primary};
  font-weight: bold;
  position: absolute;
  left: 16px;
  bottom: 16px;
`

class Header extends React.Component {

  render () {
    if(this.props.User.loading) return null
    return (
      <StyledHeader>
        <Logo>Affable</Logo>
        { !this.props.User.user && <Login /> }
        { this.props.User.user && <User /> }
      </StyledHeader>
    )
  }
}

export default compose(
  graphql(USER_QUERY, { name: 'User' })
)(Header)
