import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Description from './pages/Description';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';




function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<Description />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
