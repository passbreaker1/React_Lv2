import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const DetailItem = styled.p`
  margin-bottom: 10px;
`;

const BackButton = styled.button`
    padding: .5em .75em;
    background-color: #1c1c1e99;
    border-radius: .375rem; 
    color:white; 
    border:none; 
`
//여기가work다
function TodoDetail() {
  const { id:idString } = useParams();
  //console.log({ id:idString },111 )
  
   
   const todos = useSelector((state) => state.todos.todoList);
   
   const id = Number(idString);
   
   
   const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
        return <div>이전으로</div>;
    }
    
     return (
        <Container>
            <Title>📝Todo Detail</Title>
            <DetailItem><strong>ID:</strong> {todo.id}</DetailItem>
            <DetailItem><strong>Title:</strong> {todo.title}</DetailItem>
            <DetailItem><strong>Description:</strong> {todo.content}</DetailItem>
            <Link to="/"><BackButton>Go back</BackButton></Link>
        </Container>
     );
}

export default TodoDetail;



