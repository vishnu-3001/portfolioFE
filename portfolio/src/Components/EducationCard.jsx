import classes from "./EducationCard.module.css";
export default function EducationCard({degree}){
    return(
        <div className={classes.card}>
            <div className={classes.innerCard}>
            <div className={classes.cardFront}>
                <img src={degree.img} alt="degree" className={classes.eduIcon}></img>
                <p className={classes.degree}>{degree.degree}</p>
                <p className={classes.major}>{degree.major}</p>
                <p className={classes.college}>{degree.college}</p>
                <p className={classes.year}>{degree.year}</p>
                <div className={classes.courseContainer}>
                    {
                        degree.courses.map((course,index)=>{
                            return <li key={index} className={classes.course}>{course}</li>
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    )
}