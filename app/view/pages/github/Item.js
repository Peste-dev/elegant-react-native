import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, Image} from 'view/components';

import style from 'view/style';

const Item = ({title, owner}) => {
  const {appStyle, githubStyle} = style;

  return (
    <TouchableOpacity style={githubStyle.renderItemTouchable}>
      <Image
        source={{uri: owner.avatar_url}}
        style={githubStyle.renderItemTouchableImage}
      />

      <Text style={appStyle.whiteFont}>{title}</Text>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  owner: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;
