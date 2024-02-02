import React, {useState} from "react";
import Pastel from "./pastel.jpg"
import Caldo from "./caldo de cana.gif"
import Coca from "./coca vidro.webp"
import Carrinho from "./Carrinho.png"

export default function Main() {
    
   
    const [numero, setNumero] = useState (0)
    const Adicionar = () => {
       
        if(numero < 10){
            setNumero(numero +1)
        }
    }
    
    return (
        <main>
            
            <section>
                <img className="galeriaMain" src={Pastel} alt="Imagem de um pastel apetitoso" />
                <h3>R$10,00</h3>
                <img onClick={Adicionar} src={Carrinho} alt="Botão do carrinho"/>
                <h2> {numero} Itens </h2>
            </section>

            <section>
                <img className="galeriaMain" src={Caldo} alt="Imagem de um caldo de cana geladinho" />
                <h3>R$7,00</h3>
                <button> <img src={Carrinho} alt=""/>Carrinho </button>
                <h2>0</h2>
            </section>

            <section>
                <img className="galeriaMainCoquinha" src={Coca} alt="Imagem de uma coca de pastelaria" />
                <h3>R$6,00</h3>
                <button> Carrinho </button>
                <h2>0</h2>
            </section>

        </main>
    )
}