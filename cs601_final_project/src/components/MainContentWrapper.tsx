import '../style/MainContent.css'
import {ReactNode} from 'react';

interface Props {
    children: ReactNode
}

function MainContentWrapper({children} : Props){
    return <main className='wrapper'>{children}</main>
}

export default MainContentWrapper;