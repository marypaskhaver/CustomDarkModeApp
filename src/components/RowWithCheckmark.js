import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import BulletPoint from './BulletPoint';
import Checkmark from './Checkmark';
import Row from './Row';

const RowWithCheckmark = ({textToDisplay, isChecked}) => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return (
    <Row>
      <BulletPoint />
      <Text style={styles.standardText}>{textToDisplay}</Text>
      {isChecked && <Checkmark />}
    </Row>
  );
};

const getStyleSheet = colors =>
  StyleSheet.create({
    standardText: {
      fontSize: 16,
      color: colors.text,
    },
  });

export default RowWithCheckmark;
