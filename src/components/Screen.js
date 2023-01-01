import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {selectCustomAppTheme} from '../redux/reducers';
import {
  AutomaticDarkModeSwitch,
  BackgroundView,
  Card,
  Row,
  ThemeOverrideChoicesList,
} from '.';

const Screen = () => {
  const customAppTheme = useSelector(selectCustomAppTheme);

  return (
    <BackgroundView>
      <Card>
        <Row>
          <Text style={styles.grayText}>Automatic</Text>
          <AutomaticDarkModeSwitch />
        </Row>
        {customAppTheme ? <ThemeOverrideChoicesList /> : null}
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

export default Screen;
