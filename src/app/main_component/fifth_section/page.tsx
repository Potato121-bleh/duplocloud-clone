'use client'

import { useEffect } from 'react'
import './fifth_section.css'
import Image from 'next/image'
import { stringify } from 'querystring'

export default function Fifth_section(){
    
    useEffect(() => {
        let text_box1 = document.querySelectorAll(".fifth-content-text-first")
        let text_box2 = document.querySelectorAll(".fifth-content-text-second")
        let text_box3 = document.querySelectorAll(".fifth-content-text-last")
        let img_box1 = document.getElementById('fifth-first-img-id')
        let img_box2 = document.getElementById('fifth-second-img-id')
        let img_box3 = document.getElementById('fifth-last-img-id')

        let observer_first = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.target == text_box1[0]){
                    img_box1?.classList.toggle('display', entry.isIntersecting)
                }
                else if(entry.target == text_box2[0]){
                    img_box2?.classList.toggle('display', entry.isIntersecting)
                }
                else if(entry.target == text_box3[0]){
                    img_box3?.classList.toggle('display', entry.isIntersecting)
                }
            })
        },{
            threshold: 0.3
        })

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
    


    return(<>
        <ul className='fifth-main-con' >
            <li className='fifth-title-con' >
                <h1 id='fifth-title' >Streamline, Secure, and Scale DevOps Processes</h1>
            </li>
            <ul className='fifth-content-con' >
                <ul className='fifth-img-con' >
                    <li className='fifth-img-element' id='fifth-first-img-id' >
                        <Image  className='fifth-img' 
                                width={550} 
                                height={300} 
                                src='/timeline_img/streamline-operations_img.png' 
                                alt='This is an image of timeline'  />
                    </li>
                    <li className='fifth-img-element' id='fifth-second-img-id' >
                        <Image  className='fifth-img' 
                                width={550} 
                                height={300} 
                                src='/timeline_img/unbeatable-security-compliance_img.png' 
                                alt='This is an image of timeline'  />
                    </li>
                    <li className='fifth-img-element' id='fifth-last-img-id' >
                        <Image  className='fifth-img' 
                                width={550} 
                                height={300} 
                                src='/timeline_img/scalability-flexibility_img.png' 
                                alt='This is an image of timeline'  />
                    </li>
                </ul>
                <li className='fifth-middle-line-con'>
                    <div className='fifth-middle-line-block fifth-top-block' ></div>
                    <div className='fifth-middle-line-block fifth-middle-block' ></div>
                    <div className='fifth-middle-line-block fifth-last-block' ></div>
                </li>
                <ul className='fifth-content-text-con' >
                    <li className='fifth-content-text fifth-content-text-first fifth-first-text-con' >
                        <h1 className='fifth-h1-text' >Streamline Operations</h1>
                        <p>Take the guesswork out of cloud infrastructure orchestration with 
                            DuploCloud's out-of-the-box provisioning and deployment capabilities.</p>
                    </li>
                    <li className='fifth-content-text fifth-content-text-second' >
                        <h1 className='fifth-h1-text' >Unbeatable Security & Compliance</h1>
                        <p>Cloud infrastructure is automatically provisioned with the most stringent
                             DevSecOp controls the first time that adhere to today’s compliance standards
                            like SOC 2, PCI-DSS, HIPAA, HITRUST, GDPR, NIST, and others.</p>
                    </li>
                    <li className='fifth-content-text fifth-content-text-last' >
                        <h1 className='fifth-h1-text' >Scalability & Flexibility</h1>
                        <p>DuploCloud helps you save time and money through automation and orchestration.
                             Our all-in-one solution eliminates the need for additional tools or services, giving you unbeatable value for 
                             your money and giving your team back 75% more time to focus on what matters.</p>
                    </li>
                </ul>
            </ul>
        </ul>
    </>)
}