import { Button } from '@mui/material';
import '../style/Banner.css'
import headshot from '../media/headshot_no_bg.png'

function Banner(){
    return (
    <div id='banner'>
        <div id='siteTitle'>
            <h1>David Metraux</h1>
            <div id="headShot">
                <div className='overlay'></div>
                <img  src={headshot}></img>
            </div>
        </div>

        <div>
            <menu id='menu'>
                <li><button>One</button></li>
                <li><button>Two</button></li>
                <li><button>Three</button></li>
            </menu>
        </div>
    </div>
    )
}

export default Banner;