import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {margin: 16},
  row: {marginVertical: 8, flexDirection: 'row'},
  item: {flex: 0.5},
  input: {borderWidth: 1, padding: 4, borderRadius: 8, marginVertical: 8},
  changeButton: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  changeButtonText: {color: 'white'},
  minChangeContainer: {marginTop: 16},
});

export default styles;
