import styles from '../style/Banner.module.css'
import headshot from '../media/headshot_no_bg.png'
import { JSX } from 'react';
import { Link } from "react-router";
import { routes } from '../Routes';


function Banner(){

    const listLinks: JSX.Element[] = routes.map((link)=>{
        return <li key={link.href}><Link to={{pathname: link.href}} >{link.name}</Link></li>
    })

    return (
    <div id={styles.banner}>
        
            <div id={styles.siteTitle}>
                <Link to={{pathname: ""}} className={styles.titleLayer}>
                    <h1>David Metraux</h1>
                    <div id={styles.headShot}>
                        <div className={styles.overlay}></div>
                        <img  height="120" alt='headshot of David Metraux, man with long hair and beard' src={headshot}></img>
                    </div>
                </Link>
            </div>


        <div>
            <menu id={styles.menu}>
                {listLinks}

            </menu>
        </div>
    </div>
    )
}

export default Banner;