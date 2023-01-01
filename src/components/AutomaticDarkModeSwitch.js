import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  selectChosenOverrideThemeID,
  setChosenOverrideThemeID,
} from '../redux/reducers';
import {getThemeIDFromTheme} from '../utils';

const AutomaticDarkModeSwitch = () => {
  const initialEnabledness = useSelector(selectChosenOverrideThemeID) === null;
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(initialEnabledness);
  const currentTheme = useTheme();
  const themeFromStoreID = getThemeIDFromTheme(currentTheme);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);

    if (!isEnabled) {
      // Switch was switched on; enable automatic dark mode
      dispatch(setChosenOverrideThemeID(null));
    } else {
      // Switch was turned off; disable automatic dark mode
      dispatch(setChosenOverrideThemeID(themeFromStoreID));
    }
  };

  return (
    <Switch
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.switch}
    />
  );
};

const styles = StyleSheet.create({
  switch: {
    marginLeft: 'auto',
  },
});

export default AutomaticDarkModeSwitch;
