import Input from '../Input'
import './Formulario.css'

const Formulario = () => {
    return(
        <div className='form'>

            <form>
                <h3>Login</h3>
                <Input
                    label ='E-mail'
                    type = 'text'
                    placeholder = 'Digite seu E-mail'
                />
                <Input
                    label ='Senha'
                    type = 'password'
                    placeholder = 'Digite sua Senha'
                />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default Formulario