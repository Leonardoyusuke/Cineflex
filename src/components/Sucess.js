import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sucess({chosenSeats,nome,cpf,itens,session, setChosenSeats}){
    console.log(session)
    console.log(chosenSeats)
    console.log(itens)
    console.log(cpf)


    function clean(){
        setChosenSeats("")
    }
    return(<>
        <SelectMovie>Pedido feito com sucesso!</SelectMovie>
        <div data-test="movie-info">
        <Tittles>Filme e sessão</Tittles>
        <P1>{itens.title}</P1>
        <P1>{session.day.date}    {session.name}</P1></div>
        <div data-test="seats-info" ><Tittles>Ingressos</Tittles>
       
        {chosenSeats.map((c)=><FixLayout2>Assentos {c}</FixLayout2>)}
        </div>
        <div data-test="client-info" ><Tittles>Comprador</Tittles>
        <P1>Nome:{nome}</P1>
        <P1>CPF:{cpf}</P1></div>
        <Link data-test="go-home-btn" to={"/"}>
        <Fix>
        <Finish onClick={clean}>Voltar pra Home</Finish></Fix>
        </Link> 
    </>
    )
}
const Fix = styled.div`
display:flex;
justify-content:center`
const FixLayout2 = styled.div`
display:flex;
flex-direction:column;
box-sizing: border-box;
max-width: 375px;
margin-left:15px`

const Finish = styled.div`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
margin-top:100px;
display:flex;
justify-content:center;
align-items:center`

const P1 = styled.p`
width: 374px;
height: 110px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
margin-left: 15px;
margin-top:-75px;
margin-bottom:-85px;
box-sizing: border-box;`

const SelectMovie = styled.div`
width: 374px;
height: 110px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
color: #247A6B;
justify-content: center;
margin-bottom:-40px`

const Tittles = styled.div`
width: 374px;
height: 110px;
left: 29px;
top: 156px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
margin-bottom: -30px ;
margin-left: 15px;
color: #293845;
margin-top:30px`
