import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/login/login'
import AttendanceRecord from './components/attendance'
import Check from './components/checking_comps/check'

function App() {
  return (
    <div className="App">
      <Router>
        {/* Login will also be part of routing */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/attendance" element={<AttendanceRecord />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
