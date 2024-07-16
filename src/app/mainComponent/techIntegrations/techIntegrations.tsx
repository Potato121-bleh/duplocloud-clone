import ButtonTemplate from '@/app/component/buttonTemplate/ButtonTemplate'
import './techIntegrations.css'
import Image from 'next/image'

export default function TechIntegrations() {
    return (
        <section className="techIntegrations-main-con">
            <ul className="techIntegrations-con">
                <li className="techIntegrations-info-con">
                    <h2>Bring Your Tech to DuploCloud</h2>
                    <p>
                        Seamlessly provision your cloud-native applications. We
                        translate application specifications into detailed and
                        fully managed cloud configurations, with knowledge of
                        over 500 cloud services.
                    </p>
                    <div className="techIntegrations-btn-con">
                        <ButtonTemplate
                            title="OUR INTEGRATIONS"
                            bgColor="green"
                            txtColor="black"
                        />
                    </div>
                </li>
                <li className="techIntegrations-img-con">
                    <Image
                        width={650}
                        height={450}
                        src="/duplocloud-Integrations.png"
                        alt="this is an duplocloud-Integrations img"
                    />
                </li>
            </ul>
        </section>
    )
}
