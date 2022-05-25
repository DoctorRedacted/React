import axios from 'axios';
import { useState } from 'react';

export default function Index() {
    const [qtdinteiras, setQtdInteiras] = useState(0);
    const [qtdmeia, setQtdMeia] = useState(0);
    const [diasemana, setDiasemana] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function calcular() {
        const resp = await axios.post('http://localhost:5000/cinema',{
            qtdinteiras: qtdinteiras,
            qtdmeia: qtdmeia,
            diasemana: diasemana,
            nacionalidade: nacionalidade
        })
    setTotal(resp.data.total);}
    return (
        <main>
            <h1>INGRESSO</h1>
            <div>
                Qtd.Ingresso: <input type='text' value={qtdinteiras} onChange={e => setQtdInteiras(Number(e.target.value))}/>
            </div>
            <div>
                Qtd.Meias: <input type='text'  value={qtdmeia} onChange={e => setQtdMeia(Number(e.target.value))}/>
            </div>
            <div>
                Dia da semana: <input type='text' value={diasemana} onChange={e => setDiasemana(e.target.value)}/>
            </div>
            <div>
                Nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)}/>
            </div>
            <div>
                <button onClick={calcular}>CALCULAR</button>
            </div>
            <div>
                O total eh R${total}
            </div>
        </main>
    )}