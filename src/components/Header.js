import styles from "./Header.module.css"
import Image from 'next/image'

function Header() {
  return (
    <>
        <div className={styles.header}>
            <Image className={styles.sampleIcon}
            src="/favicon.ico" 
            width={30} 
            height={30}/>
        </div>
    </>
  )
}

export default Header