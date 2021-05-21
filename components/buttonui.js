import Image from 'next/image'
import classnames from 'classnames/bind'
import styles from './buttonui.module.scss'

let cx = classnames.bind(styles)

export default function ButtonUI({icon, clickHandler, className}) {
    const btnuiClasses= cx({

        btn_ui: true,
        close : icon ==="close"
    })
    
    return (
        <button className= {btnuiClasses} onClick={clickHandler}> 
            <Image 
                src=
                {`/images/icon-${icon}.svg`}
                height={50}
                width={50}
                alt={`${icon} icon`}
            />
            
             </button>
    )
}