import style from "../style/Pathfinder.module.css"
import wardens from '../media/900px-Wardens_of_Wildwood_logo.png'
import plaguestone from '../media/Fall_of_Plaguestone.png'
import march from '../media/March_of_the_Dead.png'
import washed from '../media/Washed.png'
import entities from "../media/entities.png"

function Pathfinder(){
    return (
        <div className={style.root}>
            <div className={style.section} style={{paddingTop:"0px"}}>
                <h2>Pathfinder 2e</h2>
                <p>Pathfinder 2e is a cooperative tabletop roleplaying game that lets you build stories and adventures with your friends. 
                David Metraux has played this a lot as a hobby, and has even created some of his own third party published products for it!</p>
            </div>
            <h3>Content Published:</h3>
            <div className={style.section}>
                <h4>Pathfinder Infinite: Entities</h4>
                <div>
                    <img src={entities} width="400" alt="Cover of Pathfinder Infinite: Entities"/>
                    <p>Fourteen mysterious entities beckon your player characters with power. With new bard muses, witch patron themes, a champion cause, an animist apparition, pactbinder feats, wizard focus spells, and covenants, 
                    who will you evoke the attention of? <a href="https://www.pathfinderinfinite.com/en/product/506194/entities" target="blank">Click here to see on Pathfinder Infinite</a></p>
                </div>
                    
            </div>

            <h3>Games Ran:</h3>
            <div id={style.gamesRan}>
                <div className={`"${style.gameSection} ${style.section}`} >
                    <h4>Wardens of Wildwood</h4>
                    <div>
                        <img src={wardens} width="300" alt="logo for Wardens of Wildwood"/>
                        <p>
                            As the fledgling nation of Taldor grew over millennia, it picked away at the surrounding wilderness, felling valuable trees
                            while riling the beasts, fey, and other inhabitants into generations of cyclical violence. Only millennia later did Taldor 
                            and the forest's eminent druids of the Wildwood Lodge negotiate lasting peace with the Treaty of the Wildwood.
                            Even so, the forest remains a realm besieged by civilization. As forest-dwellers gather for the annual Greenwood Gala, 
                            the election of Lodge leadership, and the renewal of the treaty, there's an opportunity to resolve old grudges—and as 
                            much potential to spark war.
                        </p>
                    </div>
                </div>
                <div className={`"${style.gameSection} ${style.section}`}>
                    <h4>Fall of Plaguestone</h4>
                    <div>
                        <img src={plaguestone} width="300" alt="logo for Fall of Plaguestone"/>
                        <p>A group of new adventurers traveling through the village of Etran's Folly—also known as Plaguestone—must come together
                        to solve the murder of a friend. What starts as a simple investigation quickly turns sinister with the discovery of forbidden alchemy, mutant animals, and a nearby forest rotting away due to a mysterious blight. 
                        It becomes clear that if these heroes don't intervene to stop whatever evil is brewing, the fall of Plaguestone is all but certain!</p>
                    </div>
                </div >
                <div className={`"${style.gameSection} ${style.section}`}>
                    <h4>March of the Dead</h4>
                    <div>
                        <img src={march} width="300" alt="logo for March of the Dead"/>
                        <p>
                            Centuries ago, the massive Shining Crusade destroyed the Whispering Tyrant Tar-Baphon, an
                            incredibly powerful lich. Knowing he might someday return, the Whispering Tyrant’s foes sealed
                            his remains away under his old tower, Gallowspire, and formed the nation of Lastwall to guard
                            his crumbling edifice for centuries… until three years ago, when the Tyrant was reborn. In a matter
                            of weeks, the furious lich laid waste to Lastwall. The lost nation, now known as the Gravelands,
                            is a haunted and desolate place overrun with undead while the Tyrant’s cult, the Whispering Way,
                            operates freely. Not far outside the Gravelands, the tiny village of Fiorna’s Faith has recently fallen,
                            another victim of this ancient conflict.
                        </p>
                    </div>
                </div>
                <div className={`"${style.gameSection} ${style.section}`} >
                    <h4>Washed</h4>
                    <div>
                        <img src={washed} width="300" alt="A cave filled with ooze"/>
                        <p>In the nation-state of Oenopion in the kingdom of Nex, Alchemy rules with an iron fist. 
                        Will the heroes uncover the mysteries and free Oenopion from the tyranny of the upper class, or will they be washed away? Note: This was a campaign I personally created.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pathfinder