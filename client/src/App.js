// Import Bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './styles/App.css';

// Components
import Home from "./components/Home";
import Add from "./components/add";
import Layout from "./components/layout";
import Edit from "./components/edit";
import Edit2 from "./components/edit2";
import User from "./components/user";
import Adduser from "./components/adduser";
import Editusr from "./components/editusr";


function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Welcome to my React Web</h1>
        <p>Lorem ipsum is a dummy text</p>
        <hr />
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
             <Route path='user' element={<Home/>}/>
             <Route path='add' element={<Add/>}/>
             <Route path='edit' element={<Edit/>}/>
             <Route path='edit2/:id' element={<Edit2/>}></Route>
             <Route path='usr' element={<User/>}></Route>
             <Route path='addusr' element={<Adduser/>}></Route>
             <Route path='edtusr/:id' element={<Editusr/>}></Route>
          </Route>
        </Routes>
      </Router>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
