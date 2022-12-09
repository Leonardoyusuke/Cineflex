import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyled";
import Movies from "./components/Movies";
import Top from "./components/Top";
function App() {
  return (<>
    <GlobalStyle/>
    <AppSize>
    <Top/>
    <Movies/>
    </AppSize>

    </>
  );
}
const AppSize = styled.div`
width: 375px;
height: 877px;`

export default App;

