import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
