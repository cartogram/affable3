import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Home from './components/Home'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/affable'
})

const client = new ApolloClient({
  networkInterface
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
