import { JSX } from "react"
import Pathfinder from "./pages/Pathfinder"
import Weather from "./pages/Weather"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

interface RoutesInteface {
  name: string, 
  component:JSX.Element,
  href: string
}

const routes: RoutesInteface[]  = [
    {name: "Home", component:<Home/>, href: ""},
    {name: "Pathfinder", component:<Pathfinder/>, href: "pathfinder"},
    {name: "Weather Near David", component:<Weather/>, href: "weather"},
    {name:"Contact David", component:<Contact/>, href: "contact"}
]

export { routes }
