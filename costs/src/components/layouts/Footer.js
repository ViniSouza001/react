import { FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer () {
   return (
      <footer className={styles.footer}>
         <ul className={styles.social_list}>
            <li>
               <a target='_blank' href='https://github.com/vinisouza001' rel='noreferrer'>
                  <FaGithub />
               </a>
            </li>
            <li>
               <a href='https://www.instagram.com/vinisouza.exe/' target='_blank' rel='noreferrer'>
                  <FaInstagram />
               </a>
            </li>
            <li>
               <a href='https://api.whatsapp.com/send/?phone=5519996898117&text&type=phone_number&app_absent=0' rel='noreferrer' target='_blank'>
                  <FaWhatsapp />
               </a>
            </li>
         </ul>
         <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2021
         </p>
      </footer>
   )
}

export default Footer