import styled from "styled-components";
import axios from "axios";
import {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
export default function SelectedMovie(){
    const { idFilme } = useParams();
    
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
            <TimeButton>
            <Link to={`/assentos/${movie.showtimes[0].id}`}>
            {movie.showtimes[0].name}
            </Link>
            </TimeButton>
            <TimeButton>
            <Link to={`/assentos/${movie.showtimes[1].id}`}>{movie.showtimes[1].name} 
            </Link>
            </TimeButton>
           
            </div>
            </FixLayout>
            </>
            )
            :<></>}
            <MiniMovie>
                <BackgroundMovie>
                <img src={itens.posterURL} />
                
                </BackgroundMovie>
                <Tittle>{itens.title}</Tittle>
            </MiniMovie>
    
            </>
        )
    
    } 
const Tittle = styled.p`
position:absolute;
top:30px;
left:100px;
color: #293845;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;`    

const BackgroundMovie = styled.div`
width: 64px;
height: 89px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 12px;
left: 12px;
`

const MiniMovie = styled.div`
position: relative;
background-color:#DFE6ED;
width: 375px;
height: 117px;
left: 0px;
bottom: 0px;
img{
    width: 48px;
height: 72px;
}
`

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
color:white
`

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