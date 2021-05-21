import {useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './header.module.scss'
import Container from './container'
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'
import Row from './row'



export default function Header () {
    const [isMenuVisible, setMenuVisible]= useState(false)
    return(
        <header className={styles.header}> 
        <Container>
            <Row justifyContentSpaceBetween>
        <Link href="/">
            <a>
                <Image 
                src="/images/starbucks-logo.svg"
                width={100}
                height={100}
                alt="starbucks logo"
             />
             </a>
         </Link>
         <ButtonUI icon="menu" clickHandler={()=> {
             setMenuVisible(true)
         }}/>
         {
             isMenuVisible && 
               <NavOverlay closeClickHandler={() => {
                    setMenuVisible(false)
               }} />
         }
         </Row>
       </Container>
         </header>
    )
}