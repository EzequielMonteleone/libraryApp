import React from 'react';
import {View, StyleSheet} from 'react-native';

const Separator = () => <View style={styles.separator} />;

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    marginHorizontal: 16,
    backgroundColor: 'gray',
  },
});
