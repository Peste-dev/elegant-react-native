import {v4 as uuidv4} from 'uuid';
import {createSlice} from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const {id, text} = action.payload;
        state.push({id, text, completed: false});
      },
      prepare(text) {
        const rand = uuidv4();

        return {payload: {text, id: rand}};
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload.id),
  },
});

export const {addTodo, toggleTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;
