export const ADD_TODO = "todos/ADD_TODO";
export const TOGGLE_TODO = "todos/TOGGLE_TODO";
export const DELETE_TODO = "todos/DELETE_TODO";
export const GET_TODO_BY_ID = "todos/GET_TODO_BY_ID";
//액션생성함수 정의
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};
export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
//기본값
const initialState = {
  todoList: [
    {
      id: 0,
      title: "리액트 강의보기",
      content: "챕터 1부터 챕터 12까지 학습",
      isComplete: false,
    },
  ],
  todo: {
    id: 0,
    title: "",
    content: "",
    isComplete: false,
  },
};

//리듀서만들기
const todos = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return {
        todoList: [...state.todoList.filter((todo) => todo.id !== action.id)],
      };
    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todoList.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.todo],
      };
    case TOGGLE_TODO:
      const _todo = state.todoList.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todoList: _todo,
      };
    default:
      return state;
  }
};

export default todos;
