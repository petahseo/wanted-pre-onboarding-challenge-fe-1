import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import styled from "styled-components";
import LogoSrc from "../../assets/images/logo.png";

export default function TodoForm() {
  return (
    <Container>
      <Form>
        <Logo src={LogoSrc} />
        <Title>Todo List</Title>
        <TodoCreate />
        <TodoList />
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #c7c7c7;
`;

const Form = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background: #ffffff;
`;

const Logo = styled.img`
  position: absolute;
  width: 104px;
  height: 100px;
  left: 16px;
  top: 57px;
`;

const Title = styled.h1`
  position: absolute;
  width: 219px;
  height: 72px;
  left: 23px;
  top: 186px;
  font-size: 28px;
  line-height: 36px;
  color: #191919;
`;
