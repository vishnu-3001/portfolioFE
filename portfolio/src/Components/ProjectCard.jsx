import classes from "./ProjectCard.module.css"
export default function ProjectCard({project}){
    return(
        <div className={classes.card}>
            <div className={classes.innerCard}>
                <div className={classes.cardFront}>
                    <img src={project.img} alt={project.alt} className={classes.projIcon}></img>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className={classes.techContainer}>
                        {
                            project.technologies.map((tech,index)=>{
                                return <span key={index} className={classes.technology}>{tech}</span>
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}