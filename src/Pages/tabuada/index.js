import axios from 'axios'
import { useState } from 'react'


export default function Index() {
    const [num, setNum] = useState('');
    const [resposta, setResposta] = useState();
    async function tabnum() {
        const resp = await axios.get(`http://localhost:5000/tabuada/${num}`);
        setResposta(resp.data.tabuada);}
    return ( 
        <main>
            <h1>TABUADA</h1>
            <div>
                Numero: <input type='text' value={num} onChange={e => setNum(Number(e.target.value))}/>
            </div>
            <div>
                <button onCLick={tabnum}>Verificar</button>
            </div>
            <div>
                Tabuada desse numero: <p>{resposta}</p>
            </div>
        </main>)}