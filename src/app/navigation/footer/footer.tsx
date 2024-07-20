'use client'
import './footer.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    const handleDropDownCompliance = () => {
        let compliance = document.getElementById(
            'footer-first-child-id'
        ) as HTMLElement
        let firstchildArrow = document.getElementById(
            'footer-arrow-id-firstchild'
        ) as HTMLElement
        compliance.classList.toggle('increase-height')
        firstchildArrow.classList.toggle('spin-arrow')
    }
    const handleDropDownIntegrations = () => {
        let integrations = document.getElementById(
            'footer-second-child-id'
        ) as HTMLElement
        let secondchildArrow = document.getElementById(
            'footer-arrow-id-secondchild'
        ) as HTMLElement

        secondchildArrow.classList.toggle('spin-arrow')
        integrations.classList.toggle('increase-height-forintegrations')
    }
    const handleDropDownSolution = () => {
        let solution = document.getElementById(
            'footer-third-child-id'
        ) as HTMLElement
        let thirdchildArrow = document.getElementById(
            'footer-arrow-id-thirdchild'
        ) as HTMLElement

        thirdchildArrow.classList.toggle('spin-arrow')
        solution.classList.toggle('increase-height')
    }

    return (
        <footer className="footer-main-con">
            <ul className="footer-con">
                <ul
                    className="footer-first-child dropdown-formobile"
                    id="footer-first-child-id"
                >
                    <li className="footer-firstchild-header footer-header-mobile">
                        <h1>Compliance Standards</h1>
                        <FontAwesomeIcon
                            id="footer-arrow-id-firstchild"
                            onClick={handleDropDownCompliance}
                            className="footer-arrow-icon"
                            icon={faChevronDown}
                        />
                    </li>
                    <ul className="footer-firstchild-body">
                        <li className="footer-firstchild-body-left">
                            <h5>SOC 2</h5>
                            <h5>HIPAA</h5>
                            <h5>PCI-DSS</h5>
                            <h5>FedRAMP</h5>
                        </li>
                        <li className="footer-firstchild-body-right">
                            <h5>HITRUST</h5>
                            <h5>GDPR</h5>
                            <h5>NIST</h5>
                            <h5>ISO</h5>
                            <p>Custom</p>
                        </li>
                    </ul>
                </ul>

                <ul
                    className="footer-second-child dropdown-formobile"
                    id="footer-second-child-id"
                >
                    <li className="footer-secondchild-header footer-header-mobile">
                        <h1>Integrations</h1>
                        <FontAwesomeIcon
                            id="footer-arrow-id-secondchild"
                            onClick={handleDropDownIntegrations}
                            className="footer-arrow-icon"
                            icon={faChevronDown}
                        />
                    </li>
                    <li className="footer-secondchild-body">
                        <h5>Terraform</h5>
                        <h5>Kubernetes</h5>
                        <h5>CircleCI</h5>
                        <h5>GitLab</h5>
                        <h5>GitHub</h5>
                        <h5>Prometheus</h5>
                        <p>All Integrations</p>
                    </li>
                </ul>

                <ul
                    className="footer-third-child dropdown-formobile"
                    id="footer-third-child-id"
                >
                    <li className="footer-thirdchild-header footer-header-mobile">
                        <h1>Solutions</h1>
                        <FontAwesomeIcon
                            id="footer-arrow-id-thirdchild"
                            onClick={handleDropDownSolution}
                            className="footer-arrow-icon"
                            icon={faChevronDown}
                        />
                    </li>
                    <li className="footer-thirdchild-body">
                        <h5>DevOps Automation</h5>
                        <h5>Cloud Migration Services</h5>
                        <h5>Security and Compliance</h5>
                        <h5>Platform Engineering</h5>
                    </li>
                </ul>

                <ul className="footer-last-child" id="footer-last-child-id">
                    <li className="footer-lastchild-header footer-header-mobile">
                        <h1>Headquarters</h1>
                    </li>
                    <ul className="footer-lastchild-body">
                        <li className="footer-lastchild-body-left">
                            <h5>2150 N 1st St San Jose, CA 95131</h5>
                            <h5>+1 (866) 830-6588</h5>
                        </li>
                        <li className="footer-lastchild-body-right">
                            <Image
                                id="rate-us-img-id"
                                width={120}
                                height={70}
                                src="/footer/rate-board.png"
                                alt="This is an img of rate us"
                            />
                        </li>
                    </ul>

                    <ul className="footer-afterlastchild-con">
                        <li className="footer-afterlastchild-header">
                            <h1>Find us on social media</h1>
                        </li>
                        <li className="footer-afterlastchild-img-con">
                            <Image
                                width={230}
                                height={28}
                                src="/footer/social-media.png"
                                alt="This is an image of social media"
                            />
                        </li>
                        <p>Helpful Resources</p>
                    </ul>
                </ul>
            </ul>
            <div className="footer-soc-con">
                <Image
                    width={60}
                    height={60}
                    src="/footer/SOC.png"
                    alt="This is soc2 img"
                />
                <div className="footer-soc-text">
                    <p>We are SOC2</p>
                    <p>Type 2 Compliant</p>
                </div>
            </div>

            <section className="copyright-main-con">
                <ul className="copyright-con">
                    <li className="copyright-company-logo-con">
                        <Image
                            id="copyright-company-logo-id"
                            width={60}
                            height={50}
                            src="/footer/Duplocloud.png"
                            alt="This is an image of duplocloud logo"
                        />
                        <h1>DuploCloud</h1>
                    </li>
                    <li className="copyright-date">
                        Copyright © 2024 DuploCloud, Inc.
                    </li>
                    <li className="copyright-cookie-policy">
                        <span className="copyright-span">Cookie Policy</span> |{' '}
                        <span className="copyright-span">Privacy Policy</span>
                    </li>
                </ul>
            </section>
        </footer>
    )
}
