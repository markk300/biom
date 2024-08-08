import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import router from './utils/router';
import "./App.css";
import { Navbar } from "./components/Header/Navbar";

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        {router.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Routes>
    </Router>
  </div>
  );
}

export default App;
