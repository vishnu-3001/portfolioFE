import classes from "./Navigation.module.css";
import contact from "../Utils/Contact";

export default function Navigation() {
    const name = "<Vishnu sai Kotha/>";

    return (
        <div className={classes.navigationContainer}>
            <div>
                <p className={classes.name}>{name}</p>
            </div>
            <div className={classes.iconGroup}>
                {contact.map((item, index) => {
                    // Determine actual URL type
                    const isPhone = item.alt === "mobile";
                    const isEmail = item.alt === "email";

                    // Construct href for phone or email
                    let href = item.url;
                    if (isPhone && item.text) href = `tel:${item.text.replace(/[-\s]/g, "")}`;
                    if (isEmail && item.url) href = `mailto:${item.url}`;

                    return (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className={classes.contactLink}
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                className={classes.contactImage}
                            />
                            {isPhone && item.text && (
                                <span className={classes.contactText}>{item.text}</span>
                            )}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
