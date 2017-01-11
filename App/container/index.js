
import React, { Component } from 'react';
import { View } from 'react-native';

import Components from '../components/index';

export default class Index extends Component {
  componentDidMount () {
  }
  render () {
    return (
      <View
        style={{ flex: 1 }}>
        <Components />
      </View>);
  }
}

const initialState = {
  navColor: 'whitesmoke',
  navStyle: {
    backgroundColor: 'whitesmoke',
    color: 'whitesmoke',
    padding: 20
  }
};

export function App (state = initialState, action = {}) {
  return state;
}
