import {useTheme} from '@react-navigation/native';

import React from 'react';
import {Text} from 'react-native';
import getStyleSheet from '../utils/getStylesheet';
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

export default RowWithCheckmark;
