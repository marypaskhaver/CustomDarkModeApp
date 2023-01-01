import {createSlice} from '@reduxjs/toolkit';

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    customAppTheme: null,
  },
  reducers: {
    setCustomAppTheme(state, action) {
      state.customAppTheme = action.payload;
    },
  },
});

export const selectCustomAppTheme = state => state.themes.customAppTheme;
export const {setCustomAppTheme} = themesSlice.actions;

export default themesSlice.reducer;
