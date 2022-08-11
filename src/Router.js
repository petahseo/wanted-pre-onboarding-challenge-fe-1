import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/LoginPage";
import SignUp from "./pages/auth/SignUpPage";
import TodoForm from "./pages/todo/TodoForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/todo/todoForm" element={<TodoForm />} />
      </Routes>
    </Router>
  );
}

export default App;
