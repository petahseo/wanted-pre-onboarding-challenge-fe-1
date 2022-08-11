import styled from "styled-components";

export default function TodoList() {
  return (
    <TodoForm>
      <Todos>제목</Todos>
      <Todos>내용</Todos>
    </TodoForm>
  );
}

const TodoForm = styled.ul`
  position: absolute;
  padding: 20px;
  width: 329px;
  height: 68px;
  left: 20px;
  top: 450px;
`;

const Todos = styled.li``;
