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
  }, []);

  return (
    <Container>
      <TodoForm>
        {todos.map((todo) => (
          <List
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
          />
        ))}
      </TodoForm>
    </Container>
  );
}

const Container = styled.div``;
const TodoForm = styled.ul`
  position: absolute;
  padding: 20px;
  width: 290px;
  height: 280px;
  left: 23px;
  top: 460px;
  color: black;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const List = styled.li`
  position: absolute;
`;
