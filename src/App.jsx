import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/index';
import Contact from './components/pages/contact/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;