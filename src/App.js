import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Add from "./components/pages/add/Add";
import Read from "./components/pages/read/Read";
import Login from "./components/pages/auth/Login";
import Private from "./components/pages/auth/Private";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { set_user } from "./redux/action/action";
import axios from "axios";


axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Accept'] = 'application/json';

function App() {

  const auth = useSelector(state => state.auth.status);

  const dispatch = useDispatch()

  const user = localStorage.getItem('user')

  useEffect(() => {
    if(user){
      dispatch(set_user(JSON.parse(user)))
    }
  },[])

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
