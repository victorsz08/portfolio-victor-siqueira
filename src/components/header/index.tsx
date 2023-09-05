import './header.css'

const options = ['inicio', 'sobre mim', 'projetos', 'contato']

const Header = () => {
    return(
        <header className="header-container">
            <div className='logo'>
            <h1>V</h1>
            <h1 className="color">S</h1>
            </div>
            <div>
            {options.map((option, index) => (
                <a key={index}>{option}</a>
            ))}
            </div>
        </header>
    )
}

export default Header;