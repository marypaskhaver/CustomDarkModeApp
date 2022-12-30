import React from 'react';
import {StyleSheet, View} from 'react-native';

const Line = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    height: 1,
    width: '100%',
  },
});

export default Line;
