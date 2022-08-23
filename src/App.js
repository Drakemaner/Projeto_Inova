
import './App.css';
import Main from './Componentes/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './Componentes/Login'
import { useEffect, useState } from 'react';



function App() {

  const [Logado, setLogado] = useState(false)


  const Status = (valor) =>{
    if(valor == true){
      setLogado(true)
      console.log(Logado)
    }
    else{
      setLogado(false)
    }
  }

  
  return (
    <Routes>
      <Route path="/" element={<Main status = {Logado}/>}/>
      <Route path='/Login' element={<Login status = {valor => Status(valor)}/>} />
    </Routes>
  );
}

export default App;
