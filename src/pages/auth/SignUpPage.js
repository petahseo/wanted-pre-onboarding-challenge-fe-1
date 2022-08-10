import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import LogoSrc from "../../assets/images/logo.png";
import API from "../../utils/Api";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailValidation = email.includes("@") && email.includes(".");
  const passwordValidation = password.length >= 8;

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
      const res = await axios.post(`${API.signup}`, {
        email,
        password,
      });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const handleSignup = () => {
    navigate("/");
  };

  return (
    <Container>
      <Form>
        <Logo src={LogoSrc} />
        <Title>이제 원티드인이 되어보세요!</Title>
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
        <SignUpButton
          type="submit"
          onClick={onSubmit}
          disabled={!emailValidation || !passwordValidation}
        >
          회원 가입하기
        </SignUpButton>
        <LoginButton onClick={handleSignup}>로그인</LoginButton>
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

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;

  color: #191919;
`;

const InputEmail = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 10px;

  position: absolute;
  width: 329px;
  height: 68px;
  left: 23px;
  top: 354px;

  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const InputPassword = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 10px;

  position: absolute;
  width: 329px;
  height: 68px;
  left: 23px;
  top: 431px;

  border: 1px solid #c4c4c4;
  border-radius: 6px;
`;

const SignUpButton = styled.button`
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
    cursor: default;
  }
`;
const LoginButton = styled.a`
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
