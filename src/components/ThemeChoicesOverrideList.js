import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import DARK_MODE_OVERRIDE_OPTIONS from '../constants/darkModeOverrideOptions';
import {
  selectChosenOverrideThemeID,
  setChosenOverrideThemeID,
} from '../redux/reducers/themesReducer';
import getThemeIDFromTheme from '../utils/getThemeIDFromTheme';
import Line from './Line';
import RowWithCheckmark from './RowWithCheckmark';

const ThemeOverrideChoicesList = () => {
  const dispatch = useDispatch();

  const initialChosenOverrideThemeID = useSelector(selectChosenOverrideThemeID);
  const currentTheme = useTheme();

  const currentPhoneThemeID = getThemeIDFromTheme(currentTheme);

  const [selectedThemeID, setSelectedThemeID] = useState(
    initialChosenOverrideThemeID
      ? initialChosenOverrideThemeID
      : currentPhoneThemeID,
  );

  const selectAndSaveThemeChoice = themeID => {
    setSelectedThemeID(themeID);
    dispatch(setChosenOverrideThemeID(themeID));
  };

  return (
    <FlatList
      data={Object.values(DARK_MODE_OVERRIDE_OPTIONS)}
      extraData={selectedThemeID}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => selectAndSaveThemeChoice(item.id)}>
            <RowWithCheckmark
              textToDisplay={item.themeName}
              isChecked={item.id === selectedThemeID}
            />
          </TouchableOpacity>
        );
      }}
      ItemSeparatorComponent={() => <Line />}
    />
  );
};

export default ThemeOverrideChoicesList;
