import {createSlice} from '@reduxjs/toolkit';

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    currentAppTheme: null,
  },
  reducers: {
    setCustomAppTheme(state, action) {
      state.currentAppTheme = action.payload;
    },
  },
});

export const selectCurrentAppTheme = state => state.themes.currentAppTheme;
export const {setCustomAppTheme} = themesSlice.actions;

export default themesSlice.reducer;
