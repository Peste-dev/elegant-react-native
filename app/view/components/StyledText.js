import React from 'react';
import {I18nManager} from 'react-native';

import {useTheme, Text} from 'react-native-paper';

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
      ]}
    />
  );
};

export default React.memo(StyledText);