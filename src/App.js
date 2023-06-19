import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Dog from './components/Dog';
import Cat from './components/Cat';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dog' element={<Dog />} />
          <Route path='/cat' element={<Cat />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
