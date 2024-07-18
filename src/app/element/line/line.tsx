import './line.css'

type lineType = {
    color: string
    colorTop: string
}

export default function Line({ color, colorTop }: Readonly<lineType>) {
    return (
        <div className={`sl-main-con ${color}`}>
            <div className={`sl-top ${colorTop}`}></div>
        </div>
    )
}
