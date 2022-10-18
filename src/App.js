import './App.css';
import { Routes, Route } from 'react-router-dom';
import BasicFlow from './pages/BasicFlow';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<BasicFlow/>} />
        <Route path='/basicflow' element={<BasicFlow/>} />
      </Routes>
    </div>
  );
}

export default App;
