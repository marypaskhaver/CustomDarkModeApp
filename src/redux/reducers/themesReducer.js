import {createSlice} from '@reduxjs/toolkit';

import {APP_THEMES, DARK_MODE_OVERRIDE_OPTIONS} from '../../constants';

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    chosenOverrideThemeID: null,
    currentAppTheme: APP_THEMES.light,
  },
  reducers: {
    setChosenOverrideThemeID(state, action) {
      const updatedThemeID = action.payload;
      state.chosenOverrideThemeID = updatedThemeID;

      const updatedTheme = updatedThemeID
        ? DARK_MODE_OVERRIDE_OPTIONS[updatedThemeID].theme
        : state.currentAppTheme;

      state.currentAppTheme = updatedTheme;
    },
  },
});

export const selectChosenOverrideThemeID = state =>
  state.themes.chosenOverrideThemeID;
export const selectCurrentAppTheme = state => state.themes.currentAppTheme;
export const {setChosenOverrideThemeID} = themesSlice.actions;

export default themesSlice.reducer;
