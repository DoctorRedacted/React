import axios from 'axios'
import { useState } from 'react';


export default function Index() {
    const [num, setNum] = useState('');
    const [resposta, setResposta] = useState();
    async function dobronum() {
        const resp = await axios.get('http://localhost:5000/dobro/'+num);
        setResposta(resp.data.dobro);}
    return ( 
        <main>
            <h1>SOMA</h1>
            <div>
                Numero: <input type='text' value={num} onChange={e => setNum(Number(e.target.value))}/>
            </div>
            <div>
                <button onCLick={dobronum}>Verificar</button>
            </div>
            <div>
                Dobro {resposta}
            </div>
        </main> )}