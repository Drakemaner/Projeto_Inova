
import './App.css';
import Main from './Componentes/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './Componentes/Login'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path='/Login' element={<Login />} />
    </Routes>
  );
}

export default App;
