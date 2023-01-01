import React from 'react';
import {Provider} from 'react-redux';

import Screen from './src/components/Screen';
import ThemedNavigationContainer from './src/components/ThemedNavigationContainer';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemedNavigationContainer>
        <Screen />
      </ThemedNavigationContainer>
    </Provider>
  );
};

export default App;
