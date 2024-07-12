import Image from "next/image";
import styles from "./page.module.css";
import './component/button_template/button.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faPlay } from '@fortawesome/free-solid-svg-icons'

import Button_template from "./component/button_template/page";
import Style_line from "./component/style_line/page";

export default function Home() {
  return (<>
  <ul className="first_section" >
    <li className="fs-left-con" >
      <h1 id="fs-title" >DevOps on Autopilot</h1>
      <p>
        Our DevOps Automation Platform, combined with subject-matter 
        experts virtually eliminates your DevOps hiring needs. Provision
        and maintain a secure and compliant infrastructure in days - not months!
        </p>
      <div className="fs-left-btn-con" >
        <Button_template 
        title="GET A DEMO" 
        txt_color="" 
        bg_color='green' />
        <button className={`btn_template blue white fs-extra-margin`}  >
            <FontAwesomeIcon 
            className="fs-play-icon-btn" 
            icon={faPlay}/>
            SEE THE PLATFORM
        </button>
      </div>
    </li>
    <li className="fs-right-con" >
      <Image 
      id='fs-animation' 
      width={300} 
      height={300} 
      src='/duplocloud animation.png' 
      alt="This is an detail image" />
      <div className="fs-style-line-con" >
        <Style_line 
        color="yellow-line" 
        color_top="yellow-top-line" />
      </div>
    </li>
  </ul>
  </>
  );
}
