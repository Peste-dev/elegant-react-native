import * as React from 'react';
import {I18nManager, StyleProp, TextStyle} from 'react-native';

import {Text} from '../index';
// import {withTheme} from '../../core/theming';
import {useTheme} from 'react-native-paper';



const StyledText = (props) => {
  const {colors, fonts} = useTheme();
  const {textColor = colors.text, family = 'regular', style, ...rest} = props;

  const font = fonts[family];
  const writingDirection = I18nManager.isRTL ? 'rtl' : 'ltr';

  return (
    <Text
      {...rest}
      style={[
        {color: textColor, ...font, textAlign: 'left', writingDirection},
        style,
        props.style,
      ]}
    />
  );
};

export default StyledText;
