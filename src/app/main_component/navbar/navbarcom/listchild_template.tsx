import './../navbar.css'
type listofType = {
    title: string,
    dd: string,
    dd_second: string,
    unique: string
}

export default function Listof({title, dd, dd_second, unique}:listofType){
    if(unique){
        return(<>
            <h3 className={`navbar-subchild-title ${unique}`} >{title}</h3>
            <h4 className='navbar-subchild-dd' >{dd}</h4>
            <h4 className='navbar-subchild-dd second'>{dd_second}</h4>
            </>)
    }
    else{
        return(<>
            <h3 className={`navbar-subchild-title`} >{title}</h3>
            <h4 className='navbar-subchild-dd' >{dd}</h4>
            <h4 className='navbar-subchild-dd second'>{dd_second}</h4>
            </>)
    }
}