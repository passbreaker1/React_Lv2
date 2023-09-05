import React,{ useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./redux/modules/todos";
import styled from "styled-components";
import Working from "./working"; 
import Done from "./redux/done";

// import {BrowserRouter } from 'react-router-dom';
// import MyRouter from "./shared/Router";

 import { BrowserRouter , Route, Routes } from 'react-router-dom';
 import TodoDetail from "./TodoDetail";

const Layout = styled.div`
  margin : 0 auto;
  max-width: 1200px;
  min-width:800px;
`

const Righ = styled.div`
  align-items:center;
  border: 1px solid #ddd;
  display: flex;
  height:50px;
  justify-content: space-between;
  padding: 0 20px;
`
const Rig = styled.span`
  text-align:right;
`
const Addform = styled.form`
  align-items: center;
  display: flex;
  gap: 20px;
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;

`
const Inputgroup = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`

const ListContainer = styled.div`
  padding: 0 24px;
`

const AddInput = styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
`
const AddButton = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`

const Htwo = styled.h2`
    display: block;
    font-size:1.5em;
    margin-block-start: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`



const App = () => {
  const dispatch = useDispatch();
 const todos = useSelector(( state ) => state.todos.todoList);
//console.log(todos,123456789) //여기가 data다
  const [todo, setTodo] = useState({
    id: 1,
    title: "",
    content: "",
    completed: false,
  });
  const [idCounter, setIdCounter] = useState(2);

  const handleInputChange = (e) => {
    //console.log(e,e.target,e.target.name,1234567)
    const { name, value } =e.target;
    setTodo((pre) => ({
      ...pre,
      [name]:value,
    }))
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id:idCounter,
      title: todo.title,
      content: todo.content,
      completed: false, 
    };
    setIdCounter(idCounter + 1);

   // setTodo([...todos, newTodo]);
    setTodo({
      id: idCounter, 
      title: "",
      content: "",
      completed: false,
    });
    
    
    dispatch(addTodo(newTodo));
   
  }

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id)); 
  };


   const workingList = todos.filter((item) => !item.Completed);
   const doneList = todos.filter((item) => item.Completed);
  // console.log(workingList, doneList,123)
  return (
    <>
   
   <BrowserRouter>
    <Layout>
        <Righ>
          My Todo List
          <Rig>React</Rig>
        </Righ>
       
        <Addform>
        <label>제목</label>
        <Inputgroup>
        <AddInput
          type="text"
          name="title"
          value={todo.title}
          
          onChange={handleInputChange}
        />

        <label>내용</label>
        <AddInput
          type="text"
          name="content"
          value={todo.content}
       
          onChange={handleInputChange}
        />
        </Inputgroup>

        <AddButton  onClick={handleAddTodo}>
          
          Todo 추가하기
        </AddButton>

        </Addform>

        <ListContainer>
     
        <Routes>
        {/* <MyRouter /> */}
        
          <Route path="todo/:id" element={<TodoDetail />} />
      
          </Routes> 
        <Htwo>Working 🔥!</Htwo>
        <Working workingList={workingList} todos={todos} deleteTodo={deleteTodo}  handleToggleTodo= {handleToggleTodo}/>
        
        <Htwo>Done 🎉!</Htwo>
        <Done doneList={doneList} todos={todos} deleteTodo={deleteTodo}  handleToggleTodo= {handleToggleTodo}/>
        
        </ListContainer>
    </Layout>
   
    
    </BrowserRouter>
    
    </>
  );
};

export default App;