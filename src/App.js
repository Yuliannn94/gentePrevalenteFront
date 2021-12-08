import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Index from './pages/Index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout/>}>
          <Route path='' element={<Index />}/>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
