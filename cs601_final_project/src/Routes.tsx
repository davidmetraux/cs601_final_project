import { JSX } from "react"
import Pathfinder from "./pages/Pathfinder"
import Weather from "./pages/Weather"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Game from "./pages/Game"

interface RoutesInteface {
  name: string, 
  component:JSX.Element,
  href: string,
  description: string
}

const routes: RoutesInteface[]  = [
    {name: "Home", component:<Home/>, href: "", description: ""},
    {name: "Pathfinder", component:<Pathfinder/>, href: "pathfinder",  description: "Explore David Metraux's experience in Pathfinder!"},
    {name: "David's Weather", component:<Weather/>, href: "weather",  description: "See what the weather is like in Boston, where David Metraux lives."},
    {name:"Contact David", component:<Contact/>, href: "contact",  description: "See some places where you can contact David Metraux, or send him a message"},
    {name:"Resume", component:<Resume/>, href: "resume",  description: "See David Metraux's Resume. It includes a button to print it!"},
    {name:"Game", component:<Game/>, href: "game", description: "David Metraux likes games, so he made one for his page!"}
]

export { routes }
