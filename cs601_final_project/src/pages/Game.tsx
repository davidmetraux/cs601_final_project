import { useRef } from "react"
import style from '../style/Game.module.css'

function Game(){
    const redRef = useRef(null)
    const greenRef = useRef(null)
    const yellowRef = useRef(null)
    const blueRef = useRef(null)

    return (
        <div className={style.squareHolder}>
            <div id={style.red} ref={redRef}></div>
            <div id={style.green} ref={greenRef}></div>
            <div id={style.yellow} ref={yellowRef}></div>
            <div id={style.blue} ref={blueRef}></div>
        </div>
    )
}


export default Game