import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../../assets/colors';
import { IndicatorStyles } from './styles';

export const IndicatorBase = ({ style, visible, ...other }) => {
  if (!visible) {
    return <View />;
  }

  return (
    <ActivityIndicator
      style={[IndicatorStyles.container, style]}
      {...other}
      color={colors.gray}
    />
  );
};
