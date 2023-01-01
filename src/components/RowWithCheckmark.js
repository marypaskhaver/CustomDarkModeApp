import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {BulletPoint, Checkmark, Row} from './';

const RowWithCheckmark = ({textToDisplay, isChecked}) => {
  const {colors} = useTheme();
  const styles = getStyleSheet(colors);

  return (
    <Row>
      <BulletPoint />
      <Text style={styles.standardText}>{textToDisplay}</Text>
      {isChecked ? <Checkmark /> : null}
    </Row>
  );
};

const getStyleSheet = colors =>
  StyleSheet.create({
    standardText: {
      color: colors.text,
      fontSize: 16,
    },
  });

export default RowWithCheckmark;
