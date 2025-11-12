import { Button } from '@mui/material';
import '../style/Banner.css'
import headshot from '../media/headshot_no_bg.png'
import { JSX } from 'react';

const links: {name: string, href: string}[]  = [
    {name: "One", href: "/cs601_final_project/#one"},
    {name: "Two", href: "/cs601_final_project/#two"},
    {name: "Three", href: "/cs601_final_project/#three"}
]

function Banner(){

    const listLinks: JSX.Element[] = links.map((link)=>{
        return <li key={link.href}><a href={link.href}>{link.name}</a></li>
    })

    return (
    <div id='banner'>
        <div id='siteTitle'>
            <h1>David Metraux</h1>
            <div id="headShot">
                <div className='overlay'></div>
                <img  height="120" alt='headshot of David Metraux, man with long hair and beard' src={headshot}></img>
            </div>
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