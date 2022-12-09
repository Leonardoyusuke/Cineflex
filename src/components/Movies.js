import axios from "axios";
import {useState, useEffect} from 'react'
import styled from "styled-components";
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
        
			{itens.map((movie) =>
            <MovieBackground>
             <img src={movie.posterURL}  />
             </MovieBackground>)
            }
		
        </>
	);
}



const MovieBackground = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    img{
    width: 129px;}`