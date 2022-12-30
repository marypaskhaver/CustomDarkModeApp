import React from 'react';
import {Text} from 'react-native';

import {Provider, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import {selectChosenOverrideThemeID} from './src/redux/reducers/themesReducer';

import ThemedNavigationContainer from './src/components/ThemedNavigationContainer';
import {useTheme} from '@react-navigation/native';
import getStyleSheet from './src/utils/getStylesheet';
import ThemeOverrideChoicesList from './src/components/ThemeChoicesOverrideList';
import Row from './src/components/Row';
import AutomaticDarkModeSwitch from './src/components/AutomaticDarkModeSwitch';
import Card from './src/components/Card';
import BackgroundView from './src/components/BackgroundView';

const AppScreens = () => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);
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

const App = () => {
  return (
    <Provider store={store}>
      <ThemedNavigationContainer>
        <AppScreens />
      </ThemedNavigationContainer>
    </Provider>
  );
};

export default App;
