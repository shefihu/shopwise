import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrolltoTop from "./components/ScrolltoTop";
import Home from "./page/Home";

function App() {
  return (
    <div className="App bg-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrolltoTop />
    </div>
  );
}

export default App;
