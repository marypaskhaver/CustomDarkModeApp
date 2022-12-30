import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import APP_THEMES from '../constants/appThemes';
import {
  selectChosenOverrideThemeID,
  selectCurrentAppTheme,
} from '../redux/reducers/themesReducer';

const getThemeFromScheme = scheme => {
  const schemeIsDark = scheme === 'dark';
  const currentPhoneTheme = schemeIsDark ? APP_THEMES.dark : APP_THEMES.light;

  return currentPhoneTheme;
};

const ThemedNavigationContainer = ({children}) => {
  const scheme = useColorScheme();
  const currentAppTheme = useSelector(selectCurrentAppTheme);
  const chosenOverrideThemeID = useSelector(selectChosenOverrideThemeID);
  const currentPhoneTheme = getThemeFromScheme(scheme);

  // - If chosenOverrideThemeID exists, that means auto dark mode is DISABLED,
  //    so set the theme to the user's currentAppTheme.
  // - If chosenOverrideThemeID DOES NOT exist, auto dark mode is ENABLED,
  //    so set the theme to the user's currentPhoneTheme.

  return (
    <NavigationContainer
      theme={chosenOverrideThemeID ? currentAppTheme : currentPhoneTheme}>
      {children}
    </NavigationContainer>
  );
};

export default ThemedNavigationContainer;
