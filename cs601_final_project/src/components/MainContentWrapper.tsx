import '../style/MainContent.css'
import {ReactNode} from 'react';

interface Props {
    children: ReactNode
}

function MainContentWrapper({children} : Props){
    return <div className='wrapper'>{children}</div>
}

export default MainContentWrapper;