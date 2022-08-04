import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
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
      const res = await axios.post("http://localhost:3000/users/create", {
        email,
        password,
      });
      console.log(res);
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <h1>이제 원티드인이 되어보세요!</h1>
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
      <button onClick={onSubmit}>회원 가입하기</button>
    </div>
  );
}
