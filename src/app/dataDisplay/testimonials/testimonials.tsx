import './testimonials.css'
import TestimonialsCard from './testimonialsCard/testimonialsCard'

export default function Testimonials() {
    const testimonialList = [
        {
            id: 1,
            imgWidth: 150,
            imgUrl: '/testimonials/blocpower.png',
            name: 'Ankur Garg',
            subtext: 'BlocPower, Director of Data Analytics',
            text: '"DuploCloud has transformed our operations with its out-of-the-box SOC 2 compliance and continuous monitoring. Moreover, their dedicated customer support team offers prompt response and effective solutions, which has exponentially elevated our operational efficiency."',
        },
        {
            id: 2,
            imgWidth: 240,
            imgUrl: '/testimonials/uniphore.png',
            name: 'Saurabh Saxena',
            subtext: 'Uniphore, Head of Technology and VP of Engineering',
            text: '“The DuploCloud platform is extremely simple to use and hides all the DevSecOps complexities of running hundreds of microservices in a secure and compliant SaaS application. In addition, the customer success help from DuploCloud has been absolutely stellar.”',
        },
        {
            id: 3,
            imgWidth: 240,
            imgUrl: '/testimonials/techstyleos.png',
            name: 'Adnan Khan',
            subtext: 'TechStyle, Director of DevOps',
            text: '“All AWS services are deployed completely secure right out of the box. And the tenant concept isolates various applications running in our single account, avoiding the need for developing complex isolation policies.”',
        },
        {
            id: 4,
            imgWidth: 200,
            imgUrl: '/testimonials/kamiVision.png',
            name: 'Yamin Durrani',
            subtext: 'Kami Vision, CEO',
            text: '“For small businesses, this AI technology is traditionally inaccessible due to the high cost and manpower required to manage a platform. We are changing how vision AI is designed and delivered with the support of a strong cloud platform in DuploCloud.”',
        },
        {
            id: 5,
            imgWidth: 200,
            imgUrl: '/testimonials/partnertap.png',
            name: 'Jared Ghalston',
            subtext: 'PartnerTap, Co-Founder & CTO',
            text: '“DuploCloud handles all the complexities of setting up a secure network on AWS. Their customer support is excellent and responsive.”',
        },
        {
            id: 6,
            imgWidth: 100,
            imgUrl: '/testimonials/Intellih.png',
            name: 'Surendra Saxena',
            subtext: 'Intellih, Chief Product Officer',
            text: '“DuploCloud very quickly created a DevOps automation template, crafting microservices within containers. Without DuploCloud we would have needed to hire specialized compliance consultants, severely delaying time to market. Even after our application is deployed, we will continue with the DuploCloud platform as compliance standards constantly change and evolve. DuploCloud gives us the peace of mind that someone is managing the whole of DevSecOps.”',
        },
        {
            id: 7,
            imgWidth: 150,
            imgUrl: '/testimonials/kloudspot.png',
            name: 'Steve Jerma',
            subtext: 'Kloudspot, VP of Engineering',
            text: '“DuploCloud helped Kloudspot remain nimble by allowing our team to manage and run multiple workloads at a time, ultimately allowing us to test and deploy solutions with speed and ease.”',
        },
    ]

    return (
        <section className="testimonials-main-con">
            <ul className="testimonials-con">
                <li className="testimonials-title">Customer Testimonials</li>
                <li className="testimonials-content-con">
                    <ul className="testimonials-content-innercon">
                        {testimonialList.map((element) => {
                            return (
                                <TestimonialsCard
                                    key={element.id}
                                    imgWidth={element.imgWidth}
                                    imgUrl={`${element.imgUrl}`}
                                    name={`${element.name}`}
                                    subtext={`${element.subtext}`}
                                    text={`${element.text}`}
                                />
                            )
                        })}
                    </ul>
                </li>
            </ul>
        </section>
    )
}
