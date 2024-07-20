'use client'
import './nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import NavElement from './navbarcom/navelement'
import NavBlock from './navbarcom/navblock'

export default function Navbar() {
    //In nav box has 3 line of element and index represent each of them
    const navProjectElements = [
        [
            {
                id: 1,
                title: 'Platform Overview',
                unique: 'changecolor-title',
                description: 'Explore the entire',
                descriptionSecond: 'DuploCloud Platform',
            },
            {
                id: 2,
                title: 'Automated Provisioning',
                unique: '',
                description: 'Efficient and scalable',
                descriptionSecond: 'resource management',
            },
            {
                id: 3,
                title: 'Cloud Services',
                unique: '',
                description: 'Streamlined Multi-Cloud',
                descriptionSecond: 'Service Management',
            },
            {
                id: 4,
                title: 'CI / CD',
                unique: '',
                description: 'Efficient CI / CD for',
                descriptionSecond: 'Streamlined Development',
            },
        ],
        [
            {
                id: 1,
                title: 'Security',
                unique: '',
                description: 'Round-the-clock-security',
                descriptionSecond: 'and compliance',
            },
            {
                id: 2,
                title: 'Compliance',
                unique: '',
                description: 'Delivering out-of-the-box',
                descriptionSecond: 'compliance controls',
            },
            {
                id: 3,
                title: 'Diagnostics & Monitoring',
                unique: '',
                description: 'Optimize performance with',
                descriptionSecond: 'real-time monitoring',
            },
            {
                id: 4,
                title: 'Intergrations',
                unique: '',
                description: 'Effortless integration with',
                descriptionSecond: '500+ cloud services',
            },
        ],
        [
            {
                id: 1,
                title: 'Developers',
                unique: '',
                description: 'Self-service efficiency for',
                descriptionSecond: 'empowered developers',
            },
            {
                id: 2,
                title: 'IT Professionals',
                unique: '',
                description: 'Tailored automation for IT',
                descriptionSecond: 'excellence',
            },
        ],
    ]
    const navUsecaseElements = [
        [
            {
                id: 1,
                title: 'Startups',
                unique: '',
                description: 'Empowering startups with',
                descriptionSecond: 'streamlined DevOps',
            },
            {
                id: 2,
                title: 'Hypergrowth Companies',
                unique: '',
                description: 'Growth through Developer',
                descriptionSecond: 'Self-Service',
            },
            {
                id: 3,
                title: 'AI/ML Workloads',
                unique: '',
                description: 'Streamlined AI/ML',
                descriptionSecond: 'provisioning',
            },
        ],
        [
            {
                id: 1,
                title: 'DevOps Automation',
                unique: '',
                description: 'Increase DevOps efficiency',
                descriptionSecond: 'and reduce costs',
            },
            {
                id: 2,
                title: 'Cloud Migration',
                unique: '',
                description: 'Automate cloud based',
                descriptionSecond: 'application deployments',
            },
            {
                id: 3,
                title: 'Compliance and Security',
                unique: '',
                description: 'Speed up compliance and',
                descriptionSecond: 'strengthen your security posture',
            },
            {
                id: 4,
                title: 'Platform Engineering',
                unique: '',
                description: 'Scalable developer self-',
                descriptionSecond: 'service',
            },
        ],
    ]
    const navUsecaseBlock = [
        {
            id: 1,
            title: 'AWS',
            imageUrl: '/aws_nobg.png',
        },
        {
            id: 2,
            title: 'GCP',
            imageUrl: '/gcp_nobg.png',
        },
        {
            id: 3,
            title: 'AZURE',
            imageUrl: '/azure_nobg.png',
        },
        {
            id: 4,
            title: 'On-Premises',
            imageUrl: '/on_premises_nobg.png',
        },
    ]
    const navWhydupElement = [
        [
            {
                id: 1,
                title: 'About Us',
                unique: '',
                description: 'Everything you want to know',
                descriptionSecond: 'about us',
            },
            {
                id: 2,
                title: 'Hiring / Careers',
                unique: '',
                description: 'Come join our team!',
                descriptionSecond: '',
            },
            {
                id: 3,
                title: 'Partner With Us',
                unique: '',
                description: 'Empowering growth through',
                descriptionSecond: 'strategic partnerships',
            },
        ],
        [
            {
                id: 1,
                title: 'Kami Vision',
                unique: '',
                description: 'A quick path to PCI-DSS',
                descriptionSecond: 'compliance',
            },
            {
                id: 2,
                title: 'Uniphore',
                unique: '',
                description: 'Unified DevOps Integration',
                descriptionSecond: 'on AWS',
            },
            {
                id: 3,
                title: 'PartnerTap',
                unique: '',
                description: '10X AWS expansion and',
                descriptionSecond: 'SOC2 compliance',
            },
        ],
    ]
    const navResourcesElement = [
        [
            {
                id: 1,
                title: 'Blog',
                unique: '',
                description: 'Stay up-to-date with our',
                descriptionSecond: 'thought leadership',
            },
            {
                id: 2,
                title: 'Video Library',
                unique: '',
                description: 'Video tutorials and thought',
                descriptionSecond: 'leadership',
            },
            {
                id: 3,
                title: 'Webinars',
                unique: '',
                description: 'Industry insights and',
                descriptionSecond: 'product tips',
            },
            {
                id: 4,
                title: 'eBooks',
                unique: '',
                description: 'Accessible in-depth thought',
                descriptionSecond: 'leadership',
            },
        ],
        [
            {
                id: 1,
                title: 'Documentation',
                unique: '',
                description: 'All DuploCloud technical',
                descriptionSecond: 'documentation',
            },
            {
                id: 2,
                title: 'Tutorials',
                unique: '',
                description: 'Succinct step-by-step',
                descriptionSecond: 'guided tours',
            },
            {
                id: 3,
                title: 'Frequently Asked Questions (FAQ)',
                unique: '',
                description: 'Concise answers to specific',
                descriptionSecond: 'to the DuploCloud platform',
            },
            {
                id: 4,
                title: 'Technical White Papers',
                unique: '',
                description: 'In-Depth Technical Articles',
                descriptionSecond: 'Curated by DuploCloud',
            },
        ],
        [
            {
                id: 1,
                title: 'Events',
                unique: '',
                description: "Learn where we'll be next",
                descriptionSecond: '',
            },
            {
                id: 2,
                title: 'Press & News',
                unique: '',
                description: 'Recent news and',
                descriptionSecond: 'DuploCloud happenings',
            },
        ],
    ]
    const platformElementFeature = [
        [
            {
                id: 1,
                title: 'Automated Provisioning',
            },
            {
                id: 2,
                title: 'Cloud Services',
            },
            {
                id: 3,
                title: 'CI / CD',
            },
        ],
        [
            {
                id: 1,
                title: 'Security',
            },
            {
                id: 2,
                title: 'Compliance',
            },
            {
                id: 3,
                title: 'Diagnostics & Monitoring',
            },
            {
                id: 4,
                title: 'Integrations',
            },
        ],
    ]
    const useCaseElement = [
        [
            {
                id: 1,
                title: 'Startups',
            },
            {
                id: 2,
                title: 'Hypergrowth Companies',
            },
            {
                id: 3,
                title: 'AL/ML Workloads',
            },
        ],
        [
            {
                id: 1,
                title: 'DevOps Automation',
            },
            {
                id: 2,
                title: 'Cloud Migration',
            },
            {
                id: 3,
                title: 'Compliance and Security',
            },
            {
                id: 4,
                title: 'Platform Engineering',
            },
        ],
    ]
    const whyDuploElement = [
        [
            {
                id: 1,
                title: 'About Us',
            },
            {
                id: 2,
                title: 'Hiring / Careers',
            },
            {
                id: 3,
                title: 'Partner With US',
            },
        ],
        [
            {
                id: 1,
                title: 'Kami Vision',
            },
            {
                id: 2,
                title: 'Uniphore',
            },
            {
                id: 3,
                title: 'PartnerTap',
            },
        ],
    ]
    const resourceElement = [
        [
            {
                id: 1,
                title: 'Blog',
            },
            {
                id: 2,
                title: 'Video Library',
            },
            {
                id: 3,
                title: 'Webinars',
            },
            {
                id: 4,
                title: 'eBooks',
            },
        ],
        [
            {
                id: 1,
                title: 'Documentation',
            },
            {
                id: 2,
                title: 'Tutorials',
            },
            {
                id: 3,
                title: 'Frequently Asked Questions (FAQ)',
            },
            {
                id: 4,
                title: 'Technical White Papers',
            },
        ],
        [
            {
                id: 1,
                title: 'Events',
            },
            {
                id: 2,
                title: 'Press & News',
            },
        ],
    ]

    const handleBurgerMenu = () => {
        let menubar = document.getElementById('menu-con-id') as HTMLElement
        let platform = document.getElementById(
            'platform-menu-id'
        ) as HTMLElement
        let usecase = document.getElementById('usecase-menu-id') as HTMLElement
        let whydup = document.getElementById('whydup-menu-id') as HTMLElement
        let pricing = document.getElementById('pricing-menu-id') as HTMLElement
        let resource = document.getElementById(
            'resource-menu-id'
        ) as HTMLElement
        let findus = document.getElementById('findus-menu-id') as HTMLElement

        let burgerTopBun = document.getElementById(
            'burgermenu-line-one'
        ) as HTMLElement
        let burgerBottomBun = document.getElementById(
            'burgermenu-line-three'
        ) as HTMLElement
        let burgermeat = document.getElementById(
            'burgermenu-line-two'
        ) as HTMLElement
        menubar.classList.toggle('display-block')

        burgerTopBun.classList.toggle('move-head-down')
        burgermeat.classList.toggle('opacity-hide')
        burgerBottomBun.classList.toggle('move-head-up')
        setTimeout(() => {
            menubar.classList.toggle('move-menu-in')
        }, 100)
        setTimeout(() => {
            platform.classList.toggle('clear-translate')
            setTimeout(() => {
                usecase.classList.toggle('clear-translate')
                setTimeout(() => {
                    whydup.classList.toggle('clear-translate')
                    setTimeout(() => {
                        pricing.classList.toggle('clear-translate')
                        setTimeout(() => {
                            resource.classList.toggle('clear-translate')
                            findus.classList.toggle('clear-translate')
                        }, 300)
                    }, 100)
                }, 100)
            }, 100)
        }, 100)
    }
    const handlePlatform = () => {
        let usecase = document.getElementById('usecase-menu-id') as HTMLElement
        let whydup = document.getElementById('whydup-menu-id') as HTMLElement
        let pricing = document.getElementById('pricing-menu-id') as HTMLElement
        let resource = document.getElementById(
            'resource-menu-id'
        ) as HTMLElement
        let platform = document.getElementById(
            'platform-child-body-id'
        ) as HTMLElement
        usecase.classList.toggle('clear-translate')
        whydup.classList.toggle('clear-translate')
        pricing.classList.toggle('clear-translate')
        resource.classList.toggle('clear-translate')
        setTimeout(() => {
            platform.classList.toggle('display')
        }, 500)
    }
    const handleUsecase = () => {
        let platform = document.getElementById(
            'platform-menu-id'
        ) as HTMLElement
        let whydup = document.getElementById('whydup-menu-id') as HTMLElement
        let pricing = document.getElementById('pricing-menu-id') as HTMLElement
        let resource = document.getElementById(
            'resource-menu-id'
        ) as HTMLElement
        let usecase = document.getElementById(
            'usecase-child-body-id'
        ) as HTMLElement
        platform.classList.toggle('clear-translate')
        whydup.classList.toggle('clear-translate')
        pricing.classList.toggle('clear-translate')
        resource.classList.toggle('clear-translate')
        setTimeout(() => {
            platform.classList.toggle('display-none')
            usecase.classList.toggle('display')
        }, 500)
    }
    const handleWhydup = () => {
        let usecase = document.getElementById('usecase-menu-id') as HTMLElement
        let platform = document.getElementById(
            'platform-menu-id'
        ) as HTMLElement
        let pricing = document.getElementById('pricing-menu-id') as HTMLElement
        let resource = document.getElementById(
            'resource-menu-id'
        ) as HTMLElement
        let whydup = document.getElementById(
            'whydup-child-body-id'
        ) as HTMLElement
        usecase.classList.toggle('clear-translate')
        platform.classList.toggle('clear-translate')
        pricing.classList.toggle('clear-translate')
        resource.classList.toggle('clear-translate')
        setTimeout(() => {
            platform.classList.toggle('display-none')
            usecase.classList.toggle('display-none')
            whydup.classList.toggle('display')
        }, 500)
    }
    const handleResources = () => {
        let usecase = document.getElementById('usecase-menu-id') as HTMLElement
        let whydup = document.getElementById('whydup-menu-id') as HTMLElement
        let pricing = document.getElementById('pricing-menu-id') as HTMLElement
        let platform = document.getElementById(
            'platform-menu-id'
        ) as HTMLElement
        let resource = document.getElementById(
            'resource-child-body-id'
        ) as HTMLElement
        usecase.classList.toggle('clear-translate')
        whydup.classList.toggle('clear-translate')
        pricing.classList.toggle('clear-translate')
        platform.classList.toggle('clear-translate')
        setTimeout(() => {
            platform.classList.toggle('display-none')
            usecase.classList.toggle('display-none')
            whydup.classList.toggle('display-none')
            pricing.classList.toggle('display-none')
            resource.classList.toggle('display')
        }, 500)
    }

    return (
        <>
            <nav className="navbar-main-con">
                <li className="navbar-logo-con">
                    <Image
                        id="logo"
                        width={30}
                        height={30}
                        src="/Duplocloud_logo.png"
                        alt="This is an logo image"
                    />
                    <h1 id="logo-title">DuploCloud</h1>
                </li>
                <ul className="navbar-list-con">
                    <li className="navbar-list-child navbar-first-child">
                        <p className="navbar-p">Platform</p>
                        <FontAwesomeIcon
                            className="navbar-arrow-icon"
                            icon={faChevronDown}
                        />
                        <div className="navbar-subchild-con subchild-p">
                            <div className="navbar-subchild-left-con">
                                <div className="navbar-subchild-header">
                                    <Image
                                        id="feature-icon"
                                        width={23}
                                        height={23}
                                        src="/Feature.png"
                                        alt="This is an feature icon"
                                    />
                                    <p className="navbar-list-subchild-header-title changecolor-title">
                                        Features
                                    </p>
                                </div>
                                <div className="navbar-subchild-leftelement-con1">
                                    <ul className="navbar-subchild-element1 subchild-left">
                                        {navProjectElements[0].map(
                                            (element) => {
                                                return (
                                                    <li
                                                        key={element.id}
                                                        className="navbar-subchild-text-con"
                                                    >
                                                        <NavElement
                                                            title={`${element.title}`}
                                                            unique={`${element.unique}`}
                                                            description={`${element.description}`}
                                                            descriptionSecond={`${element.descriptionSecond}`}
                                                        />
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                    <ul className="navbar-subchild-element1 subchild-right">
                                        {navProjectElements[1].map(
                                            (element) => {
                                                return (
                                                    <li
                                                        key={element.id}
                                                        className="navbar-subchild-text-con"
                                                    >
                                                        <NavElement
                                                            title={`${element.title}`}
                                                            unique={`${element.unique}`}
                                                            description={`${element.description}`}
                                                            descriptionSecond={`${element.descriptionSecond}`}
                                                        />
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-subchild-right-con">
                                <div className="navbar-subchild-header">
                                    <Image
                                        id="feature-icon"
                                        width={23}
                                        height={23}
                                        src="/For_team.png"
                                        alt="This is an for_team icon"
                                    />
                                    <p className="navbar-list-subchild-header-title changecolor-title ">
                                        For Teams
                                    </p>
                                </div>
                                <div>
                                    <ul className="navbar-subchild-element1 subchild-hard-right">
                                        {navProjectElements[2].map(
                                            (element) => {
                                                return (
                                                    <li
                                                        key={element.id}
                                                        className="navbar-subchild-text-con"
                                                    >
                                                        <NavElement
                                                            title={`${element.title}`}
                                                            unique={`${element.unique}`}
                                                            description={`${element.description}`}
                                                            descriptionSecond={`${element.descriptionSecond}`}
                                                        />
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="navbar-list-child">
                        <p className="navbar-p">Use Cases</p>
                        <FontAwesomeIcon
                            className="navbar-arrow-icon"
                            icon={faChevronDown}
                        />
                        <div className="navbar-subchild-con subchild-u">
                            <div className="navbar-subchild-left-con">
                                <ul className="navbar-subchild-header">
                                    <li className="navbar-subchild-headerleft">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Business_case_icon.png"
                                            alt="This is an business icon"
                                        />
                                        <p className="navbar-list-subchild-header-title changecolor-title">
                                            Business Case
                                        </p>
                                    </li>
                                    <li className="navbar-subchild-headerright">
                                        <Image
                                            width={28}
                                            height={23}
                                            src="/Solutions_icon.png"
                                            alt="This is an solutions icon"
                                        />
                                        <p className="navbar-list-subchild-header-title changecolor-title">
                                            Solutions
                                        </p>
                                    </li>
                                </ul>
                                <div className="navbar-subchild-leftelement-con1">
                                    <ul className="navbar-subchild-element1 subchild-left">
                                        {navUsecaseElements[0].map(
                                            (element) => {
                                                return (
                                                    <li
                                                        key={element.id}
                                                        className="navbar-subchild-text-con"
                                                    >
                                                        <NavElement
                                                            title={`${element.title}`}
                                                            unique={`${element.unique}`}
                                                            description={`${element.description}`}
                                                            descriptionSecond={`${element.descriptionSecond}`}
                                                        />
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                    <ul className="navbar-subchild-element1 subchild-right">
                                        {navUsecaseElements[1].map(
                                            (element) => {
                                                return (
                                                    <li
                                                        key={element.id}
                                                        className="navbar-subchild-text-con"
                                                    >
                                                        <NavElement
                                                            title={`${element.title}`}
                                                            unique={`${element.unique}`}
                                                            description={`${element.description}`}
                                                            descriptionSecond={`${element.descriptionSecond}`}
                                                        />
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-subchild-right-con">
                                <div className="navbar-subchild-header">
                                    <Image
                                        id="feature-icon"
                                        width={23}
                                        height={23}
                                        src="/Platform_icon.png"
                                        alt="This is an platform icon"
                                    />
                                    <p className="navbar-list-subchild-header-title changecolor-title ">
                                        Platforms
                                    </p>
                                </div>
                                <div>
                                    <ul className="navbar-subchild-element1 subchild-hard-right">
                                        {navUsecaseBlock.map((element) => {
                                            return (
                                                <li
                                                    key={element.id}
                                                    className="navbar-subchild-text-con  navbar-subchild-text-con-block"
                                                >
                                                    <NavBlock
                                                        title={`${element.title}`}
                                                        imageUrl={`${element.imageUrl}`}
                                                    />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="navbar-list-child">
                        <p className="navbar-p">Why DuploCloud</p>
                        <FontAwesomeIcon
                            className="navbar-arrow-icon"
                            icon={faChevronDown}
                        />
                        <div className="navbar-subchild-con subchild-w">
                            <div className="navbar-subchild-left-con">
                                <div className="navbar-subchild-header">
                                    <Image
                                        width={28}
                                        height={23}
                                        src="/company_icon.png"
                                        alt="This is an feature icon"
                                    />
                                    <p className="navbar-list-subchild-header-title changecolor-title">
                                        Company
                                    </p>
                                </div>
                                <div className="navbar-subchild-leftelement-con1">
                                    <ul className="navbar-subchild-element1 subchild-left">
                                        {navWhydupElement[0].map((element) => {
                                            return (
                                                <li
                                                    key={element.id}
                                                    className="navbar-subchild-text-con"
                                                >
                                                    <NavElement
                                                        title={`${element.title}`}
                                                        unique={`${element.unique}`}
                                                        description={`${element.description}`}
                                                        descriptionSecond={`${element.descriptionSecond}`}
                                                    />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-subchild-right-con">
                                <div className="navbar-subchild-header">
                                    <Image
                                        width={26}
                                        height={23}
                                        src="/customer_icon.png"
                                        alt="This is an for_team icon"
                                    />
                                    <p className="navbar-list-subchild-header-title changecolor-title ">
                                        Customer Stories
                                    </p>
                                </div>
                                <div>
                                    <ul className="navbar-subchild-element1 subchild-hard-right">
                                        {navWhydupElement[1].map((element) => {
                                            return (
                                                <li
                                                    key={element.id}
                                                    className="navbar-subchild-text-con"
                                                >
                                                    <NavElement
                                                        title={`${element.title}`}
                                                        unique={`${element.unique}`}
                                                        description={`${element.description}`}
                                                        descriptionSecond={`${element.descriptionSecond}`}
                                                    />
                                                </li>
                                            )
                                        })}
                                        <li className="navbar-subchild-last-text-con">
                                            <p className="navbar-subchild-last-txt">
                                                All Customer Stories
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="navbar-list-child">
                        <p className="navbar-p">Pricing</p>
                    </li>

                    <li className="navbar-list-child navbar-last-child">
                        <p className="navbar-p">Resources</p>
                        <FontAwesomeIcon
                            className="navbar-arrow-icon"
                            icon={faChevronDown}
                        />
                        <div className="navbar-subchild-con subchild-r">
                            <div className="navbar-subchild-left-con">
                                <ul className="navbar-subchild-header">
                                    <li className="navbar-subchild-headerleft">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Learn_connect_icon.png"
                                            alt="This is an business icon"
                                        />
                                        <p className="navbar-list-subchild-header-title changecolor-title">
                                            Learn & Connect
                                        </p>
                                    </li>
                                    <li className="navbar-subchild-headerright">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Product_help_icon.png"
                                            alt="This is an solutions icon"
                                        />
                                        <p className="navbar-list-subchild-header-title changecolor-title">
                                            Product Help
                                        </p>
                                    </li>
                                </ul>
                                <div className="navbar-subchild-leftelement-con1">
                                    <ul className="navbar-subchild-element1 subchild-left">
                                        {navResourcesElement[0].map(
                                            (element) => {
                                                return (
                                                    <li
                                                        key={element.id}
                                                        className="navbar-subchild-text-con"
                                                    >
                                                        <NavElement
                                                            title={`${element.title}`}
                                                            unique={`${element.unique}`}
                                                            description={`${element.description}`}
                                                            descriptionSecond={`${element.descriptionSecond}`}
                                                        />
                                                    </li>
                                                )
                                            }
                                        )}
                                        <li className="navbar-subchild-last-text-con">
                                            <p className="navbar-subchild-last-txt">
                                                All Assets
                                            </p>
                                        </li>
                                    </ul>
                                    <ul className="navbar-subchild-element1 subchild-right">
                                        {navResourcesElement[1].map(
                                            (element) => {
                                                return (
                                                    <li
                                                        key={element.id}
                                                        className="navbar-subchild-text-con"
                                                    >
                                                        <NavElement
                                                            title={`${element.title}`}
                                                            unique={`${element.unique}`}
                                                            description={`${element.description}`}
                                                            descriptionSecond={`${element.descriptionSecond}`}
                                                        />
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-subchild-right-con">
                                <div className="navbar-subchild-header">
                                    <Image
                                        id="feature-icon"
                                        width={23}
                                        height={23}
                                        src="/In_the_world_icon.png"
                                        alt="This is an platform icon"
                                    />
                                    <p className="navbar-list-subchild-header-title changecolor-title ">
                                        In the World
                                    </p>
                                </div>
                                <div>
                                    <ul className="navbar-subchild-element1 subchild-hard-right">
                                        {navResourcesElement[2].map(
                                            (element) => {
                                                return (
                                                    <li
                                                        key={element.id}
                                                        className="navbar-subchild-text-con"
                                                    >
                                                        <NavElement
                                                            title={`${element.title}`}
                                                            unique={`${element.unique}`}
                                                            description={`${element.description}`}
                                                            descriptionSecond={`${element.descriptionSecond}`}
                                                        />
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <li className="navbar-demo-con">
                    <button className="navbar-btn">GET A DEMO</button>
                </li>
            </nav>

            {/* UI FOR MOBILE VERSION */}

            <nav className="navbar-main-con-mobile">
                <li className="navbar-logo-con">
                    <Image
                        id="logo"
                        width={30}
                        height={30}
                        src="/Duplocloud_logo.png"
                        alt="This is an logo image"
                    />
                    <h1 id="logo-title">DuploCloud</h1>
                </li>
                <li className="navbar-demo-con-mobile">
                    <button className="navbar-btn-mobile">GET A DEMO</button>
                    <ul className="navbar-burgermenu-con-mobile">
                        <ul className="navbar-burgermenu-icon-con-mobile">
                            <li
                                className="navbar-burgermenu-mobile "
                                id="burgermenu-line-one"
                            ></li>
                            <li
                                className="navbar-burgermenu-mobile"
                                id="burgermenu-line-two"
                            ></li>
                            <li
                                className="navbar-burgermenu-mobile "
                                id="burgermenu-line-three"
                            ></li>
                            <button
                                className="burgermenu-btn-forclick"
                                onClick={handleBurgerMenu}
                            ></button>
                        </ul>

                        <ul className="navbar-menu-con-mobile" id="menu-con-id">
                            <ul
                                className="navbar-menu-child-mobile platform-menu"
                                id="platform-menu-id"
                            >
                                <li className="navbar-menu-child-header-mobile">
                                    <p className="navbar-p">Platform</p>
                                    <FontAwesomeIcon
                                        className="navbar-arrow-icon"
                                        icon={faChevronDown}
                                    />
                                    <button
                                        onClick={handlePlatform}
                                        className="navbar-btn-forclick"
                                    ></button>
                                </li>
                                <li
                                    className="navbar-menu-child-body-mobile"
                                    id="platform-child-body-id"
                                >
                                    <div className="navbar-subchild-header">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Feature.png"
                                            alt="This is an feature icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            Features
                                        </p>
                                    </div>
                                    <p className="changecolor-title">
                                        Platform Overview
                                    </p>
                                    {platformElementFeature[0].map(
                                        (element) => {
                                            return (
                                                <p key={element.id}>
                                                    {element.title}
                                                </p>
                                            )
                                        }
                                    )}
                                    <br />
                                    {platformElementFeature[1].map(
                                        (element) => {
                                            return (
                                                <p key={element.id}>
                                                    {element.title}
                                                </p>
                                            )
                                        }
                                    )}
                                    <div className="navbar-subchild-header">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/For_team.png"
                                            alt="This is an for_team icon"
                                        />
                                        <p className="navbar-list-subchild-header-title changecolor-title ">
                                            For Teams
                                        </p>
                                    </div>
                                    <p>Developers</p>
                                    <p>IT Professionals</p>
                                </li>
                            </ul>
                            <ul
                                className="navbar-menu-child-mobile usecase-menu"
                                id="usecase-menu-id"
                            >
                                <li className="navbar-menu-child-header-mobile">
                                    <p className="navbar-p">Use Cases</p>
                                    <FontAwesomeIcon
                                        className="navbar-arrow-icon"
                                        icon={faChevronDown}
                                    />
                                    <button
                                        onClick={handleUsecase}
                                        className="navbar-btn-forclick"
                                    ></button>
                                </li>

                                <li
                                    className="navbar-menu-child-body-mobile"
                                    id="usecase-child-body-id"
                                >
                                    <div className="navbar-subchild-header">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Business_case_icon.png"
                                            alt="This is an business icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            Business Case
                                        </p>
                                    </div>
                                    {useCaseElement[0].map((element) => {
                                        return (
                                            <p key={element.id}>
                                                {element.title}
                                            </p>
                                        )
                                    })}

                                    <div className="navbar-subchild-header">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Business_case_icon.png"
                                            alt="This is an business icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            Solutions
                                        </p>
                                    </div>
                                    {useCaseElement[1].map((element) => {
                                        return (
                                            <p key={element.id}>
                                                {element.title}
                                            </p>
                                        )
                                    })}
                                    <div className="navbar-subchild-header">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Business_case_icon.png"
                                            alt="This is an business icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            Platforms
                                        </p>
                                    </div>
                                    {navUsecaseBlock.map((element) => {
                                        return (
                                            <div
                                                key={element.id}
                                                className="navbar-subchild-text-con  navbar-subchild-text-con-block"
                                            >
                                                <NavBlock
                                                    title={`${element.title}`}
                                                    imageUrl={`${element.imageUrl}`}
                                                />
                                            </div>
                                        )
                                    })}
                                </li>
                            </ul>
                            <ul
                                className="navbar-menu-child-mobile whydup-menu"
                                id="whydup-menu-id"
                            >
                                <li className="navbar-menu-child-header-mobile">
                                    <p className="navbar-p">Why DuploCloud</p>
                                    <FontAwesomeIcon
                                        className="navbar-arrow-icon"
                                        icon={faChevronDown}
                                    />
                                    <button
                                        onClick={handleWhydup}
                                        className="navbar-btn-forclick btn-forclick-longer"
                                    ></button>
                                </li>
                                <li
                                    className="navbar-menu-child-body-mobile"
                                    id="whydup-child-body-id"
                                >
                                    <div className="navbar-subchild-header">
                                        <Image
                                            width={28}
                                            height={23}
                                            src="/company_icon.png"
                                            alt="This is an feature icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            Company
                                        </p>
                                    </div>
                                    {whyDuploElement[0].map((element) => {
                                        return (
                                            <p key={element.id}>
                                                {element.title}
                                            </p>
                                        )
                                    })}
                                    <div className="navbar-subchild-header">
                                        <Image
                                            width={26}
                                            height={23}
                                            src="/customer_icon.png"
                                            alt="This is an for_team icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            Customer Stories
                                        </p>
                                    </div>
                                    {whyDuploElement[1].map((element) => {
                                        return (
                                            <p key={element.id}>
                                                {element.title}
                                            </p>
                                        )
                                    })}
                                    <p className="navbar-subchild-last-txt">
                                        All Customer Stories
                                    </p>
                                </li>
                            </ul>
                            <li
                                className="navbar-menu-child-mobile pricing-menu"
                                id="pricing-menu-id"
                            >
                                <p className="navbar-p">Pricing</p>
                            </li>
                            <ul
                                className="navbar-menu-child-mobile resource-menu"
                                id="resource-menu-id"
                            >
                                <li className="navbar-menu-child-header-mobile">
                                    <p className="navbar-p">Resources</p>
                                    <FontAwesomeIcon
                                        className="navbar-arrow-icon"
                                        icon={faChevronDown}
                                    />
                                    <button
                                        onClick={handleResources}
                                        className="navbar-btn-forclick"
                                    ></button>
                                </li>
                                <li
                                    className="navbar-menu-child-body-mobile"
                                    id="resource-child-body-id"
                                >
                                    <div className="navbar-subchild-header">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Learn_connect_icon.png"
                                            alt="This is an business icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            Learn & Connect
                                        </p>
                                    </div>
                                    {resourceElement[0].map((element) => {
                                        return (
                                            <p key={element.id}>
                                                {element.title}
                                            </p>
                                        )
                                    })}
                                    <p className="navbar-subchild-last-txt">
                                        All Assets
                                    </p>
                                    <div className="navbar-subchild-header">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/Product_help_icon.png"
                                            alt="This is an solutions icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            Product Help
                                        </p>
                                    </div>
                                    {resourceElement[1].map((element) => {
                                        return (
                                            <p key={element.id}>
                                                {element.title}
                                            </p>
                                        )
                                    })}
                                    <div className="navbar-subchild-header">
                                        <Image
                                            id="feature-icon"
                                            width={23}
                                            height={23}
                                            src="/In_the_world_icon.png"
                                            alt="This is an platform icon"
                                        />
                                        <p className="navbar-list-subchild-header-title-mobile changecolor-title">
                                            In the World
                                        </p>
                                    </div>
                                    {resourceElement[2].map((element) => {
                                        return (
                                            <p key={element.id}>
                                                {element.title}
                                            </p>
                                        )
                                    })}
                                </li>
                            </ul>
                            <ul
                                className="navbar-afterlastchild-con-mobile findus-menu"
                                id="findus-menu-id"
                            >
                                <li className="navbar-afterlastchild-header-mobile">
                                    <h1>Find us on social media</h1>
                                </li>
                                <li className="footer-afterlastchild-img-con">
                                    <Image
                                        width={250}
                                        height={24}
                                        src="/footer/social-media-light.png"
                                        alt="This is an image of social media"
                                    />
                                </li>
                            </ul>
                        </ul>
                    </ul>
                </li>
            </nav>
        </>
    )
}
