import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import Nav from './nav';
import SwipeCards from 'react-native-swipe-cards';

var band1 = require('../images/band1.jpg');
var band2 = require('../images/band2.jpg');
var band3 = require('../images/band3.jpg');
var band4 = require('../images/band4.jpg');
var band5 = require('../images/band5.jpg');
var band6 = require('../images/band6.jpg');

const Cards = [{
  'id': 1,
  'band_name': 'Frank Carter and the Rattlesnakes',
  'image': band1
}, {
  'id': 2,
  'band_name': 'Creeper',
  'image': band2
}, {
  'id': 3,
  'band_name': 'Ballista',
  'image': band3
}, {
  'id': 4,
  'band_name': 'Black Peaks',
  'image': band4
}, {
  'id': 5,
  'band_name': 'Milk Teeth',
  'image': band5
}, {
  'id': 6,
  'band_name': 'Architects',
  'image': band6
}];

export default class BandCards extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cards: Cards
    };
  }
  Card (x) {
    return (
      <View style={styles.card}>
        <Image source={x.image} resizeMode='contain' style={{width: 350, height: 350}} />
        <View style={{width: 350, height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', margin: 15, marginTop: 25}} >
            <Text style={{fontSize: 20, fontWeight: '300', color: '#444'}}>{x.band_name} </Text>
          </View>
          <View style={{flexDirection: 'row'}} />
        </View>
      </View>
    );
  }
  handleYup (card) {
    console.log(`A Match Made in Heaven ${card.text}`);
  }

  handleNope (card) {
    console.log(`Highway to Hell ${card.text}`);
  }
  loop () {
    console.warn('restart');
  }
  yup () {
    console.log(this.refs['swiper']);
    this.refs['swiper']._goToNextCard();
  }
  nope () {
    console.log(this.refs['swiper']);
    this.refs['swiper']._goToNextCard();
  }

  render () {
    return (
      <View style={styles.container}>
        <Nav chat={() => this.props.navigator.replace({id: 'message'})} toHome={() => this.props.navigator.replace({id: 'homepage'})} />
        <SwipeCards
          ref={'swiper'}
          cards={this.state.cards}
          containerStyle={{ backgroundColor: '#f7f7f7', alignItems: 'center', margin: 20 }}
          renderCard={(cardData) => this.Card(cardData)}
          handleYup={this.handleYup}
          handleNope={this.handleNope} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
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
