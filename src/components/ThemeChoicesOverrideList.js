import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {DARK_MODE_OVERRIDE_OPTIONS} from '../constants';
import {selectCustomAppTheme} from '../redux/reducers';
import {setCustomAppTheme} from '../redux/reducers/themesReducer';
import {getThemeIDFromTheme} from '../utils';
import {Line, RowWithCheckmark} from './';

const ThemeOverrideChoicesList = () => {
  const dispatch = useDispatch();

  const customAppTheme = useSelector(selectCustomAppTheme);
  const customAppThemeID = getThemeIDFromTheme(customAppTheme);

  const currentAppTheme = useTheme();
  const currentAppThemeID = getThemeIDFromTheme(currentAppTheme);

  const [selectedThemeID, setSelectedThemeID] = useState(
    customAppThemeID ? customAppThemeID : currentAppThemeID,
  );

  useEffect(() => {
    const newThemeDescription = DARK_MODE_OVERRIDE_OPTIONS[selectedThemeID];
    dispatch(setCustomAppTheme(newThemeDescription.theme));
  }, [dispatch, selectedThemeID]);

  return (
    <FlatList
      data={Object.values(DARK_MODE_OVERRIDE_OPTIONS)}
      extraData={selectedThemeID}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => setSelectedThemeID(item.id)}>
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
