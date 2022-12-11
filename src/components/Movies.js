import axios from "axios";
import {useState, useEffect} from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import SelectedMovie from "./SelectedMovie";

export default function Movies(){
    const [itens,setItens] = useState([]);
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        requisicao.then(resposta => {
			setItens(resposta.data);
        requisicao.catch(error => alert(error.response.data.message));
    
    }
    )} , [])

    return (<>
            <SelectMovie>Selecione o filme</SelectMovie>
            <LayoutFix>
			{itens.map((movie) =>
            <MovieBackground>
            <Link to={`/sessoes/${movie.id}`}  ><img src={movie.posterURL}  /></Link>
             
             </MovieBackground>)
            }</LayoutFix>
		
        </>
	);
}

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
const LayoutFix = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap:wrap`

const MovieBackground = styled.div`
    margin: auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    img{
    width: 129px;}`