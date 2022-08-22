import './Footer.css'



const Footer = () => {
    return (
    <div className='footer'>
        <footer className='contatos'>
            <div className='email'>
                <img src='' alt='contato'></img>
                <small>EMAIL PARA PARCERIA</small>
                <br/>
                <strong>PETMATCH@HOTMAIL.COM</strong>
            </div>
            <div className='contato'>
                <img src='' alt='contato'></img>
                <small>DUVIDAS?</small>
                <br/>
                <strong>(27) 4567-8901</strong>
            </div>
            <div className='doacao'>
                <img src='' alt='contato'></img>
                <small>SEJA UM DOADOR</small>
                <br/>
                <strong>PIX: (27) 4567-8901</strong>
                <br/>
                <strong>PICPAY: PETMATCH</strong>
            </div>
            <div className='info'>
                <img src='' alt='contato'></img>
                <small>SAIBA QUEM SOMOS</small>
                <br/>
                <strong>www.petmatch.com.br</strong>
            </div>
        </footer>
    </div>
    )
}


export default Footer