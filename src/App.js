import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './routes/Landing';
import Team from './routes/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
