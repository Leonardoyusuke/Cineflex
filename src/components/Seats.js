import axios from "axios"
import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SeatsStatus from "./SeatsStatus";
import Sucess from "./Sucess";
export default function Seats({nome,setNome,cpf,setCpf,seatsId,setSeatsId,chosenSeats,setChosenSeats,session,setSession}){
    const { idSessao } = useParams();
    const ids = [];
    const navigate = useNavigate()
   
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
        requisicao.then(resposta => {
			setSession(resposta.data);
        requisicao.catch(error => alert(error.response.data.message));}
        )} , [])

if (session === undefined) {
    return<div>Carregando...</div>
}
function inputs(event){
    event.preventDefault();
    const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",{ids:seatsId,name:nome, cpf:cpf} )
    console.log(seatsId)
    requisicao.then(() => navigate("/sucesso",))
}

return(
    <>
    <SelectMovie>Selecione o(s) assento(s)</SelectMovie>
    <>
    <SetupSeats>
    {session.seats.map((s)=><> <SeatsStatus 
    s={s} ids={ids} chosenSeats={chosenSeats} setChosenSeats={setChosenSeats} seatsId={seatsId} setSeatsId={setSeatsId}  />
    </>)}
    </SetupSeats>
    <FixLayout>
    <SelectedSeat> <p>Selecionado</p></SelectedSeat>
    <AvailableSeat><p>Disponivel</p></AvailableSeat>
    <BusySeat><p>Indisponivel</p></BusySeat>
    </FixLayout>
    <InputForm onSubmit={inputs}>
    <H1>Nome do comprador:</H1>
    <input type="Text" placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)} required/>
    <H1>CPF do comprador:</H1>
    <input type="number" placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)}required/>
    <Submit>Reservar assento(s)</Submit>
    </InputForm>
    <MiniMovie>
        <BackgroundMovie>
        <img src={session.movie.posterURL} />                
        </BackgroundMovie>
        <Tittle>{session.movie.title} <div></div> {session.day.weekday}-{session.name}</Tittle>
    </MiniMovie>
    </>
    </>
)
}
const Submit = styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
margin-top:20px;
margin-left:30px`

const H1 = styled.h1`
margin-top:10px`


const InputForm = styled.form`
margin-top:50px;
margin-left:20px;
`

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
const Tittle = styled.p`
position:absolute;
top:15px;
left:100px;
color: #293845;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;`    
