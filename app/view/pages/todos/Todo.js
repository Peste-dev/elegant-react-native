import React from 'react';
import PropTypes from 'prop-types';
import {IconButton} from 'react-native-paper';

import style from 'view/style';
import {styleJoiner} from 'helpers/util';
import {View, Button, Text} from 'view/components';

const {todosStyle} = style;

const Todo = ({onClick, onDelete, completed, text}) => (
  <View style={todosStyle.todo}>
    <Button
      mode="outlined"
      color="#13a77f"
      onPress={onClick}
      style={todosStyle.todoBtn}>
      <Text
        style={
          !completed
            ? todosStyle.todoText
            : styleJoiner(todosStyle.todoText, todosStyle.todoTextLineThrough)
        }>
        {text}
      </Text>
    </Button>
    <IconButton icon="delete" color="#13a77f" size={16} onPress={onDelete} />
  </View>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
