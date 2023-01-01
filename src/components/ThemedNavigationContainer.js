import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';

import {APP_THEMES} from '../constants';
import {selectCustomAppTheme} from '../redux/reducers';

const getThemeFromScheme = scheme => {
  const schemeIsDark = scheme === 'dark';
  const currentPhoneTheme = schemeIsDark ? APP_THEMES.dark : APP_THEMES.light;

  return currentPhoneTheme;
};

const ThemedNavigationContainer = ({children}) => {
  const scheme = useColorScheme();
  const customAppTheme = useSelector(selectCustomAppTheme);
  const currentPhoneTheme = getThemeFromScheme(scheme);

  return (
    <NavigationContainer
      theme={customAppTheme ? customAppTheme : currentPhoneTheme}>
      {children}
    </NavigationContainer>
  );
};

export default ThemedNavigationContainer;
