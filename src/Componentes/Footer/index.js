import './Footer.css'



const Footer = () => {
    return (
    <div className='footer'>
        <footer className='contatos'>
            <div className='email'>
                <big><b>Email para parceria</b></big>
                <br/>
                <img src='' alt='E-mail: '></img>
                <small>petmatch@hotmail.com</small>
            </div>
            <div className='contato'>
                <big><b>Dúvidas</b></big>
                <br/>
                <img src='' alt='Telefone: '></img>
                <small>(27)4567-8901</small>
            </div>
            <div className='doacao'>
                <big><b>Seja um doador</b></big>
                <br/>
                <img src='' alt='Pagamentos: '></img>
                <small>Pix: (27)4567-8901 ou Picpay: PETMATCH</small>
            </div>
            <div className='info'>
                <big><b>Saiba quem somos</b></big>
                <br/>
                <img src='' alt='Site: '></img>
                <small>www.petmatch.com.br</small>
            </div>
        </footer>
    </div>
    )
}


export default Footer