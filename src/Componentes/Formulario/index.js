import Input from '../Input'
import './Formulario.css'

const Formulario = () => {
    return(
        <div className='form'>
            <form>
                <Input
                    label ='E-mail'
                    type = 'text'
                    placeholder = 'Digite o Nome do seu Cachorro'
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