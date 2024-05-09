import React, {FunctionComponent, PropsWithChildren} from 'react';
import {SafeAreaView, StyleProp, ViewStyle, StyleSheet} from 'react-native';

interface MainContainerProps {
  style?: StyleProp<ViewStyle>;
}

export const MainContainer: FunctionComponent<
  PropsWithChildren<MainContainerProps>
> = props => {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
