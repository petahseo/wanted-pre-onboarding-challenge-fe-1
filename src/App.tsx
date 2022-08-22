import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/LoginPage";
import SignUp from "./pages/auth/SignUpPage";
import TodoForm from "./pages/todo/TodoForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/todo/todoForm" element={<TodoForm />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
