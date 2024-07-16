'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import './slidebox.css'
import Line from '@/app/component/line/line'
import ButtonTemplate from '@/app/component/buttonTemplate/ButtonTemplate'

type lastcheckType = {
    lastchild: HTMLElement
    lastchildText: Element
}
type firstcheckType = {
    firstchild: HTMLElement
    firstchildText: Element
}
type secondcheckType = {
    secondchild: HTMLElement
    secondchildText: Element
}
type thirdcheckType = {
    thirdchild: HTMLElement
    thirdchildText: Element
}

export default function Slidecard() {
    const handlelastchild = ({ lastchild, lastchildText }: lastcheckType) => {
        lastchild.classList.remove('slidebox-increase-width')
        lastchildText.classList.remove('slidebox-hidden-text')
    }
    const handlefirstchild = ({
        firstchild,
        firstchildText,
    }: firstcheckType) => {
        firstchild.classList.remove('slidebox-increase-width')
        firstchildText.classList.remove('slidebox-hidden-text')
    }
    const handlesecondchild = ({
        secondchild,
        secondchildText,
    }: secondcheckType) => {
        secondchild.classList.remove('slidebox-increase-width')
        secondchildText.classList.remove('slidebox-hidden-text')
    }
    const handlethirdchild = ({
        thirdchild,
        thirdchildText,
    }: thirdcheckType) => {
        thirdchild.classList.remove('slidebox-increase-width')
        thirdchildText.classList.remove('slidebox-hidden-text')
    }

    useEffect(() => {
        let firstchild = document.getElementById(
            'slidebox-firstchild-id'
        ) as HTMLElement
        let secondchild = document.getElementById(
            'slidebox-secondchild-id'
        ) as HTMLElement
        let thirdchild = document.getElementById(
            'slidebox-thirdchild-id'
        ) as HTMLElement
        let lastchild = document.getElementById(
            'slidebox-lastchild-id'
        ) as HTMLElement

        let firstchildText = document.getElementById(
            'slidebox-firstchild-text-id'
        ) as HTMLElement
        let secondchildText = document.getElementById(
            'slidebox-secondchild-text-id'
        ) as HTMLElement
        let thirdchildText = document.getElementById(
            'slidebox-thirdchild-text-id'
        ) as HTMLElement
        let lastchildText = document.getElementById(
            'slidebox-lastchild-text-id'
        ) as HTMLElement

        firstchild.classList.add('slidebox-increase-width')
        firstchild.classList.contains('slidebox-increase-width')
            ? firstchildText.classList.add('slidebox-hidden-text')
            : console.log('')

        firstchild.addEventListener('mouseover', () => {
            firstchild.classList.add('slidebox-increase-width')
            firstchildText.classList.add('slidebox-hidden-text')
            handlesecondchild({ secondchild, secondchildText })
            handlethirdchild({ thirdchild, thirdchildText })
            handlelastchild({ lastchild, lastchildText })
        })
        secondchild.addEventListener('mouseover', () => {
            secondchild.classList.add('slidebox-increase-width')
            secondchildText.classList.add('slidebox-hidden-text')
            handlefirstchild({ firstchild, firstchildText })
            handlethirdchild({ thirdchild, thirdchildText })
            handlelastchild({ lastchild, lastchildText })
        })
        thirdchild.addEventListener('mouseover', () => {
            thirdchild.classList.add('slidebox-increase-width')
            thirdchildText.classList.add('slidebox-hidden-text')
            handlefirstchild({ firstchild, firstchildText })
            handlesecondchild({ secondchild, secondchildText })
            handlelastchild({ lastchild, lastchildText })
        })
        lastchild.addEventListener('mouseover', () => {
            lastchild.classList.add('slidebox-increase-width')
            lastchildText.classList.add('slidebox-hidden-text')
            handlefirstchild({ firstchild, firstchildText })
            handlethirdchild({ thirdchild, thirdchildText })
            handlesecondchild({ secondchild, secondchildText })
        })
    })

    return (
        <>
            <section className="slidebox-main-con">
                <ul className="slidebox-child" id="slidebox-firstchild-id">
                    <li
                        className="slidebox-child-text"
                        id="slidebox-firstchild-text-id"
                    >
                        <h1>Automated Provisioning</h1>
                    </li>
                    <li className="slidebox-child-mid-text-con">
                        <h1>Automated Provisioning</h1>
                        <p>
                            Our intelligent rules-based engine efficiently and
                            securely provisions cloud services to meet demand
                            with dynamic adjustments, enhanced by Terraform
                            compatibility for streamlined resource management.
                        </p>
                    </li>
                    <li className="slidebox-child-style line1">
                        <Line color="blue-line" colorTop="blue-top-line" />
                    </li>
                    <li className="slidebox-child-style line2">
                        <Line color="blue-line" colorTop="blue-top-line" />
                    </li>
                </ul>

                <ul className="slidebox-child" id="slidebox-secondchild-id">
                    <li
                        className="slidebox-child-text"
                        id="slidebox-secondchild-text-id"
                    >
                        <h1>Cloud Services</h1>
                    </li>
                    <li className="slidebox-child-mid-text-con">
                        <h1>Cloud Services</h1>
                        <p>
                            Streamline application and data management,
                            enhancing operational efficiency and allowing your
                            team to focus on strategic tasks, while the platform
                            handles routine operations.
                        </p>
                    </li>
                    <li className="slidebox-child-style line1">
                        <Line color="yellow-line" colorTop="yellow-top-line" />
                    </li>
                    <li className="slidebox-child-style line2">
                        <Line color="yellow-line" colorTop="yellow-top-line" />
                    </li>
                </ul>

                <ul className="slidebox-child" id="slidebox-thirdchild-id">
                    <li
                        className="slidebox-child-text"
                        id="slidebox-thirdchild-text-id"
                    >
                        <h1>Security & Compliance</h1>
                    </li>
                    <li className="slidebox-child-mid-text-con">
                        <h1>Security & Compliance</h1>
                        <p>
                            Seamlessly integrate top-tier security controls into
                            your applications, ensuring adherence to the latest
                            industry compliance standards.
                        </p>
                    </li>
                    <li className="slidebox-child-style line1">
                        <Line color="red-line" colorTop="red-top-line" />
                    </li>
                    <li className="slidebox-child-style line2">
                        <Line color="red-line" colorTop="red-top-line" />
                    </li>
                </ul>

                <ul className="slidebox-child" id="slidebox-lastchild-id">
                    <li
                        className="slidebox-child-text"
                        id="slidebox-lastchild-text-id"
                    >
                        <h1>Diagnostics & Monitoring</h1>
                    </li>
                    <li className="slidebox-child-mid-text-con">
                        <h1>Diagnostics & Monitoring</h1>
                        <p>
                            Advanced DevOps security and comprehensive
                            diagnostics work together to continuously monitor
                            cloud health and cybersecurity threats, ensuring the
                            safety of your business.
                        </p>
                    </li>
                    <li className="slidebox-child-style line1">
                        <Line color="green-line" colorTop="green-top-line" />
                    </li>
                    <li className="slidebox-child-style line2">
                        <Line color="green-line" colorTop="green-top-line" />
                    </li>
                </ul>
            </section>

            <section className="slidebox-bottom-con">
                <ul className="slidebox-bottom-btn-con">
                    <li>
                        <ButtonTemplate
                            title="EXPLORE THE PLATFORM"
                            bgColor="blue"
                            txtColor="white"
                        />
                    </li>
                    <li>
                        <ButtonTemplate
                            title="DEVELOPER DOCUMENTATION"
                            bgColor="blue"
                            txtColor="white"
                        />
                    </li>
                </ul>
                <h1 id="slidebox-bottom-text">
                    <span id="slidebox-span-one">Cloud Services</span> and{' '}
                    <span id="slidebox-span-two">On-Prem</span>
                </h1>
                <ul className="slidebox-company-con">
                    <ul className="slidebox-company-child">
                        <li className="slidebox-company-element">
                            <div className="slidebox-company-forhover">
                                <Image
                                    id="slidebox-company-img"
                                    width={70}
                                    height={50}
                                    src="/company logo/aws_logo.png"
                                    alt="This is aws logo"
                                />
                                <h5>AWS</h5>
                            </div>
                        </li>
                        <li className="slidebox-company-element">
                            <div className="slidebox-company-forhover">
                                <Image
                                    id="slidebox-company-img"
                                    width={70}
                                    height={50}
                                    src="/company logo/azure_logo.png"
                                    alt="This is aws logo"
                                />
                                <h5>AZURE</h5>
                            </div>
                        </li>
                        <li className="slidebox-company-element">
                            <div className="slidebox-company-forhover">
                                <Image
                                    id="slidebox-company-img"
                                    width={70}
                                    height={50}
                                    src="/company logo/gcp_logo.png"
                                    alt="This is aws logo"
                                />
                                <h5>GCP</h5>
                            </div>
                        </li>
                    </ul>
                    <li className="slidebox-company-element">
                        <div className="slidebox-company-forhover">
                            <Image
                                id="slidebox-company-img"
                                width={70}
                                height={50}
                                src="/company logo/on-prem_logo.png"
                                alt="This is aws logo"
                            />
                            <h5>On-Prem</h5>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}
