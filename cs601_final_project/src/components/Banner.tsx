import '../style/Banner.css'
import headshot from '../media/headshot_no_bg.png'
import { JSX } from 'react';
import { Link } from "react-router";
import { routes } from '../Routes';


function Banner(){

    const listLinks: JSX.Element[] = routes.map((link)=>{
        return <li key={link.href}><Link to={{pathname: link.href}} >{link.name}</Link></li>
    })

    return (
    <div id='banner'>
        
            <div id='siteTitle'>
                <Link to={{pathname: ""}} className='titleLayer'>
                    <h1>David Metraux</h1>
                    <div id="headShot">
                        <div className='overlay'></div>
                        <img  height="120" alt='headshot of David Metraux, man with long hair and beard' src={headshot}></img>
                    </div>
                </Link>
            </div>


        <div>
            <menu id='menu'>
                {listLinks}

            </menu>
        </div>
    </div>
    )
}

export default Banner;