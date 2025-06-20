import classes from "./Navigation.module.css"
import { hoverColors } from "../Utils/colors"
import { useState } from "react"
export default function Navigation(){
    const [hovered,setHovered]=useState('');
    const name="<Vishnu sai Kotha/>"
    function handleMouseEnter(buttonName){
        setHovered(buttonName);
    }
    function handleMouseLeave(){
        setHovered('');
    }
    return (
        <div className={classes.navigationContainer}>
            <div>
                <p className={classes.name}>{name}</p>
            </div>
            {/* <div>
                <button className={classes.navButton}
                onMouseEnter={()=>handleMouseEnter('Abt')}
                onMouseLeave={handleMouseLeave}
                style={{color:hovered==='Abt'?hoverColors[8]:'white',
                    borderBottom:`2px solid ${hovered==='Abt'?hoverColors[8]:'transparent'}`}}
                >About</button>
                <button className={classes.navButton}
                onMouseEnter={()=>handleMouseEnter('Exp')}
                onMouseLeave={handleMouseLeave}
                style={{color:hovered==='Exp'?hoverColors[2]:'white',
                    borderBottom:`2px solid ${hovered==='Exp'?hoverColors[2]:'transparent'}`}}
                >Experience</button>
                <button className={classes.navButton}
                onMouseEnter={()=>handleMouseEnter('Edu')}
                onMouseLeave={handleMouseLeave}
                style={{color:hovered==='Edu'?hoverColors[4]:'white',
                    borderBottom:`2px solid ${hovered==='Edu'?hoverColors[4]:'transparent'}`}}
                >Education</button>
                <button className={classes.navButton}
                onMouseEnter={()=>handleMouseEnter('Proj')}
                onMouseLeave={handleMouseLeave}
                style={{color:hovered==='Proj'?hoverColors[0]:'white',
                    borderBottom:`2px solid ${hovered==='Proj'?hoverColors[0]:'transparent'}`}}
                >Projects</button>
                <button className={classes.navButton}
                onMouseEnter={()=>handleMouseEnter('C&P')}
                onMouseLeave={handleMouseLeave}
                style={{color:hovered==='C&P'?hoverColors[7]:'white',
                    borderBottom:`2px solid ${hovered==='C&P'?hoverColors[7]:'transparent'}`}}
                >Achievements</button>
                <button className={classes.navButton}
                onMouseEnter={()=>handleMouseEnter('Lead')}
                onMouseLeave={handleMouseLeave}
                style={{color:hovered==='Lead'?hoverColors[6]:'white',
                    borderBottom:`2px solid ${hovered==='Lead'?hoverColors[6]:'transparent'}`}}
                >Leadership</button>
                <button className={classes.navButton}
                onMouseEnter={()=>handleMouseEnter('Res')}
                onMouseLeave={handleMouseLeave}
                style={{color:hovered==='Res'?hoverColors[1]:'white',
                    borderBottom:`2px solid ${hovered==='Res'?hoverColors[1]:'transparent'}`}}
                >Resume</button>
                <button className={classes.navButton}
                onMouseEnter={()=>handleMouseEnter('Cont')}
                onMouseLeave={handleMouseLeave}
                style={{color:hovered==='Cont'?hoverColors[9]:'white',
                    borderBottom:`2px solid ${hovered==='Cont'?hoverColors[9]:'transparent'}`}}
                >Contact</button>
            </div> */}
        </div>
    )
}