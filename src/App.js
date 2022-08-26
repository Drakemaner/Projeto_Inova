import './App.css';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import { useEffect, useState } from 'react';
import Cadastro from './Pages/Cadastro';
import Perfis from './Pages/Perfis';
import Perfil from './Pages/Perfil';


const caes = [{
  nome: 'Roberto',
  idade: 8,
  raça: 'Golden Retriever'
},
{
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
},
{
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
},
{
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
},
{
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
},
{
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
}
]


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
      <Route path='/Perfis' element={<Perfis caes={caes}/>}/>
      {caes.map(cao => <Route path={`/Perfil/${cao.nome}`} element={<Perfil nome={cao.nome}/>}/>)}
    </Routes>
  );
}

export default App;
