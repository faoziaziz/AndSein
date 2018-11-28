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
//import BoxModelDemo from './komponen/BoxModelDemo';

import {
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View} from 'react-native';

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
      <View style={styles.main}>
        <Text>Aplikasi sampah</Text>
        <Text style={styles.content}>gue </Text>
        <Text style={styles.content}>ganteng </Text>
        <Text style={styles.content}>beud</Text>
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
  main:{
    flex: 1,
    paddingVertical:20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  content:{
    padding: 10,
    margin: 10,
    backgroundColor: '#ef4c',
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  },
  item: {
    backgroundColor: 'lightgoldenrodyellow',
    borderWidth: 1,
    borderColor: 'goldenrod',
    height: 150,
    width: 1
  }
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

const Bold=({children})=> <Text
style={boldTextStyles.text}>{children}</Text>;

Bold.propTypes={
  children: React.PropTypes.node.isRequired
};

const boldTextStyles=StyleSheet.create({
  text: {
    fontWeight: '600'
  }
});
