import React, {FC} from 'react';
import {StyleProp, View, ViewStyle, Pressable, Text} from 'react-native';
import styles from './styles';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  text?: string;
  customStyles?: StyleProp<ViewStyle>;
  outerCircleStyle?: StyleProp<ViewStyle>;
  innerCircleStyle?: StyleProp<ViewStyle>;
}

export const RadioButton: FC<RadioButtonProps> = ({
  selected,
  onPress,
  text,
  customStyles,
  outerCircleStyle,
  innerCircleStyle,
}) => {
  return (
    <Pressable style={[styles.item, customStyles]} onPress={onPress}>
      {text && <Text style={styles.titleRadioButton}>{text}</Text>}
      <View style={[styles.outerCircleView, outerCircleStyle]}>
        {selected ? (
          <View style={[styles.innerCircleView, innerCircleStyle]} />
        ) : null}
      </View>
    </Pressable>
  );
};
