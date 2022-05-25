import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Dobro from './Pages/dobro'
import Soma from './Pages/soma'
import Media from './Pages/media'
import Tabuada from './Pages/tabuada'
import Primaria from './Pages/primaria'
import Cinema from './Pages/cinema'
import Maior from './Pages/maiornum';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dobro' element={<Dobro/>}/>
          <Route path='/soma' element={<Soma/>}/>
          <Route path='/media' element={<Media/>}/>
          <Route path='/tabuada' element={<Tabuada/>}/>
          <Route path='/corprimaria' element={<Primaria/>}/>
          <Route path='/maiornumero' element={<Maior/>}/>
          <Route path='/cinema' element={<Cinema/>}/>
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
