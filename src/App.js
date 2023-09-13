import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter >
        <Routes>
          <Route path="/" Component={Landing} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
