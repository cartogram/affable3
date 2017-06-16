import React from 'react'
import styled from 'styled-components/native'
import theme from '../../styles'
import { Container, Content, InputGroup, Button, Text, Input, Icon } from 'native-base';


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
     await this.props.createPostMutation({
       variables: {text, author}
     })
     this.props.onComplete()
   }
  render () {
    return (
      <StyledCreate>
        <StyledTitle>Create</StyledTitle>
        <InputGroup>
          <Input
            placeholder='Type a text...'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            multiline = {true}
            numberOfLines = {10}
          />
        </InputGroup>
        <InputGroup>
          <Input
            placeholder='Type a text...'
            onChangeText={(author) => this.setState({author})}
            value={this.state.author}
          />
        </InputGroup>
        <StyledButtonBar>
        <Button
          onPress={this.createAffirmation}
          title="Learn More"
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

export default Create
