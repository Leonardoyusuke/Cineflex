import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyled";
import Movies from "./components/Movies";
import SelectedMovie from "./components/SelectedMovie";
import Top from "./components/Top";
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

