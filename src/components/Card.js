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
      backgroundColor: colors.background,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 16,
      shadowOffset: {height: 5},
      shadowOpacity: 0.1,
      width: 300,
    },
  });

export default Card;
