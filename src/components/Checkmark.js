import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import getStyleSheet from '../utils/getStylesheet';

const Checkmark = () => {
  const checkmarkImage = require('../assets/checkmark.png');
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return <Image style={styles.image} source={checkmarkImage} />;
};

export default Checkmark;
