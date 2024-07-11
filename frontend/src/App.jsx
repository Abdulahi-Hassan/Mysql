import User from "./components/User";
import { Routes, Route } from "react-router-dom";
import UserCreate from "./components/UserCreate";
import UserUpdate from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/User" element={<User />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="/update/:id" element={<UserUpdate />} />
        <Route path="/delete/:id" element={<DeleteUser />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Toaster/>
    </div>
  );
};

export default App;
