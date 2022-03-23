import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { useContext } from 'react';
import { Context } from './theme';
import { AboutItem } from './pages/AboutItem';

function App() {
  const themeContext = useContext(Context);

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <p>Current theme: {themeContext.theme}</p>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />  
        <Route path="/about/:userId" element={<AboutItem />} />
      </Routes>
    </div>
  );
}

export default App;
