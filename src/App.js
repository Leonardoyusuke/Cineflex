import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyled";
import Movies from "./components/Movies";
import SelectedMovie from "./components/SelectedMovie";
import Top from "./components/Top";
import Seats from "./components/Seats";
import Sucess from "./components/Sucess";
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [nome,setNome] = useState("");
  const [cpf,setCpf] = useState("");
  const [seatsId,setSeatsId] = useState([])
  const [chosenSeats,setChosenSeats] = useState([]);
  const [itens,setItens] = useState([]);
  const [session, setSession] = useState(undefined)

  return (<>
    <BrowserRouter>
    <GlobalStyle/>
    <AppSize>
    <Top/>
    <Routes>
      <Route path="/" element={<Movies/>} />
      <Route path="/sessoes/:idFilme" element={<SelectedMovie itens={itens} setItens={setItens} />} />
      <Route path="/assentos/:idSessao" element={<Seats session={session} setSession={setSession} nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} chosenSeats={chosenSeats} setChosenSeats={setChosenSeats} seatsId={seatsId} setSeatsId={setSeatsId} />} />
      <Route path="/sucesso" element={<Sucess setChosenSeats={setChosenSeats} session={session} nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} chosenSeats={chosenSeats} setChosenSeats={setChosenSeats} seatsId={seatsId} itens={itens} setSeatsId={setSeatsId} />} />
    </Routes>
    </AppSize>
    </BrowserRouter>
    </>
  );
}
const AppSize = styled.div`
max-width: 375px;
height: 877px;`

export default App;

