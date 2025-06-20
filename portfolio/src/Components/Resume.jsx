import classes from "./Resume.module.css";

export default function Resume() {
    return (
        <div className={classes.resumeContainer}>
            <div className={classes.contentContainer}>
                <p className={classes.titleText}>Resume</p>
                <iframe src="/vishnu_sai_kotha_resume.pdf" title="resume" className={classes.resume}></iframe>
            </div>
        </div>
    );
}
