import axios from "axios"
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SeatsStatus from "./SeatsStatus";
export default function Seats(){
    const { idSessao } = useParams();
    const [session, setSession] = useState(undefined)
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        requisicao.then(resposta => {
			setSession(resposta.data);
        requisicao.catch(error => alert(error.response.data.message));}
        )} , [])

if (session === undefined) {
    return<div>Carregando...</div>
}
function selected(){

}

return(
    <>
    <SelectMovie>Selecione o(s) assento(s)</SelectMovie>
    <>
    <SetupSeats>
    {session.seats.map((s)=> <SeatsStatus s={s}     />)}
    </SetupSeats>
    <FixLayout>
    <SelectedSeat> <p>Selecionado</p></SelectedSeat>
    <AvailableSeat><p>Disponivel</p></AvailableSeat>
    <BusySeat><p>Indisponivel</p></BusySeat>
    </FixLayout>
    </>
    </>
)
}

const FixLayout = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
p {
margin-top: 30px;
margin-left: -20px;
}
`

const SelectedSeat = styled.div`
background-color: #1AAE9E;
width: 25px;
height: 25px;
border: 1px solid #0E7D71;
border-radius: 17px;`

const BusySeat = styled.div`
background-color: #FBE192;;
width: 25px;
height: 25px;
border: 1px solid #0E7D71;
border-radius: 17px;`

const AvailableSeat = styled.div`
background-color: #C3CFD9;
width: 25px;
height: 25px;
border: 1px solid #0E7D71;
border-radius: 17px;
`  

const SetupSeats = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: space-around;
`

const SelectMovie = styled.div`
width: 374px;
height: 110px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
color: #293845;
justify-content: center`