import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import logo from "../../assepts/logo_trackIt.png"

import "./styles.css"

export default function Login ({setToken, setPerfil}) {
    return (
        <div className="login">
            <Logo />
            <Formulario setToken={setToken} setPerfil={setPerfil} />
            <CadastreSe />
        </div>
    )
}

function Logo () {
    return (
        <>
            <img src={logo} alt="logo"/>
        </>
    )
}

function Formulario ({setToken, setPerfil}) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate()

    function Logar() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promise = axios.post(URL, {
            email: email,
            password: senha
        })
        promise.then( response => {
            const {data} = response
            setToken(data.token);
            setPerfil(data.image)
            console.log(data)
            navigate("/habitos")
        })
        promise.catch(err => console.log(err.response))
    }

    return (
        <div className="formulario">
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <Link to={"/habitos"}>
                <button onClick={() => Logar()}>Entrar</button>
            </Link>
        </div>
    )
}

function CadastreSe () {
    return (
        <Link to="/cadastro">
            Não tem uma conta? Cadastre-se!
        </Link>
    )
}