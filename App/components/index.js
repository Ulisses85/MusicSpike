import React, { Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';

import BandCards from './bandcards';
import Homepage from './homepage';

export default class Index extends Component {

  renderScene (route, navigator) {
    var routeId = route.id;

    if (routeId === 'bandcards') {
      return (
        <BandCards
          {...this.props}
          userData={route.userData}
          navigator={navigator} />
        );
    }
    if (routeId === 'homepage') {
      return (
        <Homepage
          {...this.props}
          userData={route.userData}
          navigator={navigator} />
        );
    }
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          style={{flex: 1}}
          ref={'NAV'}
          initialRoute={{id: 'homepage', name: 'homepage'}}
          renderScene={this.renderScene.bind(this)} />
      </View>
    );
  }
}
