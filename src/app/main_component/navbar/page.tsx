import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import logo from './../../../../public/Duplocloud_logo.png'


//Component 
import Listof from './navbarcom/listchild_template'
import Listofblock from './navbarcom/listblock_template'



//<FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-up" />

export default function Navbar(){
    return(<>
    <ul className="navbar-main-con" >
        <li className="navbar-logo-con" >
            <Image id='logo' src={logo} alt='This is an logo image' />
            <h1 id='logo-title' >DuploCloud</h1>
        </li>
        <ul className="navbar-list-con" >
            <li className='navbar-list-child navbar-first-child'  >
                <p className='navbar-p' >Platform</p>
                <FontAwesomeIcon className='navbar-arrow-icon'  icon={faChevronDown} />
                <div className='navbar-subchild-con subchild-p' >
                    <div className='navbar-subchild-left-con'>
                        <div className='navbar-subchild-header' >
                            <Image id='feature-icon' width={23} height={23} src='/Feature.png' alt='This is an feature icon'/>
                            <p className='navbar-list-subchild-header-title changecolor-title' >Features</p>
                        </div>
                        <div className='navbar-subchild-leftelement-con1' >
                            <ul className='navbar-subchild-element1 subchild-left' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Platform Overview' 
                                            unique='changecolor-title' 
                                            dd='Explore the entire' 
                                            dd_second='DuploCloud Platform' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Automated Provisioning' 
                                            unique='' 
                                            dd='Efficient and scalable' 
                                            dd_second='resource management' />
                                    </li>
                                    <li className='navbar-subchild-text-con' >
                                        <Listof title='Cloud Services' 
                                                unique='' 
                                                dd='Streamlined Multi-Cloud' 
                                                dd_second='Service Management' />
                                    </li>
                                    <li className='navbar-subchild-text-con' >
                                        <Listof title='CI / CD' 
                                                unique='' 
                                                dd='Efficient CI / CD for' 
                                                dd_second='Streamlined Development' />
                                    </li>
                            </ul>
                            <ul className='navbar-subchild-element1 subchild-right' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Security' 
                                            unique='' 
                                            dd='Round-the-clock-security' 
                                            dd_second='and compliance' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Compliance' 
                                            unique='' 
                                            dd='Delivering out-of-the-box' 
                                            dd_second='compliance controls' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Diagnostics & Monitoring' 
                                            unique='' 
                                            dd='Optimize performance with' 
                                            dd_second='real-time monitoring' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Intergrations' 
                                            unique='' 
                                            dd='Effortless integration with' 
                                            dd_second='500+ cloud services' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='navbar-subchild-right-con' >
                        <div className='navbar-subchild-header' >
                            <Image id='feature-icon' 
                                    width={23} 
                                    height={23} 
                                    src='/For_team.png' 
                                    alt='This is an for_team icon'/>
                            <p className='navbar-list-subchild-header-title changecolor-title ' >For Teams</p>
                        </div>
                        <div >
                            <ul className='navbar-subchild-element1 subchild-hard-right' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Developers' 
                                            unique='' 
                                            dd='Self-service efficiency for' 
                                            dd_second='empowered developers' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='IT Professionals' 
                                            unique='' 
                                            dd='Tailored automation for IT' 
                                            dd_second='excellence' />
                                </li>
                            </ul>
                        </div>
                    </div>     
                </div>
            </li>

            <li className='navbar-list-child' >
                <p className='navbar-p' >Use Cases</p>
                <FontAwesomeIcon 
                className='navbar-arrow-icon'  
                icon={faChevronDown} />
                <div className='navbar-subchild-con subchild-u' >
                    <div className='navbar-subchild-left-con'>
                        <ul className='navbar-subchild-header' >
                            <li className='navbar-subchild-headerleft' >
                                <Image id='feature-icon' 
                                        width={23} 
                                        height={23} 
                                        src='/Business_case_icon.png' 
                                        alt='This is an business icon'/>
                                <p className='navbar-list-subchild-header-title changecolor-title' >Business Case</p>
                            </li>
                            <li className='navbar-subchild-headerright' >
                                <Image width={28} 
                                        height={23} 
                                        src='/Solutions_icon.png' 
                                        alt='This is an solutions icon'/>
                                <p className='navbar-list-subchild-header-title changecolor-title' >Solutions</p>
                            </li>
                        </ul>
                        <div className='navbar-subchild-leftelement-con1' >
                            <ul className='navbar-subchild-element1 subchild-left' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Startups' 
                                            unique='' 
                                            dd='Empowering startups with' 
                                            dd_second='streamlined DevOps' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Hypergrowth Companies' 
                                            unique='' 
                                            dd='Growth through Developer' 
                                            dd_second='Self-Service' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='AI/ML Workloads' 
                                            unique='' 
                                            dd='Streamlined AI/ML' 
                                            dd_second='provisioning' />
                                </li>
                            </ul>
                            <ul className='navbar-subchild-element1 subchild-right' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='DevOps Automation' 
                                            unique='' 
                                            dd='Increase DevOps efficiency' 
                                            dd_second='and reduce costs' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Cloud Migration' 
                                            unique='' 
                                            dd='Automate cloud based' 
                                            dd_second='application deployments' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Compliance and Security' 
                                            unique='' 
                                            dd='Speed up compliance and' 
                                            dd_second='strengthen your security posture' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Platform Engineering' 
                                            unique='' 
                                            dd='Scalable developer self-' 
                                            dd_second='service' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='navbar-subchild-right-con' >
                        <div className='navbar-subchild-header' >
                            <Image id='feature-icon' 
                                    width={23} 
                                    height={23} 
                                    src='/Platform_icon.png' 
                                    alt='This is an platform icon'/>
                            <p className='navbar-list-subchild-header-title changecolor-title ' >Platforms</p>
                        </div>
                        <div >
                            <ul className='navbar-subchild-element1 subchild-hard-right' >
                                <li className='navbar-subchild-text-con  navbar-subchild-text-con-block' >
                                    <Listofblock title='AWS' 
                                                image_url='/aws_nobg.png' />
                                </li>
                                <li className='navbar-subchild-text-con  navbar-subchild-text-con-block' >
                                    <Listofblock title='GCP' 
                                                image_url='/gcp_nobg.png' />
                                </li>
                                <li className='navbar-subchild-text-con  navbar-subchild-text-con-block' >
                                    <Listofblock title='AZURE' 
                                                image_url='/azure_nobg.png' />
                                </li>
                                <li className='navbar-subchild-text-con  navbar-subchild-text-con-block' >
                                    <Listofblock title='On-Premises' 
                                                image_url='/on_premises_nobg.png' />
                                </li>
                            </ul>
                        </div>
                    </div>
                        
                </div>
            </li>

            <li className='navbar-list-child' >
                <p className='navbar-p' >Why DuploCloud</p>
                <FontAwesomeIcon className='navbar-arrow-icon'  icon={faChevronDown} />
                <div className='navbar-subchild-con subchild-w' >
                    <div className='navbar-subchild-left-con'>
                        <div className='navbar-subchild-header' >
                            <Image width={28} 
                                    height={23} 
                                    src='/company_icon.png' 
                                    alt='This is an feature icon'/>
                            <p className='navbar-list-subchild-header-title changecolor-title' >Company</p>
                        </div>
                        <div className='navbar-subchild-leftelement-con1' >
                            <ul className='navbar-subchild-element1 subchild-left' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='About Us' 
                                            unique='' 
                                            dd='Everything you want to know' 
                                            dd_second='about us' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Hiring / Careers' 
                                            unique='' 
                                            dd='Come join our team!' 
                                            dd_second='' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Partner With Us' 
                                            unique='' 
                                            dd='Empowering growth through' 
                                            dd_second='strategic partnerships' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='navbar-subchild-right-con' >
                        <div className='navbar-subchild-header' >
                            <Image  width={26} 
                                    height={23} 
                                    src='/customer_icon.png' 
                                    alt='This is an for_team icon'/>
                            <p className='navbar-list-subchild-header-title changecolor-title ' >Customer Stories</p>
                        </div>
                        <div >
                            <ul className='navbar-subchild-element1 subchild-hard-right' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Kami Vision' 
                                            unique='' 
                                            dd='A quick path to PCI-DSS' 
                                            dd_second='compliance' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Uniphore' 
                                            unique='' 
                                            dd='Unified DevOps Integration' 
                                            dd_second='on AWS' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='PartnerTap' 
                                            unique='' 
                                            dd='10X AWS expansion and' 
                                            dd_second='SOC2 compliance' />
                                </li>
                                <li className='navbar-subchild-last-text-con' >
                                    <p className='navbar-subchild-last-txt' >All Customer Stories</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                        
                </div>
            </li>
            <li className='navbar-list-child' >
                <p className='navbar-p' >Pricing</p>
            </li>
            
            <li className='navbar-list-child navbar-last-child' >
                <p className='navbar-p' >Resources</p>
                <FontAwesomeIcon className='navbar-arrow-icon'  icon={faChevronDown} />
                <div className='navbar-subchild-con subchild-r' >
                    <div className='navbar-subchild-left-con'>
                        <ul className='navbar-subchild-header' >
                            <li className='navbar-subchild-headerleft' >
                                <Image id='feature-icon' 
                                        width={23} 
                                        height={23} 
                                        src='/Learn_connect_icon.png' 
                                        alt='This is an business icon'/>
                                <p className='navbar-list-subchild-header-title changecolor-title' >Learn & Connect</p>
                            </li>
                            <li className='navbar-subchild-headerright' >
                                <Image id='feature-icon' 
                                        width={23} 
                                        height={23} 
                                        src='/Product_help_icon.png' 
                                        alt='This is an solutions icon'/>
                                <p className='navbar-list-subchild-header-title changecolor-title' >Product Help</p>
                            </li>
                        </ul>
                        <div className='navbar-subchild-leftelement-con1' >
                            <ul className='navbar-subchild-element1 subchild-left' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Blog' 
                                            unique='' 
                                            dd='Stay up-to-date with our' 
                                            dd_second='thought leadership' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Video Library' 
                                            unique='' 
                                            dd='Video tutorials and thought' 
                                            dd_second='leadership' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Webinars' 
                                            unique='' 
                                            dd='Industry insights and' 
                                            dd_second='product tips' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='eBooks' 
                                            unique='' 
                                            dd='Accessible in-depth thought' 
                                            dd_second='leadership' />
                                </li>
                                <li className='navbar-subchild-last-text-con' >
                                    <p className='navbar-subchild-last-txt' >All Assets</p>
                                </li>
                            </ul>
                            <ul className='navbar-subchild-element1 subchild-right' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Documentation' 
                                            unique='' 
                                            dd='All DuploCloud technical' 
                                            dd_second='documentation' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Tutorials' 
                                            unique='' 
                                            dd='Succinct step-by-step' 
                                            dd_second='guided tours' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Frequently Asked Questions (FAQ)' 
                                            unique='' 
                                            dd='Concise answers to specific' 
                                            dd_second='to the DuploCloud platform' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Technical White Papers' 
                                            unique='' 
                                            dd='In-Depth Technical Articles' 
                                            dd_second='Curated by DuploCloud' />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='navbar-subchild-right-con' >
                        <div className='navbar-subchild-header' >
                            <Image id='feature-icon' 
                                    width={23} 
                                    height={23} 
                                    src='/In_the_world_icon.png' 
                                    alt='This is an platform icon'/>
                            <p className='navbar-list-subchild-header-title changecolor-title ' >In the World</p>
                        </div>
                        <div >
                            <ul className='navbar-subchild-element1 subchild-hard-right' >
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Events' 
                                            unique='' 
                                            dd="Learn where we'll be next" 
                                            dd_second='' />
                                </li>
                                <li className='navbar-subchild-text-con' >
                                    <Listof title='Press & News' 
                                            unique='' 
                                            dd="Recent news and" 
                                            dd_second='DuploCloud happenings' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <li className="navbar-demo-con" >
            <button className='navbar-btn' >GET A DEMO</button>
        </li>
    </ul>
    </>)
}