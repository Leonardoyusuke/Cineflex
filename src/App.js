import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyled";
import Movies from "./components/Movies";
import SelectedMovie from "./components/SelectedMovie";
import Top from "./components/Top";
import Seats from "./components/Seats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (<>
    <BrowserRouter>
    <GlobalStyle/>
    <AppSize>
    <Top/>
    <Routes>
      <Route path="/" element={<Movies/>} />
      <Route path="/sessoes/:idFilme" element={<SelectedMovie/>} />
      <Route path="/assentos/:idSessao" element={<Seats/>}/>
    </Routes>
    </AppSize>
    </BrowserRouter>
    </>
  );
}
const AppSize = styled.div`
width: 375px;
height: 877px;`

export default App;

