import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {selectChosenOverrideThemeID} from '../redux/reducers/themesReducer';
import AutomaticDarkModeSwitch from './AutomaticDarkModeSwitch';
import BackgroundView from './BackgroundView';
import Card from './Card';
import Row from './Row';
import ThemeOverrideChoicesList from './ThemeChoicesOverrideList';

const AppScreens = () => {
  const chosenOverrideThemeID = useSelector(selectChosenOverrideThemeID);

  return (
    <BackgroundView>
      <Card>
        <Row>
          <Text style={styles.grayText}>Automatic</Text>
          <AutomaticDarkModeSwitch />
        </Row>
        {chosenOverrideThemeID ? <ThemeOverrideChoicesList /> : null}
      </Card>
    </BackgroundView>
  );
};

const styles = StyleSheet.create({
  grayText: {
    color: '#8E8E93',
    fontSize: 16,
  },
});

export default AppScreens;