import React from 'react';
import ParsedText from 'react-native-parsed-text';
import { TextStyles } from './styles';

export const BaseText = ({ children, style, ...other }) => {
  return (
    <ParsedText style={[TextStyles.labelStyle, style]} {...other}>
      {children}
    </ParsedText>
  );
};
