import './button.css'
type btnType = {
    title: string
    bgColor: string
    txtColor: string
}

export default function Button({
    title,
    bgColor,
    txtColor,
}: Readonly<btnType>) {
    return (
        <button className={`btn-template ${bgColor} ${txtColor}`}>
            {title}
        </button>
    )
}
