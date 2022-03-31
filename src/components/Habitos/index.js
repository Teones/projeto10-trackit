import { useState } from "react"
import { Link } from "react-router-dom"
import perfil from "../../assepts/homer_simpson.jpg"

import semiCirculo from "../../assepts/semi-circulo.png"
import "./styles.css"

export default function Habitos () {
    const [adicionar, setAdicionar] = useState(false)

    return (
        <div className="habitos">
            <Header />
            <AdicionarHabitos adicionar={adicionar} setAdicionar={setAdicionar} />
            <CriarHabito adicionar={adicionar} setAdicionar={setAdicionar} />
            <ListaHabitos />
            <Footer />
        </div>
    )
}

function Header () {
    return (
        <div className="header">
            TrackIt
            <img src={perfil} />
        </div>
    )
}

function AdicionarHabitos ({adicionar ,setAdicionar}) {
    return (
        <div className="titulo">
            <p>Meus Hábitos</p>
            <button onClick={() => setAdicionar(true)}>+</button>
            {adicionar ? 
                <CriarHabito /> : ""    
            }
        </div>
    )
}
function CriarHabito ({adicionar, setAdicionar}) {
    const semana = ["D", "S", "T", "Q", "Q", "S", "S" ]
    return (
        <>
            {adicionar ? 
                <div className="criar-habito">
                    <input type="text" placeholder="nome do hábito" />
                    <div className="semana">
                        {semana.map(dia => <Botao sigla={dia} /> )}
                    </div>
                    <div className="acoes">
                        <button className="cancelar" onClick={() => setAdicionar(false)}>Cancelar</button>
                        <button className="salvar">Salvar</button>
                    </div>
                </div> 
                : ""
            }
        </>
    )
}

function Botao ({sigla}) {
    const [selecionar, setSelecionar] = useState(false)
    let css = `${selecionar}`
    return (
        <button className={css} onClick={() => setSelecionar(!selecionar)}>
            {sigla}
        </button>
    )
}

function ListaHabitos () {
    return (
        <div className="lista-de-habitos">
            Você não tem nenhum hábito cadastrado ainda. 
            Adicione um hábito para começar a trackear!
        </div>
    )
}

function Footer () {
    return (
        <div className="footer">
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje"> <Hoje /> </Link>
            <Link to="/historico">Histórico</Link>
        </div>
    )
}
function Hoje () {
    return (
        <div className="hoje">
            <p>Hoje</p>
            <img src={semiCirculo} />
        </div>
    )
}