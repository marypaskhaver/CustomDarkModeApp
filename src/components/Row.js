import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import getStyleSheet from '../utils/getStylesheet';

const Row = ({children}) => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return <View style={styles.row}>{children}</View>;
};

export default Row;
