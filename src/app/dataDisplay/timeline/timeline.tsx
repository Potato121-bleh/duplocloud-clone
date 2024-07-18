'use client'

import { useEffect } from 'react'
import './timeline.css'
import Image from 'next/image'

export default function Timeline() {
    useEffect(() => {
        let text_box1 = document.querySelectorAll(
            '.timeline-content-text-first'
        )
        let text_box2 = document.querySelectorAll(
            '.timeline-content-text-second'
        )
        let text_box3 = document.querySelectorAll('.timeline-content-text-last')
        let img_box1 = document.getElementById('timeline-first-img-id')
        let img_box2 = document.getElementById('timeline-second-img-id')
        let img_box3 = document.getElementById('timeline-last-img-id')

        let observer_first = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target == text_box1[0]) {
                        img_box1?.classList.toggle(
                            'display',
                            entry.isIntersecting
                        )
                    } else if (entry.target == text_box2[0]) {
                        img_box2?.classList.toggle(
                            'display',
                            entry.isIntersecting
                        )
                    } else if (entry.target == text_box3[0]) {
                        img_box3?.classList.toggle(
                            'display',
                            entry.isIntersecting
                        )
                    }
                })
            },
            {
                threshold: 0.3,
            }
        )

        text_box1.forEach((element) => {
            observer_first.observe(element)
        })
        text_box2.forEach((element) => {
            observer_first.observe(element)
        })
        text_box3.forEach((element) => {
            observer_first.observe(element)
        })
    })

    return (
        <section className="timeline-main-con">
            <li className="timeline-title-con">
                <h1 id="timeline-title">
                    Streamline, Secure, and Scale DevOps Processes
                </h1>
            </li>
            <ul className="timeline-content-con">
                <ul className="timeline-img-con">
                    <li
                        className="timeline-img-element"
                        id="timeline-first-img-id"
                    >
                        <Image
                            className="timeline-img"
                            width={550}
                            height={300}
                            src="/timeline_img/streamline-operations_img.png"
                            alt="This is an image of timeline"
                        />
                    </li>
                    <li
                        className="timeline-img-element"
                        id="timeline-second-img-id"
                    >
                        <Image
                            className="timeline-img"
                            width={550}
                            height={300}
                            src="/timeline_img/unbeatable-security-compliance_img.png"
                            alt="This is an image of timeline"
                        />
                    </li>

                    <li
                        className="timeline-img-element"
                        id="timeline-last-img-id"
                    >
                        <Image
                            className="timeline-img"
                            width={550}
                            height={300}
                            src="/timeline_img/scalability-flexibility_img.png"
                            alt="This is an image of timeline"
                        />
                    </li>
                </ul>
                <li className="timeline-middle-line-con">
                    <div className="timeline-middle-line-block timeline-top-block"></div>
                    <div className="timeline-middle-line-block timeline-middle-block"></div>
                    <div className="timeline-middle-line-block timeline-last-block"></div>
                </li>
                <ul className="timeline-content-text-con">
                    <li className="timeline-content-text timeline-content-text-first timeline-first-text-con">
                        <h1 className="timeline-h1-text">
                            Streamline Operations
                        </h1>
                        <p>
                            Take the guesswork out of cloud infrastructure
                            orchestration with DuploCloud's out-of-the-box
                            provisioning and deployment capabilities.
                        </p>
                    </li>
                    <li className="timeline-content-text timeline-content-text-second">
                        <h1 className="timeline-h1-text">
                            Unbeatable Security & Compliance
                        </h1>
                        <p>
                            Cloud infrastructure is automatically provisioned
                            with the most stringent DevSecOp controls the first
                            time that adhere to today’s compliance standards
                            like SOC 2, PCI-DSS, HIPAA, HITRUST, GDPR, NIST, and
                            others.
                        </p>
                    </li>
                    <li className="timeline-content-text timeline-content-text-last">
                        <h1 className="timeline-h1-text">
                            Scalability & Flexibility
                        </h1>
                        <p>
                            DuploCloud helps you save time and money through
                            automation and orchestration. Our all-in-one
                            solution eliminates the need for additional tools or
                            services, giving you unbeatable value for your money
                            and giving your team back 75% more time to focus on
                            what matters.
                        </p>
                    </li>
                </ul>
            </ul>
        </section>
    )
}
