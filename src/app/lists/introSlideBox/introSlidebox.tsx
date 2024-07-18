import './introSlidebox.css'

export default function IntroSlidebox() {
    return (
        <section className="introSlidebox-main-con">
            <ul className="introSlidebox-text-con">
                <li className="introSlidebox-text-top">
                    <h1>
                        Are you a technical founder or CTO of a growing startup?
                    </h1>
                </li>
                <li className="introSlidebox-text-middle">
                    <p>
                        Then you know how tough it can be to get your cloud
                        infrastructure and security sorted, especially when
                        you're tight on resources or expertise.
                    </p>
                    <p id="introSlidebox-text-dd">
                        Now, you could try to figure it out on your own or hire
                        an expensive professional services vendor. But why go
                        through that hassle?
                    </p>
                </li>
                <li className="introSlidebox-text-bottom">
                    <p className="introSlidebox-text">
                        DuploCloud makes it all a breeze helping you launch your
                        product without the headaches or hefty price tag. We're
                        here to make your start up
                    </p>
                    <p id="introSlidebox-text-dd">
                        journey smoother and smarter with innovative DevOps
                        automation that lets your team focus on creating
                        innovations of their own.
                    </p>
                </li>
            </ul>
        </section>
    )
}
