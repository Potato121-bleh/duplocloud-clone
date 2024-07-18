import Image from 'next/image'

interface NavblockType {
    title: string
    imageUrl: string
}

export default function Navblock({ title, imageUrl }: Readonly<NavblockType>) {
    return (
        <div className="navbar-subchild-block-con ">
            <Image
                id="navbar-icon"
                width={49}
                height={44}
                src={imageUrl}
                alt="This is an AWS image"
            />
            <h3 className={`navbar-subchild-title aws`}>{title}</h3>
        </div>
    )
}
