import Achievement from "./Achievement";
import classes from "./Achievements.module.css";
import achievements_array from "../Utils/Achievements";
export default function Achievements(){
    return(
        <div className={classes.AchievementsContainer}>
            <div className={classes.titleContainer}>
                <p className={classes.titleText}>
                    Achievements
                </p>
            </div>
            <div className={classes.achievementContainer}>
                {
                    achievements_array.map((achievement, index) => (
                        <Achievement 
                            key={index}
                            title={achievement.title}
                            description={achievement.description}
                            image={achievement.image}
                            link={achievement.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}