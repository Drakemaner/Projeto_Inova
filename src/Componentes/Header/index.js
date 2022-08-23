import './Header.css'
import { Link } from 'react-router-dom'



const Header = () =>{
    const imagem = 'https://raw.githubusercontent.com/Drakemaner/Site-Enzo/main/public/fotos/logo.png'
    return(
        <div className='header'>
            <header>
                <div>
                <Link to='/'><img src={imagem} alt='logo'/></Link>
                </div>
                <nav>
                    <ul>
                        <li id='link'><Link to='/Login'>Login</Link></li>
                        <li>Cadastre-se</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export  default Header