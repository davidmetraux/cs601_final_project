import { MouseEvent, useState, useEffect} from "react"
import style from '../style/Game.module.css'
import click from "../media/click-png-45034.png"

function Game(){
    
    const [currentAnswer, setCurrentAnswer] = useState<string>()
    const [wrong, setWrong] = useState(false)
    const [score, setScore] = useState<number>(0)
    const [difficulty, setDifficulty] = useState<string>("easy")
    const [colors, setColors] = useState<string[]>()

    useEffect(()=>{
        let numberOfColors;
        if (difficulty === "easy"){
            numberOfColors = 4;
        } else if (difficulty === "medium"){
            numberOfColors = 6;
        } else {
            numberOfColors = 8
        }

        let toSet=["red", "green", "yellow", "blue", "purple", "white", "orange", "grey"].slice(0, numberOfColors)

        setColors(toSet)
        setScore(0)
        setWrong(false)
    },[difficulty])


    const checkIfRightOne = (event: MouseEvent<HTMLElement>, color:string) => {
        if (color === currentAnswer){
            setScore(score+1)
            
        } else {
            setWrong(true)
        }
    }

    const isCurrent = (color: string) => {
        if (color === currentAnswer){
            if (wrong) {
                return style.hint
            } else {
                return style.current
            } 
        }
    }

    useEffect(()=>{
        if (colors){
            setWrong(false)
        
            let randomIndex = Math.floor(Math.random() * colors.length)
            let answer= colors[randomIndex]
            setCurrentAnswer(answer)
        }
    }, [colors, score])



    return (
        
        <div className={style.background}>
            <h2>Game</h2>
            <p>David Metraux likes playing games, so he made one here. Click the correct square. If you fail, you'll get a hint!</p>
            <img width={100} height={100} src={click} alt="a finger clicking" className={style.icon}/>
            <section className={style.gameHolder}>
                <menu>
                    <li><button onClick={()=>setDifficulty("easy")}>Easy</button></li>
                    <li><button onClick={()=>setDifficulty("medium")}>Medium</button></li>
                    <li><button onClick={()=>setDifficulty("hard")}>Hard</button></li>
                </menu>
                <p className={style.capitalize}><b>Difficulty:</b>  {difficulty}</p>
                <p><b>Score:</b> {score}</p>
                <h3 className={style.capitalize}>Click On: {currentAnswer && currentAnswer}</h3>
                <div className={style.squareHolder}>
                    {
                        colors && colors.map((color)=>{ 
                            return (
                            <button key={color} id={style[color]} className={isCurrent(color)} onClick={(e)=>{checkIfRightOne(e, color)}}>
                                <div className={style.overlay}><p className={style.colorNameForNoCSS}>{color}</p></div>
                            </button>
                    )})}
                </div>
            </section>
        </div>
    )
}


export default Game