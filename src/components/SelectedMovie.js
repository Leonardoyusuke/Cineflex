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
 
    return(
        <>
        <SelectMovie>Selecione o horário</SelectMovie> 
        {itens.days? itens.days.map((movie) =><>
            <FixLayout>{movie.weekday} - {movie.date}
            <div>
            <TimeButton>{movie.showtimes[0].name}</TimeButton>
            <TimeButton>{movie.showtimes[1].name}</TimeButton></div>
            </FixLayout>
            </>
            )
            :<></>}
    
            </>
        )
    
    } 
const FixLayout = styled.div`
display:flex;
flex-direction: column;
margin-left: 50px ;
`

const TimeButton = styled.button`
width: 83px;
height: 43px;
background: #E8833A;
border-radius: 3px;
margin:15px;
margin-right: 10px;
margin-left: -5px;
color:white`

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