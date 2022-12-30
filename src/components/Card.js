import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import getStyleSheet from '../utils/getStylesheet';

const Card = ({children}) => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return <View style={styles.card}>{children}</View>;
};

export default Card;
