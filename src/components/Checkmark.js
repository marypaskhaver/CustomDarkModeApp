import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Checkmark = () => {
  const checkmarkImage = require('../assets/checkmark.png');

  return <Image style={styles.image} source={checkmarkImage} />;
};

const styles = StyleSheet.create({
  image: {
    marginLeft: 'auto',
    width: 15,
    height: 15,
    tintColor: '#ED4545',
  },
});

export default Checkmark;
