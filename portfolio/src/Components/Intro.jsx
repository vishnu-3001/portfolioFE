import classes from './Intro.module.css'
import { hoverColors } from '../Utils/colors'
import { useState } from 'react'

const name=["Hello, ","I'm ","Vishnu ","sai ","Kotha! "]
const words=["A ","Full ","stack ","developer ","with ","a ","touch ","of ","LLM ","magic. "]
const words3=["Masters ","in ","Computer " ,"Science ","from ","Stony ","Brook " ,"University."]
const words4=["Currently ","Serving ","as ","President ","of ","Graduate ","Student ","Organization ","at ","SBU."]
export default function Intro(){
    const[hovered,setHovered]=useState([]);
    function handleEnter(i){
        setHovered((prev)=>{
            const newHovered=[...prev];
            newHovered[i]=true;
            return newHovered;
        })
    }
    function handleLeave(i){
        setTimeout(()=>{
            setHovered((prev)=>{
                const newHovered=[...prev];
                newHovered[i]=false;
                return newHovered;
            })
        },1000)
    }
    return (
        <div className={classes.container}>
            <div className={classes.spanh1}>
                {name.map((word,index)=>
                    <span
                    onMouseEnter={()=>handleEnter(index)}
                    onMouseLeave={()=>handleLeave(index)} 
                    style={{color:hovered[index]?hoverColors[index]:'white',transition:'color 0.3s ease'}}
                    key={index}>
                        {word}
                    </span>)}
                </div>
            <div className={classes.spanp}>
                {
                    words.map((word,index)=>
                        <span key={index+5}
                    onMouseEnter={()=>handleEnter(index+5)}
                    onMouseLeave={()=>handleLeave(index+5)} 
                    style={{color:hovered[index+5]?hoverColors[(index+34)%10]:'#999',transition:'color 0.3s ease'}}
                    >
                            {word}
                        </span>)
                }
            </div>
            <div className={classes.spanp}>
                {
                    words3.map((word,index)=>
                        <span key={index+15}
                    onMouseEnter={()=>handleEnter(index+15)}
                    onMouseLeave={()=>handleLeave(index+15)} 
                    style={{color:hovered[index+15]?hoverColors[(index+15)%10]:'#999',transition:'color 0.3s ease'}}
                    >
                            {word}
                        </span>)
                }
            </div>
            <div className={classes.spanp}>
                {
                    words4.map((word,index)=>
                        <span key={index+23}
                    onMouseEnter={()=>handleEnter(index+23)}
                    onMouseLeave={()=>handleLeave(index+23)} 
                    style={{color:hovered[index+23]?hoverColors[(index+23)%10]:'#999',transition:'color 0.3s ease'}}
                    >
                            {word}
                        </span>)
                }
            </div>
    </div>
    )
}