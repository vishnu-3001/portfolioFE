import ExperiencePoster from "./ExperiencePoster";
import classes from "./Experience.module.css";
import experiences from "../Utils/experience"; 
export default function Experience(){
    return(
        <div className={classes.experienceContainer}>
            <div className={classes.titleContainer}>
                <p className={classes.titleText}>Experience</p>
            </div>
            <div className={classes.experienceCardContainer}>
                {
                    experiences.map((experience,index)=>{
                        return <ExperiencePoster key={index} experience={experience}></ExperiencePoster>
                    })
                }
            </div>
        </div>
    )
}