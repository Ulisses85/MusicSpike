import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import Nav from './nav';

export default class Homepage extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Image source={require('../images/pineapple.jpg')} resizeMode='stretch' style={{height: 450, width: 300, marginLeft: 50}} />
        <View style={styles.row}>
          <Nav type='homepage' onPress={() => this.props.navigator.replace({id: 'bandcards'})}>
            <Text>PINEAPPLE</Text></Nav>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  row: {
    flexDirection: 'row',
    margin: 15,
    marginBottom: 0,
    marginTop: 5,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333'
  },
  commons: {
    padding: 15
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  description: {
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    marginTop: 10,
    marginBottom: 10
  },
  buttonSmall: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420
  }
});
