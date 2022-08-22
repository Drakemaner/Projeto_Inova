import './Header.css'

const Header = () =>{
    const imagem = "https://github.com/Drakemaner/site-enzo/blob/master/public/fotos/logo.png?raw=true"
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