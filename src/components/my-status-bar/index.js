import React from 'react';
import { View, StatusBar } from 'react-native';
import {
  getStatusBarHeight,
  isIPhoneX,
  isIPhoneXMax,
} from 'react-native-status-bar-height';
import colors from '../../assets/colors';

const STATUSBAR_HEIGHT = getStatusBarHeight(true);

export function getBottomSpace() {
  return isIPhoneX() || isIPhoneXMax() ? 34 : 0;
}

export const MyStatusBar = props => (
  <View
    style={{
      height: STATUSBAR_HEIGHT,
      backgroundColor: colors.gray,
    }}>
    <StatusBar
      translucent
      backgroundColor={colors.gray}
      hidden={false}
      barStyle={'light-content'}
      {...props}
    />
  </View>
);
