import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Habitos from "./components/Habitos";

export default function App () {
    const [token, setToken] = useState("")
    const [perfil, setPerfil] = useState("")

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} setPerfil={setPerfil }/>} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/habitos" element={<Habitos token={token} perfil={perfil} />} />
            </Routes>
        </BrowserRouter>
    )
}

