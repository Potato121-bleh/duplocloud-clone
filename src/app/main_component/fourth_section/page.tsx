'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './four_section.css'
import {firstcheckType, secondcheckType, thirdcheckType, lastcheckType} from './../../type/fourth_section'
import Style_line from '@/app/component/style_line/page';
import Button_template from '@/app/component/button_template/page';

export default function Fourth_section(){
    
    const handlelastchild = ({lastchild, lastchild_text}:lastcheckType) => {
        lastchild.classList.remove('fourth-increase-width')
        lastchild_text.classList.remove('fourth-hidden-text')
    }
    const handlefirstchild = ({firstchild, firstchild_text}:firstcheckType) => {
        firstchild.classList.remove('fourth-increase-width')
        firstchild_text.classList.remove('fourth-hidden-text')
    }
    const handlesecondchild = ({secondchild, secondchild_text}:secondcheckType) => {
        secondchild.classList.remove('fourth-increase-width')
        secondchild_text.classList.remove('fourth-hidden-text')
    }
    const handlethirdchild = ({thirdchild, thirdchild_text}:thirdcheckType) => {
        thirdchild.classList.remove('fourth-increase-width')
        thirdchild_text.classList.remove('fourth-hidden-text')
    }

    useEffect(() => {
        let firstchild = document.getElementById('fourth-firstchild-id') as HTMLElement
        let secondchild = document.getElementById('fourth-secondchild-id') as HTMLElement
        let thirdchild = document.getElementById('fourth-thirdchild-id') as HTMLElement
        let lastchild = document.getElementById('fourth-lastchild-id') as HTMLElement

        let firstchild_text = document.getElementById('fourth-firstchild-text-id') as HTMLElement
        let secondchild_text = document.getElementById('fourth-secondchild-text-id') as HTMLElement
        let thirdchild_text = document.getElementById('fourth-thirdchild-text-id') as HTMLElement
        let lastchild_text = document.getElementById('fourth-lastchild-text-id') as HTMLElement

        firstchild.classList.add('fourth-increase-width')
        firstchild.classList.contains('fourth-increase-width')? firstchild_text.classList.add('fourth-hidden-text') : console.log('')

            firstchild.addEventListener('mouseover', () => {
                firstchild.classList.add('fourth-increase-width')
                firstchild_text.classList.add('fourth-hidden-text')
                handlesecondchild({secondchild, secondchild_text})
                handlethirdchild({thirdchild, thirdchild_text})
                handlelastchild({lastchild, lastchild_text})
            })
            secondchild.addEventListener('mouseover', () => {
                secondchild.classList.add('fourth-increase-width')
                secondchild_text.classList.add('fourth-hidden-text')
                handlefirstchild({firstchild, firstchild_text})
                handlethirdchild({thirdchild, thirdchild_text})
                handlelastchild({lastchild, lastchild_text})
            })
            thirdchild.addEventListener('mouseover', () => {
                thirdchild.classList.add('fourth-increase-width')
                thirdchild_text.classList.add('fourth-hidden-text')
                handlefirstchild({firstchild, firstchild_text})
                handlesecondchild({secondchild, secondchild_text})
                handlelastchild({lastchild, lastchild_text})
            })
            lastchild.addEventListener('mouseover', () => {
                lastchild.classList.add('fourth-increase-width')
                lastchild_text.classList.add('fourth-hidden-text')
                handlefirstchild({firstchild, firstchild_text})
                handlethirdchild({thirdchild, thirdchild_text})
                handlesecondchild({secondchild, secondchild_text})
            })
    })

    return(<>
    <ul className="fourth-main-con" >
        <ul className="fourth-child" id='fourth-firstchild-id' >
            <li className='fourth-child-text' id='fourth-firstchild-text-id' >
                <h1>Automated Provisioning</h1>
            </li>
            <li className='fourth-child-mid-text-con' >
                <h1 >Automated Provisioning</h1>
                <p>Our intelligent rules-based engine efficiently and securely provisions
                     cloud services to meet demand with dynamic adjustments, enhanced by 
                     Terraform compatibility for streamlined resource management.</p>
            </li>
            <li className='fourth-child-style line1' >            
                <Style_line 
                color='blue-line' 
                color_top='blue-top-line' />
            </li>
            <li className='fourth-child-style line2' >            
                <Style_line 
                color='blue-line' 
                color_top='blue-top-line' />
            </li>
        </ul>


        <ul className="fourth-child" id='fourth-secondchild-id' >
            <li className='fourth-child-text' id='fourth-secondchild-text-id' >
                <h1>Cloud Services</h1>
            </li>
            <li className='fourth-child-mid-text-con' >
                <h1>Cloud Services</h1>
                <p>
                    Streamline application and data management, enhancing operational efficiency
                     and allowing your team to focus on strategic tasks, while the platform handles
                      routine operations.</p>
            </li>
            <li className='fourth-child-style line1' >            
                <Style_line 
                color='yellow-line' 
                color_top='yellow-top-line' />
            </li>
            <li className='fourth-child-style line2' >            
                <Style_line 
                color='yellow-line' 
                color_top='yellow-top-line' />
            </li>
        </ul>

        <ul className="fourth-child" id='fourth-thirdchild-id' >
            <li className='fourth-child-text' id='fourth-thirdchild-text-id' >
                <h1>Security & Compliance</h1>
            </li>
            <li className='fourth-child-mid-text-con' >
                <h1 >Security & Compliance</h1>
                <p>
                    Seamlessly integrate top-tier security controls into your applications, 
                    ensuring adherence to the latest industry compliance standards.
                    </p>
            </li>
            <li className='fourth-child-style line1' >            
                <Style_line 
                color='red-line' 
                color_top='red-top-line' />
            </li>
            <li className='fourth-child-style line2' >            
                <Style_line 
                color='red-line' 
                color_top='red-top-line' />
            </li>
        </ul>


        <ul className="fourth-child" id='fourth-lastchild-id' >
            <li className='fourth-child-text' id='fourth-lastchild-text-id' >
                <h1>Diagnostics & Monitoring</h1>
            </li>
            <li className='fourth-child-mid-text-con' >
                <h1 >Diagnostics & Monitoring</h1>
                <p>
                    Advanced DevOps security and comprehensive diagnostics work together 
                    to continuously monitor cloud health and cybersecurity threats, ensuring 
                    the safety of your business.
                    </p>
            </li>
            <li className='fourth-child-style line1' >            
                <Style_line 
                color='green-line' 
                color_top='green-top-line' />
            </li>
            <li className='fourth-child-style line2' >            
                <Style_line 
                color='green-line' 
                color_top='green-top-line' />
            </li>
        </ul>
    </ul>
    <ul className='fourth-bottom-con' >
        <ul className='fourth-bottom-btn-con' >
            <li>
                <Button_template 
                title='EXPLORE THE PLATFORM' 
                bg_color='blue' 
                txt_color='white'/>
            </li>
            <li>
                <Button_template 
                title='DEVELOPER DOCUMENTATION' 
                bg_color='blue' 
                txt_color='white'/>
            </li>
        </ul>
        <h1 id='fourth-bottom-text' > 
            <span id='fourth-span-one'>
                Cloud Services 
            </span> 
             and 
            <span id='fourth-span-two'> 
                 On-Prem
            </span>
        </h1>
        <ul className='fourth-company-con' >
            <ul className='fourth-company-child' >
                <li className='fourth-company-element' >
                    <div className='fourth-company-forhover'>
                        <Image 
                        id='fourth-company-img' 
                        width={70} 
                        height={50} 
                        src='/company logo/aws_logo.png' 
                        alt='This is aws logo' />
                        <h5>AWS</h5>
                    </div>
                </li>
                <li className='fourth-company-element' >
                    <div className='fourth-company-forhover'>
                        <Image 
                        id='fourth-company-img' 
                        width={70} 
                        height={50} 
                        src='/company logo/azure_logo.png' 
                        alt='This is aws logo' />
                        <h5>AZURE</h5>
                    </div>
                    
                </li>
                <li className='fourth-company-element' >
                    <div className='fourth-company-forhover' >
                        <Image 
                        id='fourth-company-img' 
                        width={70} 
                        height={50} 
                        src='/company logo/gcp_logo.png' 
                        alt='This is aws logo' />
                        <h5>GCP</h5>
                    </div>
                </li>
            </ul>
            <li className='fourth-company-element' >
                <div className='fourth-company-forhover' >
                    <Image 
                    id='fourth-company-img' 
                    width={70} 
                    height={50} 
                    src='/company logo/on-prem_logo.png' 
                    alt='This is aws logo' />
                    <h5>On-Prem</h5>
                </div>
            </li>
        </ul>
    </ul>
    </>)
}