/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import gaya from './komponen/anggun';
import forYou from './komponen/crazy';

import {
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var kamu = new forYou();
kamu.heart('Aziz Ganteng');

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={viewStyles}>

        <TouchableHighlight style={[buttonStyles.core, buttonStyles.hairlineBorder, buttonStyles.spacer]}>
          <Text>default hairline</Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={()=>console.log('Pressed')}>
          <View>
            <Text>{gaya.Asek}</Text>

          </View>
        </TouchableOpacity>
        <Text>{kamu.nama}</Text>
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
const buttonStyles = StyleSheet.create({
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  primary: {
    backgroundColor: '#60b044',
    borderColor: '#355f27'
  },
  hairlineBorder:{
    borderWidth: StyleSheet.hairlineWidth
  },
  spacer: {
    marginBottom:10
  }
});
