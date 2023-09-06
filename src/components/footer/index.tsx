import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="copyright">
                <p>©️ 2023 Victor Siqueira</p>
            </div>
            <div className="socials-container">
                <AiFillLinkedin/>
                <AiFillGithub/>
                <AiOutlineMail/>
                <p>joaovictorsal777@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer;