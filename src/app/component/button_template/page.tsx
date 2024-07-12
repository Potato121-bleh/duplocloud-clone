import './button.css'
type btnType = {
    title: string,
    bg_color:string,
    txt_color: string,
}

export default function Button_template({title, bg_color, txt_color}:btnType){
    return(<>
    <button className={`btn_template ${bg_color} ${txt_color}`}  >{title}</button>
    </>)
}

