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
      backgroundColor: colors.text,
      borderRadius: 4,
      height: 8,
      marginLeft: 16,
      marginRight: 12,
      width: 8,
    },
  });
};

export default BulletPoint;
