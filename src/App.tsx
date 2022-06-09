import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./context/auth/RequireAuth";
import {Home} from './pages/Home';
import {Private} from './pages/Private';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Página de login</h1>
        <nav>
          <Link to={"/"} > Home</Link>
          <Link to={"/private"}>Private</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/private" element={<RequireAuth> <Private/></RequireAuth> } />
      </Routes>
    </div>
  );
}

export default App;
