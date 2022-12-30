import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = ({children}) => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return <View style={styles.card}>{children}</View>;
};

const getStyleSheet = colors =>
  StyleSheet.create({
    card: {
      padding: 16,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: 'gray',
      shadowOpacity: 0.1,
      shadowOffset: {height: 5},
      width: 300,
      backgroundColor: colors.background,
    },
  });

export default Card;
