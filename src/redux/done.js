import React from 'react'
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from 'react-router-dom';

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
  color: red; /* 텍스트 색상 추가 */
`
const TodoComplete = styled.button`
  background-color: #fff;
  border : 2px solid green;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width:50%;
  color: green; /* 텍스트 색상 추가 */
`

function Done({todos ,deleteTodo,  handleToggleTodo}) {
  const dispatch = useDispatch();


  return (
    <div>
      <ListWrapper>
        
        {todos.map((todo) => {
          if(todo.completed){
          return (
            <TodoContainer   key={todo.id}>
            <div
              key={todo.id}
              
            >
               <Link to={`/todo/${todo.id}`}>상세</Link>
              <Htwo key={todo.id}>{todo.title}</Htwo>&nbsp;
              <Div>{todo.content}</Div>
              <Buttonset>
              <TodoDelete onClick={() => dispatch(deleteTodo(todo.id))}>
                삭제
              </TodoDelete>
              <TodoComplete onClick={() => handleToggleTodo(todo.id)}>취소</TodoComplete>
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

export default Done