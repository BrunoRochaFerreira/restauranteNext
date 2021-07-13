import styles from '../styles/Botoes.module.css'

export default function Botoes(){
    return(
        <div className={styles.botoes}>  
        
            <ul className={styles.botoesepacamento}>

                <li className={styles.botao1}><a className={styles.link} href = '#'> Home </a></li> 
                <li className={styles.botao2}><a className={styles.link} href = '#'> Sobre </a></li>
                

            </ul>

        </div>
    )
}