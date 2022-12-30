import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const BulletPoint = () => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return <View style={styles.bulletPoint} />;
};

const getStyleSheet = colors => {
  return StyleSheet.create({
    bulletPoint: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.text,
      marginRight: 12,
      marginLeft: 16,
    },
  });
};

export default BulletPoint;
