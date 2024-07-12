import './ss.css'
import Image from 'next/image'


export default function Second_section(){
    return(<>
    <ul className="ss-main-con" >
        <li className='ss-top-title-con' >
            <div className='ss-top-title-subcon' >
                <h1 id='ss-top-title' >Trusted by Thousands, including the Hottest AI/ML Startups to Fuel Innovation, Efficiency, and Growth</h1>
            </div>
        </li>
        <li className='ss-img-con' >
            <ul className='ss-img-4scroll' >
                <li className='ss-img-box ss-first-img' >
                    <Image 
                    width={135} 
                    height={33} 
                    src='/ss-img/contextual.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={130} 
                    height={45} 
                    src='/ss-img/techstyle.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={140} 
                    height={45} 
                    src='/ss-img/bloc_power.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={135} 
                    height={45} 
                    src='/ss-img/city_innovate.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={130} 
                    height={45} 
                    src='/ss-img/clearstep.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={130} 
                    height={45} 
                    src='/ss-img/kami_vision.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={110} 
                    height={45} 
                    src='/ss-img/lily_ai.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={110} 
                    height={45} 
                    src='/ss-img/rodo.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={110} 
                    height={45} 
                    src='/ss-img/spotnana.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={120} 
                    height={45} 
                    src='/ss-img/sway_ai.png' 
                    alt='This is contextual image' />
                </li>
                <li className='ss-img-box' >
                    <Image 
                    width={140} 
                    height={45} 
                    src='/ss-img/uniphore.png' 
                    alt='This is contextual image' />
                </li>
            </ul>
        </li>
    </ul>
    </>)
}