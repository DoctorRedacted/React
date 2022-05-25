import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <main>
            <h1>HOME</h1>
            <ul>
                <li><Link to='/dobro'>DOBRO DE UM NUMERO</Link></li>
                <li><Link to='/media'>MEDIA</Link></li>
                <li><Link to='/soma'>SOMAR</Link></li>
                <li><Link to='/tabuada'>TABUADA</Link></li>
                <li><Link to='/corprimaria'>COR PRIMARIA</Link></li>
                <li><Link to='/cinema'>Cinema</Link></li>
                <li><Link to='/maior'>Maior Numero</Link></li>
            </ul>
        </main>
    )
}