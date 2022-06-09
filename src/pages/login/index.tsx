import { useState } from "react"

export const login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email,setEmail] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState('');
    const handlelogin= () =>{}
    return (
        <div>
            <h2>Pagina fechada</h2>
            <input type="text" value={email}  placeholder="Digite seu e-mail"/>
            <input type="password" placeholder="Digite sua senha" value={password} />
            <button onClick={handlelogin}>logar</button>
        </div>
    )
}