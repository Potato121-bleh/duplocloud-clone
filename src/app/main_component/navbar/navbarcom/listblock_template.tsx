import Image from "next/image"

type listofblockType = {
    title: string,
    image_url: string
}

export default function Listofblock({title, image_url}: listofblockType){
    return(<>
        <div className='navbar-subchild-block-con ' >
            <Image id='navbar-icon' width={49} height={44} src={image_url} alt='This is an AWS image'/>
            <h3 className={`navbar-subchild-title aws`} >{title}</h3>
        </div>
    </>)
}