import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../styles'

const Brand = styled.View`
  background: white;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.Text`
  color: ${theme.colors.primary};
  font-weight: bold;
`

class Header extends React.Component {

  render () {
    return (
      <Brand>
        <Logo>Affable</Logo>
      </Brand>
    )
  }
}

export default Header
