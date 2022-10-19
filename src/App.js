import "./App.css";
import { Routes, Route } from "react-router-dom";
import BasicFlow from "./pages/BasicFlow";
import BasicSumFlow from "./pages/BasicSumFlow";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BasicFlow />} />
        <Route path="/basicflow" element={<BasicFlow />} />
        <Route path="/basicsumflow" element={<BasicSumFlow />} />
      </Routes>
    </div>
  );
}

export default App;
