import { useRef, MouseEvent, RefObject, useState, useEffect } from "react"
import style from '../style/Game.module.css'

function Game(){
    const redRef = useRef<HTMLDivElement>(null)
    const greenRef = useRef<HTMLDivElement>(null)
    const yellowRef = useRef<HTMLDivElement>(null)
    const blueRef = useRef<HTMLDivElement>(null)

    

    const [currentAnswer, setCurrentAnswer] = useState<string>()
    const [currentRef, setCurrentRef] = useState<RefObject<HTMLDivElement|null>>()
    const [score, setScore] = useState<number>(0)

    const checkIfRightOne = (event: MouseEvent<HTMLElement>, color:string) => {
        if (color === currentAnswer){
            setScore(score+1)
            
        } else {
            currentRef?.current && setIfValid(currentRef?.current, style.hint)
        }
    }

    const setIfValid = (props: HTMLDivElement | null, style: string) => {
        if (props != null) {
            props.className = style
        }
    }

    useEffect(()=>{
        let allRefs = {red: redRef, green: greenRef, yellow:yellowRef, blue:blueRef}


        // eslint-disable-next-line array-callback-return
        Object.values(allRefs).map((ref) => {
            setIfValid(ref.current, "")
        })


        let randomIndex = Math.floor(Math.random() * 4)
        let answer= Object.entries(allRefs)[randomIndex]
        setCurrentAnswer(answer[0])
         if(answer[1]) {setCurrentRef(answer[1])}
        let element = answer?.[1]

        setIfValid(element.current, style.current)
    }, [score])



    return (
        
        <div className={style.background}>
            <h2>Game</h2>
            <p>David Metraux likes playing games, so he made one here. Click the correct square. If you fail, you'll get a hint!</p>
            <div className={style.gameHolder}>
                <h3>{currentAnswer && currentAnswer}</h3>
                <p>Score: {score}</p>
                <div className={style.squareHolder}>
                    <div id={style.red} ref={redRef} onClick={(e)=>checkIfRightOne(e, "red")}></div>
                    <div id={style.green} ref={greenRef} onClick={(e)=>checkIfRightOne(e, "green")}></div>
                    <div id={style.yellow} ref={yellowRef} onClick={(e)=>checkIfRightOne(e, "yellow")}></div>
                    <div id={style.blue} ref={blueRef} onClick={(e)=>checkIfRightOne(e, "blue")}></div>
                </div>
            </div>
        </div>
    )
}


export default Game