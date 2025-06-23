import ProjectCard from "./ProjectCard";
import projects from "../Utils/projects";
import classes from "./Projects.module.css"
export default function Projects(){
    return(
        <div className={classes.projectsContainer}>
            <div className={classes.titleContainer}>
                <p className={classes.titleText}>Projects</p>
            </div>
            <div className={classes.projectCardContainer}>
                {
                    projects.map((project,index)=>{
                        return <ProjectCard project={project} key={index}></ProjectCard>
                    })
                }
            </div>
        </div>
    )
}