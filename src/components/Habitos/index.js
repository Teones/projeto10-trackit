import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import semiCirculo from "../../assepts/semi-circulo.png"
import "./styles.css"

export default function Habitos (props) {
    const {token, perfil} = props
    const [adicionar, setAdicionar] = useState(false)

    return (
        <div className="habitos">
            <Header perfil={perfil} />
            <AdicionarHabitos adicionar={adicionar} setAdicionar={setAdicionar} />
            <CriarHabito adicionar={adicionar} setAdicionar={setAdicionar} token={token} />
            <ListaHabitos token={token} />
            <Footer />
        </div>
    )
}

function Header ({perfil}) {
    return (
        <div className="header">
            TrackIt
            <img src={perfil} alt="imagem de perfil"/>
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
function CriarHabito ({adicionar, setAdicionar, token}) {
    const [habito, setHabito] = useState("")
    const [dias, setDias] = useState([])

    const semana = [
        {dia: "domingo", sigla: "D", numero:0},
        {dia: "segunda", sigla: "S", numero:1},
        {dia: "terça", sigla: "T", numero:2},
        {dia: "quarta", sigla: "Q", numero:3},
        {dia: "quinta", sigla: "Q", numero:4},
        {dia: "sexta", sigla: "S", numero:5},
        {dia: "sábado", sigla: "S", numero:6}
    ]

    function Salvar () {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const body = {
            name: habito,
            days: [dias]
        }
        const promise = axios.post(url, body, config)
        promise.then( response => {
            const {data} = response
            setAdicionar(false)
        })
        promise.catch(err => {
            let frase = `Erro ${err.response.status}, ${err.response.data.message} `
            alert(frase)
        })
    }

    return (
        <>
            {adicionar ? 
                <div className="criar-habito">
                    <input type="text" placeholder="nome do hábito" value={habito} onChange={(e) => setHabito(e.target.value)} />
                    <div className="semana">
                        {semana.map(dia => <Botao sigla={dia.sigla} numero={dia.numero} setDias={setDias} /> )}
                    </div>
                    <div className="acoes">
                        <button className="cancelar" onClick={() => setAdicionar(false)}>Cancelar</button>
                        <button className="salvar" onClick={() => Salvar()}>Salvar</button>
                    </div>
                </div> 
                : ""
            }
        </>
    )
}

function Botao ({sigla, numero, setDias}) {
    const [selecionar, setSelecionar] = useState(false)
    if(selecionar === true) {
        setDias(numero)
    }
    
    let css = `${selecionar}`
    return (
        <button className={css} onClick={() => setSelecionar(!selecionar)}>
            {sigla}
        </button>
    )
}

function ListaHabitos ({token}) {
    const [temHabitos, setTemHabitos] = useState("")
    
    useEffect(() => {
        requisicao();
    }, []);

    function requisicao() {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(url, config)
        promise.then( response => {
            const {data} = response
            setTemHabitos(data)
            console.log(temHabitos)
        })
        promise.catch(err => {
            console.log(`Erro ${err.response.status}, ${err.response.data.message} `)
        })
    }

    return (
        <>
            {temHabitos && temHabitos < temHabitos.length ? 
                <>
                    {/* {habitos.map(habito => <HabitosCriados id={habito.id} name={habito.name} days={habito.days} />)} */}
                </>
                :
                <div className="lista-de-habitos">
                    Você não tem nenhum hábito cadastrado ainda. 
                    Adicione um hábito para começar a trackear!
                </div>
            }
        </>
    )
}

function HabitosCriados () {
    return (
        <div>
            Aqui tem um hábito
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
            <img src={semiCirculo} alt="semicirculo" />
        </div>
    )
}