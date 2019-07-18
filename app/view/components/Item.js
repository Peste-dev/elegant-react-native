import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'view/components'

import style from 'view/style'

const Item = ({id, title}) => {
  const { appStyle, homeStyle } = style

  return (
    <TouchableOpacity style={homeStyle.renderItemTouchable} >
      <Text style={appStyle.whiteFont}>{`${id} - ${title}`}</Text>
    </TouchableOpacity>
  )
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Item
