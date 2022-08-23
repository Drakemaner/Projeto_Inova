import { useState } from 'react'
import Input from '../Input'
import './Formulario.css'

const Formulario = (props) => {


    const [email,setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const login = (evento) => {
        evento.preventDefault()
        props.aoLogar({
            email,
            senha
        }  
        )
    }

    return(
        <div className='form'>

            <form onSubmit={login}>
                <h3>Login</h3>
                <Input
                    label ='E-mail'
                    type = 'text'
                    placeholder = 'Digite seu E-mail'
                    enviar = {valor => setEmail(valor)}
                    valor = {email}
                />
                <Input
                    label ='Senha'
                    type = 'password'
                    placeholder = 'Digite sua Senha'
                    enviar = {valor => setSenha(valor)}
                    valor = {senha}
                />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default Formulario