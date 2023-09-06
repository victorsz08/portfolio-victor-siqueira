import './header.css'
import { Link } from 'react-scroll'

const options = ['inicio', 'sobre', 'projetos', 'contato']

const Header = () => {
    return(
        <header className="header-container">
                <Link 
                to='inicio'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                ><div className='logo'>
                    <h1>V</h1>
                    <h1 className="color">S</h1>
                </div>
            </Link>
            <div>
            {options.map((option, index) => (
                <Link  
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} 
                to={option} 
                key={index}>{option}
                </Link>
            ))}
            </div>
        </header>
    )
}

export default Header;