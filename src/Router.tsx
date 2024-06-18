import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoList from './routes/TodoList';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}
