import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Home from './components/Home'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/affable'
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    AsyncStorage.getItem('graphcoolToken')
      .then((token) => {
        req.options.headers.authorization = `Bearer ${token}`
        next()
      })
      .catch((error) => {
        console.error(error)
        next()
      })
  }
}])

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
})

console.log(AsyncStorage.getItem('graphcoolToken'))
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
