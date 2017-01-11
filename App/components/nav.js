import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Nav extends Component {

  bandlist () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.toHome}>
          <Image source={require('../images/pineapple.jpg')} resizeMode='contain' style={{width: 100, height: 30}} />
        </TouchableOpacity>
      </View>
    );
  }
  home () {
    return (
      <View style={{marginLeft: 60}}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={{fontSize: 20, color: 'green'}}>PINEAPPLE - VIEW BANDS</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render () {
    if (this.props.type === 'homepage') {
      return (
        <View>{this.home()}</View>
        );
    } else {
      return (
        <View>{this.bandlist()}</View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  }
});
