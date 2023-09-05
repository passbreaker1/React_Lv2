import React from 'react';
import {BrowserRouter,  Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home';

import TodoDetail from '../TodoDetail';

// import { useSelector } from "react-redux";

const MyRouter = () => {
  
 // const todos = useSelector((state) => state.todos.todoList);
  
  // const todo = App.todos
 // console.log(todos,987)
  return (
    
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/working" element={<Working />} /> */}
        <Route path="TodoDetail/:id" element={<TodoDetail />} />

      </Routes>
   </BrowserRouter>


  );
};


      
     
export default MyRouter;