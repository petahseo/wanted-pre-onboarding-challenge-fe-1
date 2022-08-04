import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/LoginPage";
import SignUp from "./pages/auth/SignUpPage";
import TodoList from "./pages/todo/TodoList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
