import { useState, useEffect } from "react"
import send from "../assets/send.png"

export default function Inicio() {

    const [acessorios, setAcessorios] = useState()
    const [contato, setContato] = useState()
    const [doacao, setDoacao] = useState()
    const [inicio, setInicio] = useState()

    return (
        <div>
        <section>
            <h1>Feliz Natal e Feliz Ano Novo!</h1>
            <p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>

            <button>Fazer uma doação</button>

            <figure>
                <img src={send} />
            </figure>
        </section>
    </div>

    )
}