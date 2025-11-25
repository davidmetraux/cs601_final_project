import { JSX } from "react"
import Pathfinder from "./pages/Pathfinder"
import Weather from "./pages/Weather"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

interface RoutesInteface {
  name: string, 
  component:JSX.Element,
  href: string,
  description: string
}

const routes: RoutesInteface[]  = [
    {name: "Home", component:<Home/>, href: "", description: ""},
    {name: "Pathfinder", component:<Pathfinder/>, href: "pathfinder",  description: "Explore David Metraux's experience in Pathfinder!"},
    {name: "Weather Near David", component:<Weather/>, href: "weather",  description: "See what the weather is like in Boston, where David Metraux lives."},
    {name:"Contact David", component:<Contact/>, href: "contact",  description: "See some places where you can contact David Metraux, or send him a message."}
]

export { routes }
