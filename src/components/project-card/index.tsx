import { BsGithub } from 'react-icons/bs'
import './project-card.css'

const ProjectCard = (prop: {img: string, title: string, description: string, git: string}) => {
    return(
        <div className="card-container">
            <img src={prop.img}/>
            <h2>{prop.title}</h2>
            <p>{prop.description}</p>
            <a href={prop.git}><BsGithub/></a>
        </div>
    )
}

export default ProjectCard;