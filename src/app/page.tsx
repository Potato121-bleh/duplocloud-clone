import Image from 'next/image'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './element/button/button'
import Line from './element/line/line'
import SlideShow from './lists/imageSlideshow/slideShow'
import IntroSlidebox from './lists/introSlideBox/introSlidebox'
import Slidecard from './lists/slidebox/slidebox'
import Timeline from './dataDisplay/timeline/timeline'
import SolutionCard from './lists/solutionCard/solutionCard'
import CalculateSaving from './dataDisplay/calculateSaving/calulateSaving'
import TechIntegrations from './dataDisplay/techIntegrations/techIntegrations'
import Testimonials from './dataDisplay/testimonials/testimonials'
import Achievement from './dataDisplay/achievement/achievement'

export default function Home() {
    return (
        <>
            <h1 className="top-page-title-formobile">DevOps On Autopilot</h1>
            <section className="firstsection-main-con">
                <li className="firstsection-left-con">
                    <h1 id="firstsection-title">DevOps on Autopilot</h1>
                    <p>
                        Our DevOps Automation Platform, combined with
                        subject-matter experts virtually eliminates your DevOps
                        hiring needs. Provision and maintain a secure and
                        compliant infrastructure in days - not months!
                    </p>
                    <div className="firstsection-left-btn-con">
                        <Button
                            title="GET A DEMO"
                            txtColor=""
                            bgColor="green"
                        />
                        <button
                            className={`btn-template blue white firstsection-extra-margin`}
                        >
                            <FontAwesomeIcon
                                className="firstsection-play-icon-btn"
                                icon={faPlay}
                            />
                            SEE THE PLATFORM
                        </button>
                    </div>
                </li>
                <li className="firstsection-right-con">
                    <Image
                        id="firstsection-animation"
                        width={300}
                        height={300}
                        src="/duplocloud animation.png"
                        alt="This is an detail image"
                    />
                    <div className="firstsection-style-line-con">
                        <Line color="yellow-line" colorTop="yellow-top-line" />
                    </div>
                </li>
            </section>
            <SlideShow />
            <IntroSlidebox />
            <Slidecard />
            <Timeline />
            <SolutionCard />
            <CalculateSaving />
            <TechIntegrations />
            <Testimonials />
            <Achievement />
        </>
    )
}
