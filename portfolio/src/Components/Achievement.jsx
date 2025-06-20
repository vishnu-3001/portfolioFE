import classes from "./Achievement.module.css";

export default function Achievement({ title, description, image, link = "" }) {
    return (
        <div className={classes.card}>
            <div className={classes.innerCard}>
                <img src={image} alt={title} className={classes.image} />
                <p className={classes.title}>{title}</p>
                <p className={classes.description}>{description} {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.link}>
                        Link
                    </a>
                )}</p>
            </div>
        </div>
    );
}
