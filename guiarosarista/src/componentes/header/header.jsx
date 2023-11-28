import Logo from './LogoUR.png'
import styles from './header.module.css'


const Header = ()=>{
return (
<header className={styles.header}>
  <div>
    <img src={Logo} className={styles.Logo}/>
  </div>
 
  <div className={styles.menu}>
    <div className={styles.IBox}>
    </div>
  
    <div className={styles.IBox}>
       </div>
  </div>
  </header>)
  };

export default Header;

