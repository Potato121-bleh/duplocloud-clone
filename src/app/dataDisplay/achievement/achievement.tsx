import Button from '@/app/element/button/button'
import Image from 'next/image'
import './achievement.css'

export default function Achievement() {
    const achievementListCard = [
        {
            id: 1,
            imgUrl: '/achievement/customer-icon.png',
            title: '150+',
            subtitle: 'Customers',
        },
        {
            id: 2,
            imgUrl: '/achievement/DevOps-icon.png',
            title: '1,000+',
            subtitle: 'DevOps Users',
        },
        {
            id: 3,
            imgUrl: '/achievement/DevOps-hour-reward.png',
            title: '500k',
            subtitle: 'DevOps Hours Saved',
        },
        {
            id: 4,
            imgUrl: '/achievement/mind-peace-reward.png',
            title: '100%',
            subtitle: 'Peace of Mind',
        },
    ]

    const achievementList = [
        {
            id: 1,
            imgUrl: '/achievement/perform-reward-new.png',
        },
        {
            id: 2,
            imgUrl: '/achievement/adoption-reward.png',
        },
        {
            id: 3,
            imgUrl: '/achievement/relationship-reward.png',
        },
        {
            id: 4,
            imgUrl: '/achievement/momentum-reward.png',
        },
    ]

    return (
        <section className="achievement-main-con">
            <ul className="achievement-con">
                <li className="achievement-text-con">
                    <div className="achievement-text">
                        <h1>Ready to get started</h1>
                        <p>
                            Boost DevOps efficiency, accelerate compliance,
                            enhance security, and drive innovation with
                            DuploCloud.
                        </p>
                        <Button
                            title="GET A DEMO"
                            bgColor="green"
                            txtColor="black"
                        />
                    </div>
                </li>

                <ul className="achievement-card">
                    {achievementListCard.map((element) => {
                        return (
                            <li key={element.id} className="achievement-child">
                                <div className="achievement-img-con">
                                    <Image
                                    id='achievement-img-id'
                                        width={60}
                                        height={60}
                                        src={`${element.imgUrl}`}
                                        alt="This is an icon"
                                    />
                                </div>
                                <div className="achievement-bottom-con">
                                    <h1>{element.title}</h1>
                                    <p>{element.subtitle}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="achievement-reward-con">
                    <ul className="achievement-reward-subcon">
                        {achievementList.map((element) => {
                            return (
                                <li key={element.id}>
                                    <Image
                                        width={150}
                                        height={190}
                                        src={`${element.imgUrl}`}
                                        alt="This is an reward img"
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </ul>
        </section>
    )
}
