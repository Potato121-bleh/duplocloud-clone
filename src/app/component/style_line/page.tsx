import './style_line.css'

type style_lineType = {
    color: string,
    color_top: string,
}

export default function Style_line({color, color_top}:style_lineType){
    return(<>
    <div className={`sl-main-con ${color}`} >
        <div className={`sl-top ${color_top}`} ></div>
    </div>
    </>)
}