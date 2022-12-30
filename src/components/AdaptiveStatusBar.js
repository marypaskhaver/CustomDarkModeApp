import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';

const AdaptiveStatusBar = () => {
  const {dark} = useTheme();

  return (
    <StatusBar
      barStyle={dark ? 'light-content' : 'dark-content'}
      hidden={false}
      translucent={true}
      backgroundColor="transparent"
    />
  );
};

export default AdaptiveStatusBar;
