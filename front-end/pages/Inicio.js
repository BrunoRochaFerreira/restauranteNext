import Botoes from '../components/Botoes'
import Menu from '../components/Menu'
import Centro from '../components/Centro'
import Carrinho from '../components/Carrinho'
import { useEffect, useState} from 'react'
export default function Inicio(props){

    
   const [produtos, setProdutos] = useState([])
   const [produto, setProduto] = useState([])
   
    useEffect(()=>{
       async function getProdutos(){
           const response = await fetch("http://localhost:1337/produtos")
           setProdutos(await response.json()) 
       }

       getProdutos()
    },[])
    return(
        <div>
            <Menu/>
            <Botoes/>
            <Carrinho produtoSelecionado = {produto}/>
            <Centro produtos = {produtos} setProduto = {setProduto} listaProduto = {produto}/>
            

        </div>
    )
}