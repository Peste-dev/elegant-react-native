import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import {useNavigation} from 'react-navigation-hooks';
import { useNavigation } from '@react-navigation/core';

import { View, Appbar, TextInput, Button } from 'view/components';

import Todo from './Todo';

import i18n from 'i18n';
import style from 'view/style';

import { selectTodos } from 'store/selectors/todos';
import { addTodo, toggleTodo, deleteTodo } from 'store/reducers/todos';

const Todos = () => {
  const { todosLang } = i18n;
  const { appStyle, todosStyle } = style;

  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const [todoText, setTodoText] = useState('');

  const todos = useSelector(selectTodos);

  const _addTodo = () => {
    if (todoText !== '') {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  const _goBack = () => goBack();
  const _toggleTodo = id => dispatch(toggleTodo(id));
  const _deleteTodo = id => dispatch(deleteTodo(id));

  return (
    <View style={appStyle.container}>
      <Appbar.Header style={appStyle.header}>
        <Appbar.Action onPress={() => _goBack()} icon="arrow-back" />
        <Appbar.Content title={todosLang.title} />
      </Appbar.Header>

      <View style={appStyle.content}>
        <View style={todosStyle.addTodo}>
          <TextInput
            onChangeText={text => setTodoText(text)}
            value={todoText}
            mode="outlined"
            selectionColor="#13a77f"
            style={todosStyle.addTodoText}
          />
          <Button mode="outlined" color="#13a77f" onPress={() => _addTodo()}>
            Add Todo
          </Button>
        </View>

        <View style={todosStyle.todos}>
          <ScrollView scrollEnabled={false}>
            {todos.map(todo => (
              <Todo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onClick={() => _toggleTodo({ id: todo.id })}
                onDelete={() => _deleteTodo({ id: todo.id })}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Todos;
