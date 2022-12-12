import axios from "axios"
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
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

return(
    <>
    <SelectMovie>Selecione o(s) assento(s)</SelectMovie>
    <>
    <SetupSeats>
    {session.seats.map((s)=> <RendSeats>{s.name}</RendSeats>)}
    </SetupSeats>
    </>
    </>
)
}

const SetupSeats = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
justify-content: space-around;
`

const RendSeats = styled.div`
width: 26px;
height: 26px;
left: 24px;
top: 158px;
background-color:  #C3CFD9;
margin-left: 4px;
margin-right: 4px;
margin-top: 10px;
border: 1px solid #808F9D;
border-radius: 12px;
display: flex;
justify-content:center;
align-items:center`


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