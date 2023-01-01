import {useTheme} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {AdaptiveStatusBar} from './';

const BackgroundView = ({children}) => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return (
    <SafeAreaView style={styles.background}>
      <AdaptiveStatusBar />
      {children}
    </SafeAreaView>
  );
};

const getStyleSheet = colors => {
  return StyleSheet.create({
    background: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: colors.background,
    },
  });
};

export default BackgroundView;
