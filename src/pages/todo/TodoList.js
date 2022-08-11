import styled from "styled-components";

export default function TodoList() {
  return (
    <Container>
      <InputForm>
        <InputTitle
          type="text"
          name="title"
          placeholder="제목"
          //value={todos.title}
          required
          //onChange={onChange}
        />
        <InputContent
          type="text"
          name="content"
          placeholder="내용"
          //value={todos.content}
          required
          //onChange={onChange}
        />
      </InputForm>
    </Container>
  );
}

const Container = styled.div``;
const InputForm = styled.div``;
const InputTitle = styled.input`
  position: absolute;
  padding: 10px;
  width: 240px;
  height: 40px;
  left: 23px;
  top: 470px;
  border: 1px solid #c4c4c4;
`;

const InputContent = styled.input`
  position: absolute;
  padding: 10px;
  width: 240px;
  height: 40px;
  left: 23px;
  top: 514px;
  border: 1px solid #c4c4c4;
`;
