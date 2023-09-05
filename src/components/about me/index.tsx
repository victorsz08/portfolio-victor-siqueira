import './about-me.css'
import { BiLogoJavascript, BiLogoTypescript, BiLogoReact } from 'react-icons/bi'
import { SiMysql } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { BsGit, BsGithub } from 'react-icons/bs'


const AboutMe = () => {
    return (
        <section className="about-container">
            <section className='info-container'>
            <div className="about-me-title">
                <h1>Sobre</h1>
                <h1 className="color">Mim</h1>
            </div>
            <div className="text-about-me">
                <p>Olá! Me chamo <strong>Victor Siqueira</strong>, estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> e atuo em desenvolvimento web.</p>
                <p>Embora minha jornada acadêmica esteja em andamento, estou sempre <strong>buscando aprimorar minhas habilidades</strong>, e isso inclui participar de <strong>escolas de programação externas à faculdade</strong>.</p>
                <p>Atualmente, estou <strong>em busca de oportunidades</strong> para aplicar meus conhecimentos e crescer como <strong>desenvolvedor web</strong>. Embora eu ainda não tenha experiência profissional no mercado, estou motivado a aprender, colaborar e contribuir para projetos desafiadores.</p>
            </div>
            <div className="skills">
                <h2>Minhas Skills</h2>
                    <div className='icons'>
                        <BiLogoJavascript/>
                        <BiLogoTypescript/>
                        <SiMysql/>
                        <DiNodejs/>
                        <BiLogoReact/>
                        <BsGit/>
                        <BsGithub/>
                        <p>Tenho conhecimento em <strong>JavaScript, Typescript, MySql, NodeJs, Express, ReactJs, Git e GitHub.</strong></p>
                    </div>
            </div>
            </section>
            <img src="/public/estudando.png"/>
        </section>
    )
}

export default AboutMe;