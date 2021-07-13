import styles from '../styles/Carrinho.module.css'


export default function Carrinho({produtoSelecionado}){
    function btnConfirmar(){
        let precoTotal = 0
        for(let produto of produtoSelecionado){
            precoTotal += produto.preco
        }
        alert ("Seu pedido foi realizado! O valor total e de: " + precoTotal +"." + " Agradecemos a preferencia!");
    }
    return(
        <div className={styles.carrinho}> <h1>Pedidos!</h1> 


        {
                produtoSelecionado.map(produto => {
                    return (<><p id="aaaaa">{produto.preco}</p>
                    <p id="aaaaa">{produto.descricao}</p></>)
                }

                )
            }

<button className={styles.confirmar} onClick = {btnConfirmar}>Confirmar</button>
        

         </div>

         
       

    )
}