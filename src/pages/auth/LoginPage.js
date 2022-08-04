import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
      navigate("/todos");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <h1>원티드에 오신것을 환영합니다</h1>
      <input
        type="email"
        name="email"
        placeholder="이메일"
        value={email}
        required
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        required
        onChange={onChange}
      />
      <button type="submit" onSubmit={onSubmit}>
        로그인
      </button>
    </div>
  );
}
