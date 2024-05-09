import React, {FunctionComponent} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  Text,
} from 'react-native';
import {MainContainer} from './MainContainer';

interface LoadingIndicatorProps extends ActivityIndicatorProps {
  messageLoading?: string;
}

export const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = ({
  messageLoading = 'Loading...',
}) => {
  return (
    <MainContainer style={styles.container}>
      <ActivityIndicator testID="indicatorLoading" size="large" />
      <Text>{messageLoading}</Text>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
});
