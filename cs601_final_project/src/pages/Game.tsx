import { MouseEvent, useState, useEffect} from "react"
import style from '../style/Game.module.css'

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
            <div className={style.gameHolder}>
                <button onClick={()=>setDifficulty("easy")}>Easy</button>
                <button onClick={()=>setDifficulty("medium")}>Medium</button>
                <button onClick={()=>setDifficulty("hard")}>Hard</button>
                <p>Difficulty: {difficulty}</p>
                <p>Score: {score}</p>
                <h3>{currentAnswer && currentAnswer}</h3>
                <div className={style.squareHolder}>
                    {
                        colors && colors.map((color)=>{ 
                            return (
                            <div key="color" id={style[color]} className={isCurrent(color)} onClick={(e)=>{checkIfRightOne(e, color)}}>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    )
}


export default Game