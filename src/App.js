import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Add from "./components/pages/add/Add";
import Read from "./components/pages/read/Read";
import Login from "./components/pages/auth/Login";
import Private from "./components/pages/auth/Private";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/read" element={<Read />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
