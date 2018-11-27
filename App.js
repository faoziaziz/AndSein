/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableHighlight, Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={viewStyles}>
        <Text style={textStyles}>and Dasein</Text>
        <TouchableHighlight style={[btn, btnPrimary]}>
          <Text>Assekk</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const viewStyles={
  backgroundColor: 'blue',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};

const textStyles={
  color: '#fff',
  fontSize: 22
};
const btn={
  borderStyle: 'solid',
  borderColor: '#d5d5d5',
  borderWidth: 1,
  backgroundColor: '#eee',
  borderRadius: 3,
  padding: 3,
  paddingLeft: 5,
  paddingRight: 5
};

const btnPrimary={
  backgroundColor: '#60b044',
  borderColor: '#5ca941'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
