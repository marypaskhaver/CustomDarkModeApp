import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {DARK_MODE_OVERRIDE_OPTIONS} from '../constants';
import {setCustomAppTheme} from '../redux/reducers/themesReducer';
import {getThemeIDFromTheme} from '../utils';
import {Line, RowWithCheckmark} from '.';

const CustomThemesList = () => {
  const dispatch = useDispatch();

  const currentAppTheme = useTheme();
  const currentAppThemeID = getThemeIDFromTheme(currentAppTheme);

  const [selectedThemeID, setSelectedThemeID] = useState(currentAppThemeID);

  useEffect(() => {
    const customThemeDescription = DARK_MODE_OVERRIDE_OPTIONS[selectedThemeID];
    dispatch(setCustomAppTheme(customThemeDescription.theme));
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

export default CustomThemesList;
