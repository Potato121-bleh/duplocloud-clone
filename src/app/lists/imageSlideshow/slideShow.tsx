import './imageSlideshow.css'
import Image from 'next/image'

/**
 * Image slide show
 * @returns
 */
export default function SlideShow() {
    const imageInfo = [
        {
            id: 1,
            width: 135,
            height: 33,
            src: '/slideshow-img/contextual.png',
            alt: 'This is contextual image',
        },
        {
            id: 2,
            width: 130,
            height: 45,
            src: '/slideshow-img/techstyle.png',
            alt: 'This is techstyle image',
        },
        {
            id: 3,
            width: 140,
            height: 45,
            src: '/slideshow-img/bloc_power.png',
            alt: 'This is bloc_power image',
        },
        {
            id: 4,
            width: 135,
            height: 45,
            src: '/slideshow-img/city_innovate.png',
            alt: 'This is city_innovate image',
        },
        {
            id: 5,
            width: 130,
            height: 45,
            src: '/slideshow-img/clearstep.png',
            alt: 'This is clearstep image',
        },
        {
            id: 6,
            width: 130,
            height: 45,
            src: '/slideshow-img/kami_vision.png',
            alt: 'This is kami_vision image',
        },
        {
            id: 7,
            width: 110,
            height: 45,
            src: '/slideshow-img/rodo.png',
            alt: 'This is rodo image',
        },
        {
            id: 8,
            width: 130,
            height: 45,
            src: '/slideshow-img/lily_ai.png',
            alt: 'This is lily_ai image',
        },
        {
            id: 9,
            width: 110,
            height: 45,
            src: '/slideshow-img/spotnana.png',
            alt: 'This is spotnana image',
        },
        {
            id: 10,
            width: 120,
            height: 45,
            src: '/slideshow-img/sway_ai.png',
            alt: 'This is sway_ai image',
        },
        {
            id: 11,
            width: 140,
            height: 45,
            src: '/slideshow-img/uniphore.png',
            alt: 'This is uniphore image',
        },
    ]
    return (
        <section className="slideshow-main-con">
            <li className="slideshow-top-title-con">
                <div className="slideshow-top-title-subcon">
                    <h1 id="slideshow-top-title">
                        Trusted by Thousands, including the Hottest AI/ML
                        Startups to Fuel Innovation, Efficiency, and Growth
                    </h1>
                </div>
            </li>
            <li className="slideshow-img-con">
                <ul className="slideshow-img-4scroll">
                    {imageInfo.map((element) => {
                        return (
                            <li key={element.id} className="slideshow-img-box">
                                <Image
                                    width={`${element.width}`}
                                    height={`${element.height}`}
                                    src={`${element.src}`}
                                    alt={`${element.alt}`}
                                />
                            </li>
                        )
                    })}
                </ul>
            </li>
        </section>
    )
}
