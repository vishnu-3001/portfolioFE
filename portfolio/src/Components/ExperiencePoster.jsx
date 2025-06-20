import classes from "./ExperiecePoster.module.css";
export default function ExperiencePoster({experience}) {
  return (
    <div className={classes.card}>
        <div className={classes.innerCard}>
            <div className={classes.cardFront}>
                <img src={experience.image} alt={experience.alt} className={classes.expIcon}></img>
                <p className={classes.title}>{experience.role}</p>
                <p className={classes.tagLine}>{experience.studio}</p>
                <p className={classes.date}>{experience.dates}</p>
                <div className={classes.techContainer}>
                    {
                        experience.tech.map((technology,index)=>{
                            return <span key={index} className={classes.technology}>{technology}</span>
                        })
                    }
                </div>
            </div>
            <div className={classes.cardBack}>
                <p>
                {experience.synopsis}
                </p>
                <div>
                    {
                        experience.description.map((point,index)=>{
                            return <p className={classes.description} key={index}>{point}</p>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

 
