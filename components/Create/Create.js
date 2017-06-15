import React from 'react'
import styled from 'styled-components/native'
import theme from '../../styles'

const StyledTitle = styled.Text`
  color: red
`

const StyledCreate = styled.View`
  display: flex;
  flex-direction: column;
`

const FormField = styled.TextInput`
  display: flex;
  height: 80px;
  border: 1px solid;
`

const StyledButton = styled.Button`
  display: flex;
  height: 80px;
  font-size: ${theme.sizes.base}px
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
        <FormField
          placeholder='Type a text...'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline = {true}
          numberOfLines = {4}
        />
        <FormField
          placeholder='Type a text...'
          onChangeText={(author) => this.setState({author})}
          value={this.state.author}
        />
        <StyledButton
          onPress={this.createAffirmation}
          title="Learn More"
          color={theme.colors.primary}
          accessibilityLabel="Learn more about this purple button"
        />
      </StyledCreate>
    )
  }
}

export default Create
