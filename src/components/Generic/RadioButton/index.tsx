import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';

interface RadioButtonProps {
  selected: boolean;
  outerCircleStyle?: StyleProp<ViewStyle>;
  innerCircleStyle?: StyleProp<ViewStyle>;
}

export const RadioButton: FC<RadioButtonProps> = ({
  selected,
  outerCircleStyle,
  innerCircleStyle,
}) => {
  return (
    <View style={[styles.outerCircleView, outerCircleStyle]}>
      {selected ? (
        <View style={[styles.innerCircleView, innerCircleStyle]} />
      ) : null}
    </View>
  );
};
