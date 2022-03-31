import { Link } from "react-router-dom"
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
            <img src={logo} />
        </>
    )
}

function Formulario () {
    return (
        <form className="formulario">
            <input type="email" placeholder="email" required/>
            <input type="password" placeholder="password" required/>
            <input type="text" placeholder="nome" required />
            <input type="url" placeholder="foto" required />
            <button type="submit">Cadastrar</button>
        </form>
    )
}

function Login () {
    return (
        <Link to="/">
            Já tem uma conta? Faça login!
        </Link>
    )
}