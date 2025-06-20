import classes from "./App.module.css"
import Home from "./Components/Home"
export default function App(){
    return (
        <div className={classes.app}>
            <Home/>
        </div>
    )
}