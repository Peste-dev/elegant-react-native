import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  addTodo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addTodoText: {
    width: 200,
    height: 60,
    marginBottom: 15,
    textAlign: 'center',
  },
  todos: {
    flex: 5,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todo: {flex: 1, flexDirection: 'row', marginVertical: 5},
  todoBtn: {width: 100, height: 48},
  todoText: {lineHeight: 30},
  todoTextLineThrough: {textDecorationLine: 'line-through'},
});

export default styles;
