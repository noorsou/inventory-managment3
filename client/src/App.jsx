import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './component/Signup';
import Home from './component/pages/Home';
import Login from './component/Login';
import Header from './component/Header';


const App = () => {
  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;