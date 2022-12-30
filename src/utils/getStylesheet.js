import {StyleSheet} from 'react-native';

const getStyleSheet = colors => {
  return StyleSheet.create({
    bulletPoint: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.text,
      marginRight: 12,
      marginLeft: 16,
    },
    button: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: colors.text,
      padding: 12,
    },
    card: {
      padding: 16,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: 'gray',
      shadowOpacity: 0.1,
      shadowOffset: {height: 5},
      width: 300,
      backgroundColor: colors.background,
    },
    grayText: {
      color: '#8E8E93',
      fontSize: 16,
    },
    image: {
      marginLeft: 'auto',
      width: 15,
      height: 15,
      tintColor: '#ED4545',
    },
    line: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
      height: 1,
      width: '100%',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 44,
    },
    standardText: {
      fontSize: 16,
      color: colors.text,
    },
  });
};

export default getStyleSheet;
