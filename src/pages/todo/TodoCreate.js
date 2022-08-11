import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import API from "../../utils/Api";

export default function TodoCreate() {
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
        `${API.todos}`,
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
    setTodos("");
  };

  return (
    <Container>
      <Form>
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
        <SubmitButton type="submit" onClick={onSubmit}>
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
}

const Container = styled.div``;
const Form = styled.div``;
const InputTitle = styled.input`
  position: absolute;
  padding: 24px;
  width: 329px;
  height: 68px;
  left: 23px;
  top: 240px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const InputContent = styled.input`
  position: absolute;
  padding: 24px;
  width: 329px;
  height: 68px;
  left: 23px;
  top: 317px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const SubmitButton = styled.button`
  position: absolute;
  width: 343px;
  height: 54px;
  left: 16px;
  top: 408px;
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
