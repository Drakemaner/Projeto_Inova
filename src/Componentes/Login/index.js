import Formulario from '../Formulario'
import Header from '../Header'
import Footer from '../Footer'
import './Login.css'




const Login = () =>{
    return(
        <div>
            <Header />
            <h3>Login</h3>
            <Formulario 
             label ='Nome'
             type = 'text'
             placeholder = 'Digite o Nome do seu Cachorro'/>
             <Formulario 
             label ='Raça'
             type = 'text'
             placeholder = 'Digite a Raça do seu Cachorro'/>
             <Formulario 
             label ='idade'
             type = 'number'
             placeholder = 'Digite a idade do seu Cachorro'/>
            <Formulario 
             label ='email'
             type  = 'text'
             placeholder = 'Digite Seu E-mail'/>
             <Formulario 
             label ='senha'
             type = 'password'
             placeholder = 'Digite sua Senha'/>
            <Footer />
        </div>
        
        
    )
}




export default Login