import React from 'react';
import {Provider} from 'react-redux';

import AppScreens from './src/components/AppScreens';
import ThemedNavigationContainer from './src/components/ThemedNavigationContainer';
import {store} from './src/redux/store';

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
