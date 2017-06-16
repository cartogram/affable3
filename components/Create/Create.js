import React from 'react'
import styled from 'styled-components/native'
import theme from '../../styles'
import { compose, graphql } from 'react-apollo'
import { Container, Content, InputGroup, Button, Text, Input, Icon } from 'native-base';

import { CREATE_AFFIRMATION_MUTATION } from './gql'
import { FEED_QUERY } from '../Feed/gql'


const StyledTitle = styled.Text`
  text-align: center;
`
const StyledButtonText = styled.Text`
  text-align: center;
  font-size: 12px;
  color:${theme.colors.native};
`

const StyledCreate = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
  background: white;
  border-top-width: 1px;
  border-top-color: #eee;

`

const StyledButtonBar = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
`

const FormField = styled.TextInput`
  display: flex;
  height: 80px;
  border: 1px solid;
`

const StyledButton = styled.Button`
  display: flex;
  height: 80px;
`
class Create extends React.Component {
   state = {
    text: '',
    author: '',
  }
  createAffirmation = async () => {
     const {text, author} = this.state
     await this.props.createAffirmationMutation({
       variables: {text, author}
     })
    this.setState((prevState, props) => ({
      text: '',
      author: ''
    }))

     if(typeof this.props.onComplete === 'function') {
       this.props.onComplete()
     }
   }
  render () {
    return (
      <StyledCreate>
        <StyledTitle>Create a new affirmation</StyledTitle>
        <InputGroup>
          <Input
            placeholder='Type the text...'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            multiline = {true}
            numberOfLines = {10}
          />
        </InputGroup>
        <InputGroup>
          <Input
            placeholder='Add an author.'
            onChangeText={(author) => this.setState({author})}
            value={this.state.author}
          />
        </InputGroup>
        <StyledButtonBar>
        <Button
          onPress={this.createAffirmation}
          bordered
          small
        >
          <StyledButtonText>Create</StyledButtonText>
        </Button>
        </StyledButtonBar>
      </StyledCreate>
    )
  }
}

export default compose(
  graphql(CREATE_AFFIRMATION_MUTATION, {
    name: 'createAffirmationMutation',
    options: {
    refetchQueries: [
      'allAffirmations',
    ],
  },
  })
)(Create)
