import { Link } from "react-router-dom"
import logo from "../../assepts/logo_trackIt.png"

import "./styles.css"

export default function Login () {
    return (
        <div className="login">
            <Logo />
            <Formulario />
            <CadastreSe />
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
            <input type="email" value="email" required/>
            <input type="password" value="password" required/>
            <button type="submit">Entrar</button>
        </form>
    )
}

function CadastreSe () {
    return (
        <Link to="/cadastro">
            Não tem uma conta? Cadastre-se!
        </Link>
    )
}