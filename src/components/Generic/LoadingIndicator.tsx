import React, {FunctionComponent} from 'react';
import {ActivityIndicator, ActivityIndicatorProps, Text} from 'react-native';
import {MainContainer} from './MainContainer';

interface LoadingIndicatorProps extends ActivityIndicatorProps {
  messageLoading?: string;
}

export const LoadingIndicator: FunctionComponent<LoadingIndicatorProps> = ({
  messageLoading = 'Loading...',
}) => {
  return (
    <MainContainer>
      <ActivityIndicator testID="indicatorLoading" size="large" />
      <Text>{messageLoading}</Text>
    </MainContainer>
  );
};
