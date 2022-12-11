import styled from "styled-components";
import axios from "axios";
import {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
export default function SelectedMovie(){
    const { idFilme } = useParams();
    console.log(idFilme)
    const [itens,setItens] = useState([]);
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
        requisicao.then(resposta => {
			setItens(resposta.data);
        requisicao.catch(error => alert(error.response.data.message));}
        )} , [])
    console.log(itens.days)
    return(
        <>
        <SelectMovie>Selecione o horário</SelectMovie>
        
        {itens.days? itens.days.map((movie) =>
            <h1>{movie.weekday} </h1>
             ):<></>}
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