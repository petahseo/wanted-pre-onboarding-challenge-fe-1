import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/images/logo.png";

export default function TodoList() {
  const [todos, setTodos] = useState({
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setTodos({
      ...todos,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    const { title, content } = todos;
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/todos",
        {
          title,
          content,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      console.log(res);
      alert("업로드");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container>
      <Form>
        <Logo src={LogoSrc} />
        <Title>Todo List</Title>
        <InputTitle
          type="text"
          name="title"
          placeholder="제목"
          value={todos.title}
          required
          onChange={onChange}
        />
        <InputContent
          type="text"
          name="content"
          placeholder="내용"
          value={todos.content}
          required
          onChange={onChange}
        />
        <SubmitBtn type="submit" onClick={onSubmit}>
          Submit
        </SubmitBtn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
const InputTitle = styled.input`
  position: absolute;
  padding: 24px;
  width: 329px;
  height: 68px;
  left: 23px;
  top: 354px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const InputContent = styled.input`
  position: absolute;
  padding: 24px;
  width: 329px;
  height: 68px;
  left: 23px;
  top: 431px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const SubmitBtn = styled.button`
  position: absolute;
  width: 343px;
  height: 54px;
  left: 16px;
  top: 522px;
  background: #ff4a01;
  border: 1px solid #ff4a01;
  border-radius: 33.5px;

  color: white;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  &:active {
    background-color: #ff4a01;
  }
  &:disabled {
    background-color: #e5e5e5;
    border: 1px solid #e5e5e5;
    cursor: pointer;
  }
`;
