import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Checkmark = () => {
  const checkmarkImage = require('../assets/checkmark.png');

  return <Image style={styles.image} source={checkmarkImage} />;
};

const styles = StyleSheet.create({
  image: {
    height: 15,
    marginLeft: 'auto',
    tintColor: '#ED4545',
    width: 15,
  },
});

export default Checkmark;
