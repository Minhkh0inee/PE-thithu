import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Home from "./router/Home/Home";
import Dashboard from "./router/Dashboard/Dashboard";
import Contact from "./router/Contact/Contact";
import StaffDetail from "./router/Detail/Detail";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path ="/detail/:id" element={<StaffDetail></StaffDetail>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
