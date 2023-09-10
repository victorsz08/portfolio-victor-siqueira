import './home.css'
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai'

const Home = () => {
    return (
        <section id='inicio' className="home-container" >
            <div className="presents-container">
                <h4>Oi! meu nome é</h4>
                <div>
                    <h1>Victor</h1>
                    <h1 className="color">Siqueira</h1>
                </div>
                <h6>Desenvolvedor Web</h6>
                <div className='socials-container'>
                <a href='http://www.google.com' target='_blank'><AiFillLinkedin/></a>
                <a href='http://www.google.com' target='_blank'><AiFillGithub/></a>
                <a href='http://www.google.com' target='_blank'><AiOutlineMail/></a>
                </div>
            </div>
            <img src="/public/foguete.png"/>
        </section>
    )
}

export default Home;