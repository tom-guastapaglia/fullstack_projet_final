import 'tailwindcss/tailwind.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'my-lib-ui/dist/index.css';
import List from './pages/list';
import Home from './pages/home';
import Detail from './pages/detail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path={'/detail/:id'} element={<Detail/>}/>
      </Routes>
    </Router>
  );
}
