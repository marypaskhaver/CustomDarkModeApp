import {configureStore} from '@reduxjs/toolkit';

import themesReducer from './reducers/themesReducer';

export const store = configureStore({
  reducer: {
    themes: themesReducer,
  },
});
