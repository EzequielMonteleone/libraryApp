import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  outerCircleView: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircleView: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  item: {flexDirection: 'row', alignItems: 'center'},
  titleRadioButton: {fontSize: 10, marginRight: 4},
});

export default styles;
