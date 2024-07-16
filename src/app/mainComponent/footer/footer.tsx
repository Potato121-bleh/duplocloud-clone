import './footer.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="poop-main-con">
            <ul className="poop-con">
                <ul className="poop-first-child">
                    <li className="poop-firstchild-header">
                        <h1>Compliance Standards</h1>
                    </li>
                    <ul className="poop-firstchild-body">
                        <li className="poop-firstchild-body-left">
                            <h5>SOC 2</h5>
                            <h5>HIPAA</h5>
                            <h5>PCI-DSS</h5>
                            <h5>FedRAMP</h5>
                        </li>
                        <li className="poop-firstchild-body-right">
                            <h5>HITRUST</h5>
                            <h5>GDPR</h5>
                            <h5>NIST</h5>
                            <h5>ISO</h5>
                            <p>Custom</p>
                        </li>
                    </ul>
                </ul>

                <ul className="poop-second-child">
                    <li className="poop-secondchild-header">
                        <h1>Integrations</h1>
                    </li>
                    <li className="poop-secondchild-body">
                        <h5>Terraform</h5>
                        <h5>Kubernetes</h5>
                        <h5>CircleCI</h5>
                        <h5>GitLab</h5>
                        <h5>GitHub</h5>
                        <h5>Prometheus</h5>
                        <p>All Integrations</p>
                    </li>
                </ul>

                <ul className="poop-third-child">
                    <li className="poop-thirdchild-header">
                        <h1>Solutions</h1>
                    </li>
                    <li className="poop-thirdchild-body">
                        <h5>DevOps Automation</h5>
                        <h5>Cloud Migration Services</h5>
                        <h5>Security and Compliance</h5>
                        <h5>Platform Engineering</h5>
                    </li>
                </ul>

                <ul className="poop-last-child">
                    <li className="poop-lastchild-header">
                        <h1>Headquarters</h1>
                    </li>
                    <ul className="poop-lastchild-body">
                        <li className="poop-lastchild-body-left">
                            <h5>2150 N 1st St San Jose, CA 95131</h5>
                            <h5>+1 (866) 830-6588</h5>
                        </li>
                        <li className="poop-lastchild-body-right">
                            <Image
                                width={120}
                                height={70}
                                src="/footer/rate-board.png"
                                alt="This is an img of rate us"
                            />
                        </li>
                    </ul>

                    <ul className="poop-afterlastchild-con">
                        <li className="poop-afterlastchild-header">
                            <h1>Find us on social media</h1>
                        </li>
                        <li className="poop-afterlastchild-img-con">
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
            <div className="poop-soc-con">
                <Image
                    width={60}
                    height={60}
                    src="/footer/SOC.png"
                    alt="This is soc2 img"
                />
                <div className="poop-soc-text">
                    <p>We are SOC2</p>
                    <p>Type 2 Compliant</p>
                </div>
            </div>

            <section className="copyright-main-con">
                <ul className="copyright-con">
                    <li className="copyright-company-logo-con">
                        <Image
                            width={60}
                            height={50}
                            src="/footer/Duplocloud.png"
                            alt="This is an image of duplocloud logo"
                        />
                        <h1>DuploCloud</h1>
                    </li>
                    <li>Copyright © 2024 DuploCloud, Inc.</li>
                    <li className="copyright-cookie-policy">
                        <span className="copyright-span">Cookie Policy</span> |{' '}
                        <span className="copyright-span">Privacy Policy</span>
                    </li>
                </ul>
            </section>
        </footer>
    )
}
