import classes from "./Education.module.css";
import EducationCard from "./EducationCard";
import degrees from "../Utils/education";
export default function Education(){
    return(
        <div className={classes.educationContainer}>
            <div className={classes.titleContainer}>
                <p className={classes.titleText}>
                    Education
                </p>
            </div>
            <div className={classes.educationCardContainer}>
                {
                    degrees.map((degree,index)=>{
                        return <EducationCard key={index} degree={degree}></EducationCard>
                    })
                }
            </div>
        </div>
    )
}