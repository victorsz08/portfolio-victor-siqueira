import ProjectCard from "../project-card";
import './projects.css'

const Projects = () => {
    return (
        <section className="projects-container">
            <h1>Projetos</h1>
            <div className="projects">
                <ProjectCard 
                git=""
                img="/public/imagem.jpg" 
                title="Projeto 1" 
                description="Mussum Ipsum, cacilds vidis litro abertis. 
                Suco de cevadiss deixa as pessoas mais interessantis. 
                Todo mundo vê os porris que eu tomo, mas ninguém vê os 
                tombis que eu levo! Mais vale um bebadis conhecidiss, que 
                um alcoolatra anonimis. Diuretics paradis num copo é motivis de denguis."/>
                <ProjectCard 
                git=""
                img="/public/imagem.jpg" 
                title="Projeto 1" 
                description="Mussum Ipsum, cacilds vidis litro abertis. 
                Suco de cevadiss deixa as pessoas mais interessantis. 
                Todo mundo vê os porris que eu tomo, mas ninguém vê os 
                tombis que eu levo! Mais vale um bebadis conhecidiss, que 
                um alcoolatra anonimis. Diuretics paradis num copo é motivis de denguis."/>
            </div>
        </section>
    )
}

export default Projects;