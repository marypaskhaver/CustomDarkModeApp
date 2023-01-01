import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {DARK_MODE_OVERRIDE_OPTIONS} from '../constants';
import {selectCurrentAppTheme} from '../redux/reducers';
import {setCurrentAppTheme} from '../redux/reducers/themesReducer';
import {getThemeIDFromTheme} from '../utils';
import {Line, RowWithCheckmark} from './';

const ThemeOverrideChoicesList = () => {
  const currentAppTheme = useSelector(selectCurrentAppTheme);
  const initialChosenOverrideThemeID = getThemeIDFromTheme(currentAppTheme);
  const currentTheme = useTheme();
  const dispatch = useDispatch();

  const currentPhoneThemeID = getThemeIDFromTheme(currentTheme);

  const [selectedThemeID, setSelectedThemeID] = useState(
    initialChosenOverrideThemeID
      ? initialChosenOverrideThemeID
      : currentPhoneThemeID,
  );

  const selectAndSaveThemeChoice = themeID => {
    const newThemeDescription = DARK_MODE_OVERRIDE_OPTIONS[themeID];
    setSelectedThemeID(themeID);
    dispatch(setCurrentAppTheme(newThemeDescription.theme));
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
