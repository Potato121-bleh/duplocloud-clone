import Image from 'next/image'
import './component/buttonTemplate/button.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonTemplate from './component/buttonTemplate/ButtonTemplate'
import Line from './component/line/line'
import SlideShow from './mainComponent/imageSlideshow/slideShow'
import IntroSlidebox from './mainComponent/introSlideBox/introSlidebox'
import Slidecard from './mainComponent/slidebox/slidebox'
import Timeline from './mainComponent/timeline/timeline'
import SolutionCard from './mainComponent/solutionCard/solutionCard'
import CalculateSaving from './mainComponent/calculateSaving/calulateSaving'
import TechIntegrations from './mainComponent/techIntegrations/techIntegrations'
import Testimonials from './mainComponent/testimonials/testimonials'
import Achievement from './mainComponent/achievement/achievement'
import Footer from './mainComponent/footer/footer'

export default function Home() {
    return (
        <>
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
                        <ButtonTemplate
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
            <Footer />
        </>
    )
}
