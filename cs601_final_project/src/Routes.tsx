import { JSX } from "react"
import Pathfinder from "./pages/Pathfinder"
import Weather from "./pages/Weather"

interface RoutesInteface {
  name: string, 
  component:JSX.Element,
  href: string
}

const routes: RoutesInteface[]  = [
    {name: "Pathfinder", component:<Pathfinder/>, href: "pathfinder"},
    {name: "Weather Near David", component:<Weather/>, href: "weather"},
]

export { routes }
