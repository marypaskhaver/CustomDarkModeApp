import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import getStyleSheet from '../utils/getStylesheet';

const Line = () => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return <View style={styles.line} />;
};

export default Line;
