import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/categories" element={<Categories/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
