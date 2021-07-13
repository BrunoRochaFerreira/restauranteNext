import styles from '../styles/Centro.module.css'
import { useEffect, useState} from 'react'

export default function Centro({produtos,  setProduto, listaProduto}){
    
    function btnAdicionar(produto){
    listaProduto.push(produto)
       setProduto([...listaProduto])
       console.log(produto)
       console.log( setProduto)
    }
    return(
        <div className={styles.centro}>  
            <p className={styles.titulocentro}><h1>Escolha seu prato</h1></p>
            <div className={styles.centroprodutos}> 
            {
                produtos.map(produto => {
                    return (
                        <div className = {styles.produto}>
                        <img className={styles.estiloimg} src = {"http://localhost:1337" + produto.imagem[0].url} /> 
                        <p>{produto.descricao}</p>
                        <button className={styles.btnAdicionar} onClick = {()=> btnAdicionar(produto)}>Adicionar</button>
                        <p className={styles.valor}>${produto.preco}</p>
                    </div>
                    )
                })
               

            }   


             </div>  

             

             </div>
            
          
         
       

    )
}