import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Index from './pages/Index.jsx';

import IndexGestion from './pages/admin/IndexGestion.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route path='' element={<Index />} />
          <Route path='/administracion/gestionEmpresas' element={<IndexGestion />}/>
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
