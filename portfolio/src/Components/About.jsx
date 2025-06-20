import classes from "./About.module.css";
import image from "../Utils/candidate-image.jpeg";
export default function About(){
    return(
        <div className={classes.aboutContainer}>
            <div className={classes.imageContainer}>
                <img className={classes.candImage} src={image} alt="Vishnu sai Kotha"></img>
            </div>
            <div className={classes.textContainer}>
            <div className={classes.divtext}>Who Am I ?</div>
                <div className={classes.ptext}>
                I’m an engineer who loves using technology to help people and make their lives easier. 
                I’ve always dreamed of building tools that can make a real difference and be useful for everyone.
                </div>

                <div className={classes.ptext}>
                Right now, I’m doing my Master’s in Computer Science at Stony Brook University. Before this, I worked as a front-end developer at a well-known bank. 
                I enjoyed the work, but I felt I had more to learn so I decided to go back to school and grow my skills.
                </div>

                <div className={classes.ptext}>
                I also enjoy taking up leadership roles. 
                I like being the person working behind the scenes to help things run smoothly. I believe that actions matter more than words.
                </div>

                <div className={classes.ptext}>
                Outside of work, I love traveling, exploring new places, and watching movies (pretty much any genre!). 
                I also enjoy cooking from time to time especially trying new things in the kitchen.
                </div>
            </div>
        </div>
    )
}