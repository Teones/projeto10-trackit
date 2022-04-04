import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import logo from "../../assepts/logo_trackIt.png"

import "./styles.css"

export default function Cadastro () {
    return (
        <div className="cadastro">
            <Logo />
            <Formulario />
            <Login />
        </div>
    )
}

function Logo () {
    return (
        <>
            <img src={logo} alt="logo" />
        </>
    )
}

function Formulario () {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [foto, setFoto] = useState("")

    const navigate = useNavigate()

    function Cadastrar() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

        const promise = axios.post(URL, {
            email: email,
            name: nome,
            image: foto,
            password: senha
        })
        promise.then( response => {
            console.log("foi")
            const {data} = response
            console.log(data)
            navigate("/")
        })
        promise.catch(err => console.log(err.response))
    }

    return (
        <div className="formulario">
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <input type="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder="foto" value={foto} onChange={(e) => setFoto(e.target.value)} />

            <button onClick={Cadastrar}>Cadastrar</button>
        </div>
    )
}


function Login () {
    return (
        <Link to="/">
            Já tem uma conta? Faça login!
        </Link>
    )
}