import './solutioncard.css'
import ButtonTemplate from '@/app/component/buttonTemplate/ButtonTemplate'

export default function SolutionCard() {
    const cardList = [
        {
            id: 1,
            title: 'DevOps Automation',
            desc: 'Empower engineering to focus on what moves the business (not manual tasks).',
        },
        {
            id: 2,
            title: 'Cloud Migration Services',
            desc: 'Migrate your business to the cloud faster, with compliance and security built-in.',
        },
        {
            id: 3,
            title: 'Compliance & Security',
            desc: 'Maintain the highest industry compliance and security standards through automation.',
        },
        {
            id: 4,
            title: 'On-Premises',
            desc: 'Automate your DevOps on-prem with compliance and security out-of-the-box.',
        },
    ]

    return (
        <section className="solutionCard-main-con">
            <div className="solutionCard-title-con">
                <h1 className="solutionCard-title">
                    Whatever your use case, we have the solution
                </h1>
            </div>
            <ul className="solutionCard-card-con">
                {cardList.map((element) => {
                    return (
                        <li
                            key={element.id}
                            className="solutionCard-card-child"
                            id={`solutionCard-card-id${element.id}`}
                        >
                            <h3>{element.title}</h3>
                            <p>{element.desc}</p>
                            <div className="solutionCard-btn-con">
                                <ButtonTemplate
                                    title="LEARN MORE"
                                    txtColor="black"
                                    bgColor="green"
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
