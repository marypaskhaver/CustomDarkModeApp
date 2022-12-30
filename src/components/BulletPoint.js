import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View} from 'react-native';
import getStyleSheet from '../utils/getStylesheet';

const BulletPoint = () => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return <View style={styles.bulletPoint} />;
};

export default BulletPoint;
