import './App.css';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login'
import { useEffect, useState } from 'react';
import Cadastro from './Pages/Cadastro';
import Perfis from './Pages/Perfis';
import Perfil from './Pages/Perfil';


const caes = [{
  id: 0,
  nome: 'Roberto',
  idade: 8,
  raça: 'Golden Retriever'
},
{
  id: 1,
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
},
{
  id: 2,
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
},
{
  id: 3,
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
},
{
  id: 4,
  nome: 'Thor',
  idade: 5,
  raça: 'Pastor Alemão'
},
{
  id: 5,
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
      {caes.map(cao => <Route key ={cao} path={`/Perfil/${cao.nome}`} element={<Perfil nome={cao.nome}/>}/>)}
      {Conta.logado === true && <Route path={`/MeuPerfil`} element={<Perfil nome={Conta.nome}/>}/>}
    </Routes>
  );
}

export default App;
