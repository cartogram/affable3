import React from 'react'
import { Footer } from 'native-base';
import styled from 'styled-components/native'

const Text = styled.Text`
  font-size: 12px;
`

const StyledFooter = styled.View`
  display: flex;
  justify-content: center;
  align-content: center;
`

class AppFooter extends React.Component {

  render () {
    return (
      <Footer >
        <StyledFooter>
          <Text>Made with love at Shopify</Text>
        </StyledFooter>
      </Footer>
    )
  }
}

export default AppFooter
