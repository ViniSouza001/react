import styles from '../Frase.module.css'

function Button ({ text, event }) {
   return <button className={styles.button} onClick={event}>{text}</button>
}

export default Button