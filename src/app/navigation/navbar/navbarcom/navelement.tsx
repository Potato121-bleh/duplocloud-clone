import './../nav.css'
type navElementType = {
    title: string
    description: string
    descriptionSecond: string
    unique: string
}

export default function NavElement({
    title,
    description,
    descriptionSecond,
    unique,
}: Readonly<navElementType>) {
    if (unique) {
        return (
            <>
                <h3 className={`navbar-subchild-title ${unique}`}>{title}</h3>
                <h4 className="navbar-subchild-description">{description}</h4>
                <h4 className="navbar-subchild-description second">
                    {descriptionSecond}
                </h4>
            </>
        )
    } else {
        return (
            <>
                <h3 className={`navbar-subchild-title`}>{title}</h3>
                <h4 className="navbar-subchild-description">{description}</h4>
                <h4 className="navbar-subchild-description second">
                    {descriptionSecond}
                </h4>
            </>
        )
    }
}
