import { JSX } from "react"
import Pathfinder from "./pages/Pathfinder"
import Weather from "./pages/Weather"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Game from "./pages/Game"

import P from "./media/P.png"
import WeatherPicture from "./media/weather-svgrepo-com.svg"
import Email from "./media/email-svgrepo-com.svg"
import ResumeIcon from "./media/resume-svgrepo-com.svg"
import GameIcon from "./media/game-controller-gaming-svgrepo-com.svg"

interface RoutesInteface {
  name: string, 
  component:JSX.Element,
  href: string,
  description: string, 
  image: JSX.Element | null
}

const routes: RoutesInteface[]  = [
    {name: "Home", component:<Home/>, href: "", description: "", image: null},
    {name: "Pathfinder", component:<Pathfinder/>, href: "pathfinder",  description: "Explore David Metraux's experience in Pathfinder!", image: <img src={P} width={100} alt="pathfinder-styled P"/>},
    {name: "David's Weather", component:<Weather/>, href: "weather",  description: "See what the weather is like in Boston, where David Metraux lives.", image: <img src={WeatherPicture} width={100} alt="sun behind clouds"/>},
    {name:"Contact David", component:<Contact/>, href: "contact",  description: "See some places where you can contact David Metraux, or send him a message", image: <img src={Email} width={100} alt="letter"/>},
    {name:"Resume", component:<Resume/>, href: "resume",  description: "See David Metraux's Resume. It includes a button to print it!", image: <img src={ResumeIcon} width={100} alt="Symbol denoting a resume"/>},
    {name:"Game", component:<Game/>, href: "game", description: "David Metraux likes games, so he made one for his page!", image: <img src={GameIcon} width={100} alt="Icon denoting a game controller"/>}
]

export { routes }
