import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Switch} from 'react-native';
import {useDispatch} from 'react-redux';

import {setCustomAppTheme} from '../redux/reducers';

const AutomaticDarkModeSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const dispatch = useDispatch();
  const currentAppTheme = useTheme();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  useEffect(() => {
    if (isEnabled) {
      // Switch was switched on; enable automatic dark mode
      dispatch(setCustomAppTheme(null));
    } else {
      // Switch was turned off; disable automatic dark mode
      dispatch(setCustomAppTheme(currentAppTheme));
    }
  }, [currentAppTheme, dispatch, isEnabled]);

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
