import {createSlice} from '@reduxjs/toolkit';

import {APP_THEMES} from '../../constants';

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    currentAppTheme: APP_THEMES.light,
  },
  reducers: {
    setCurrentAppTheme(state, action) {
      state.currentAppTheme = action.payload;
    },
  },
});

export const selectCurrentAppTheme = state => state.themes.currentAppTheme;
export const {setCurrentAppTheme} = themesSlice.actions;

export default themesSlice.reducer;
