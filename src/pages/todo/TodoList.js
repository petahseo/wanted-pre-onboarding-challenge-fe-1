import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import API from "../../utils/Api";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await axios.get(`${API.todos}`, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setTodos(res.data.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getTodos();
  });

  return <TodoForm></TodoForm>;
}

const TodoForm = styled.ul`
  position: absolute;
  padding: 20px;
  width: 329px;
  height: 68px;
  left: 20px;
  top: 450px;
`;
