import { useState } from "react"
import axios from 'axios';

export default function Dobor() {
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState('');
    const [resposta, setResposta] = useState('');

    function adicionar() {
        setNumero([...numeros, numero]);
        setNumero('');
    }
    return (
        <main>
            <h1>Maior Numero</h1>
            <div>
                Numero: <input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))} />
                <button onClick={adicionar}>Adicionar numero</button>
            </div>

            <div>
                {numeros.map(item => 
                    <li>{item}</li>)}
            </div>

            <div>
                <button>Verificar</button>Maior numero eh:
            </div>
        </main> )}