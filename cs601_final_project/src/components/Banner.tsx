import { Button } from '@mui/material';
import '../style/Banner.css'

function Banner(){
    return (
    <div id='banner'>
        <div id='siteTitle'>
            <h1>David Metraux</h1>
            <div>Image</div>
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