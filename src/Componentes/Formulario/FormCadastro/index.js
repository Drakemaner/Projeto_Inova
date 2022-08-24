import { useState } from "react";
import './FormCadastro.css'
import Input from "../../Input";


function FormCadastro(props) {

    
    const [email ,setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [idade , setIdade] = useState('')
    const [sexo , setSexo] = useState('')
    const [raça , setRaça] = useState('')


    const cadastro = (evento) => {
        evento.preventDefault()
        props.aoCadastrarse({
            email,
            senha,
            nome,
            idade,
            sexo,
            raça

        }  
        )
    }

    return(
        <div className="form-cadastro">
            <form onSubmit={cadastro}>
                <h3>Cadastro</h3>
                <Input
                    label  = "E-mail"
                    type = "text"
                    placeholder = "Digite seu e-mail"
                    enviar = {valor => setEmail(valor)}
                    valor = {email}
                />
                <Input
                    label  = "Senha"
                    type = "password"
                    placeholder = "Digite sua senha"
                    enviar = {valor => setSenha(valor)}
                    valor = {senha}
                />
                <Input
                    label  = "Nome"
                    type = "text"
                    placeholder = "Digite o nome do animal"
                    enviar = {valor => setNome(valor)}
                    valor = {nome}
                />
                <Input
                    label  = "Idade"
                    type = "Integer"
                    placeholder = "Digite a idade do seu animal"
                    enviar = {valor => setIdade(valor)}
                    valor = {idade}
                />
                <Input
                    label  = "Sexo"
                    type = "text"
                    placeholder = "Digite o sexo do animal"
                    enviar = {valor => setSexo(valor)}
                    valor = {sexo}
                />
                <Input
                    label  = "Raça"
                    type = "text"
                    placeholder = "Digite a raça do seu animal"
                    enviar = {valor => setRaça(valor)}
                    valor = {raça}
                />
                <button type='submit'>Cadastra-se</button>
            </form>
        </div>
    );
}

export default FormCadastro