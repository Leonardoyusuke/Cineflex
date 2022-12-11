import styled from "styled-components"
export default function Top(){
return (<>
    <BackgroundGray><TextTop>CINEFLIX</TextTop></BackgroundGray>
    </>
)
}



const BackgroundGray = styled.div`
background-color: #C3CFD9;
//position: absolute;
width: 375px;
height: 67px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
`
const TextTop = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
color: #E8833A;`

