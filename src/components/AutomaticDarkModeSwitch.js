import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {selectCurrentAppTheme, setCurrentAppTheme} from '../redux/reducers';

const AutomaticDarkModeSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(initialEnabledness);

  const dispatch = useDispatch();
  const initialEnabledness = useSelector(selectCurrentAppTheme) === null;

  const currentTheme = useTheme();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);

    if (!isEnabled) {
      // Switch was switched on; enable automatic dark mode
      dispatch(setCurrentAppTheme(null));
    } else {
      // Switch was turned off; disable automatic dark mode
      dispatch(setCurrentAppTheme(currentTheme));
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
