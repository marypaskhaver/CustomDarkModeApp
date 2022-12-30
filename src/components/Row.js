import React from 'react';
import {StyleSheet, View} from 'react-native';

const Row = ({children}) => {
  return <View style={styles.row}>{children}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
});

export default Row;
