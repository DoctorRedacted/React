import axios from "axios"
import { useState } from "react";

export default function Index() {
    const [cor, setCor] = useState('');
    const [x, setResposta] = useState('');

    async function verificarCor() {
        const resp = await axios.get(`http://localhost:5000/corPrimaria/${cor}`);
            if(resp.data.cor === true) {
                setResposta('SIM!!! SANGUE NOS ZOIO');
            } else {
                setResposta('NAO!!! SANGUE NOS ZOIO');
            }
    }
    return ( 
        <main>
            <h1>COR PRIMARIA</h1>

            <div>
                Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)}/>
            </div>

            <div>
                <button onCLick={verificarCor}>Verificar</button>
            </div>

            <div>
                Eh cor primaria? == {x}
            </div>
        </main> )}