import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 4,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  column: {flex: 0.33, paddingHorizontal: 4},
  title: {
    fontSize: 10,
    color: 'grey',
  },
  value: {
    fontSize: 12,
    color: 'black',
  },
});

export default styles;
