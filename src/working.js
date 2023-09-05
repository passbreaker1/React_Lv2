import React from 'react'
import { useDispatch } from "react-redux";

import styled from "styled-components";
 import { Link } from 'react-router-dom';
//  import {  deleteTodo, toggleTodo } from "./redux/modules/todos";

const ListWrapper = styled.div`
  display :flex;
  flex-wrap: wrap;
  gap: 12px;
`
const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`

const Htwo = styled.h2`
    display: block;
    font-size:1.5em;
    margin-block-start: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`
const Div = styled.div``

const Buttonset = styled.div`
  display:flex;
  gap: 10px;
  margin-top :24px;
`
const TodoDelete = styled.button`
  background-color: #fff;
  border : 2px solid red;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width:50%;
`
const TodoComplete = styled.button`
  background-color: #fff;
  border : 2px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width:50%;
`
//todos가 data다 여기가 works다
function Working({workingList,todos ,deleteTodo,  handleToggleTodo}) {
  const dispatch = useDispatch();
  //console.log(workingList.comleted)
  return (
    <div>
    
      <ListWrapper>
       
        {todos.map((todo) => {
         // console.log(todo,todo.completed,123)
          if(!todo.completed){
          return (
            <TodoContainer key={todo.id}> 
            <div key={todo.id}>
              <div>

              {/* <button>상세</button> */}
              <Link to={`/todo/${todo.id}`}>상세</Link>

              <Htwo>{todo.title}</Htwo>
                &nbsp;<Div>{todo.content}</Div>
              </div>
                <Buttonset> 
                <TodoDelete onClick={() => dispatch(deleteTodo(todo.id))}>
                삭제
                </TodoDelete>
              
                <TodoComplete onClick={() => handleToggleTodo(todo.id)}>완료</TodoComplete>
              </Buttonset>
            </div>
            </TodoContainer>
          );
          
          }
          return null;
        })}
        
      </ListWrapper>
    </div>
  )
}

export default Working