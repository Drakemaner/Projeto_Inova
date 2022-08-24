
import './App.css';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import { useEffect, useState } from 'react';
import Cadastro from './Pages/Cadastro';



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

  const [Conta, setConta] = useState([])


  const cadastrarContas = (conta) =>{
    setConta(...Conta, conta)
  }
  
  return (
    <Routes>
      <Route path="/" element={<Main status = {Logado}/>}/>
      <Route path='/Login' element={<Login status = {valor => Status(valor)} contas={Conta}/>} />
      <Route path='/Cadastro' element={<Cadastro contas = {valor => cadastrarContas(valor)}/>}/>
    </Routes>
  );
}

export default App;
