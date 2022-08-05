import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import LogoSrc from "../../assets/images/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailValidation = email.includes("@") && email.includes(".");
  // /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
  const passwordValidation = password.length >= 8;
  // /[\.@]/

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/todo/todolist");
    } catch (err) {
      alert(err);
    }
  };

  const handleSignup = () => {
    navigate("/auth/signup");
  };

  return (
    <Container>
      <Form>
        <Logo src={LogoSrc} />
        <Title>원티드에 오신것을 환영합니다</Title>
        <InputEmail
          type="email"
          name="email"
          placeholder="이메일"
          value={email}
          required
          onChange={onChange}
        />
        <InputPassword
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          required
          onChange={onChange}
        />
        <LoginBtn
          type="submit"
          onClick={onSubmit}
          disabled={!emailValidation || !passwordValidation}
        >
          로그인
        </LoginBtn>
        <SignUpBtn onClick={handleSignup}>회원가입</SignUpBtn>
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

const InputEmail = styled.input`
  position: absolute;
  padding: 24px;
  width: 329px;
  height: 68px;
  left: 23px;
  top: 354px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const InputPassword = styled.input`
  position: absolute;
  padding: 24px;
  width: 329px;
  height: 68px;
  left: 23px;
  top: 431px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const LoginBtn = styled.button`
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

const SignUpBtn = styled.a`
  position: absolute;
  left: 165px;
  top: 599px;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  color: #777777;

  &:hover {
    text-decoration: underline;
    color: #777777;
  }
`;
