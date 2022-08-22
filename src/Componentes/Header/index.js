import './Header.css'

const Header = () =>{
    const imagem = 'https://raw.githubusercontent.com/Drakemaner/Site-Enzo/main/public/fotos/logo.png'
    return(
        <div className='header'>
            <header>
                <div>
                <a href='#inicio'><img src={imagem} alt='logo'></img></a>
                </div>
                <nav>
                    <ul>
                        <a href=''><li>Login</li></a>
                        <a href=''><li>Cadastre-se</li></a>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export  default Header