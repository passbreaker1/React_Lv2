// 액션 타입
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO"; 

// 액션 크리에이터
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, payload: id, };
};

// 초기값
const initialState = {
  todoList: [
    {
      id: 1,
      title: "리액트는 재밌어요.",
      completed: false, 
    },
  ],
};

// 리듀서 = 함수다. stat.todos?변경전 전체인가봐 , !== 같지않아야 화면에 남고 같으면 없어지지, 
const todosReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO: // toggleTodo 액션 처리 추가
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed } // toggle completed 상태
            : todo
        ),
      };

    default:
      return state;
  }
};

export default todosReducer;