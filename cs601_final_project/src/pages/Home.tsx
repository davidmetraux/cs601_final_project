import style from '../style/Home.module.css'
import { routes } from '../Routes';
import { Link } from 'react-router';

function Home() {

    const homelessRoutes = routes.filter((route)=>{return route.name !== "Home"})

    return (
        <div className={style.wrapper}>
            <h2>Welcome to David Metraux's Website!</h2>
            <div className={style.grid}>
                {homelessRoutes.map((route)=>{
                    return (
                        <section key={route.href} className={style.section}>
                            <h3>{route.name}</h3>
                            <p>{route.description}</p>
                            <Link to={{pathname: route.href}}>Visit {route.name}</Link>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}

export default Home