import { useState } from "react";
import styled from "styled-components";

export default function SeatsStatus({s, ids,chosenSeats,setChosenSeats,seatsId,setSeatsId }){
const [color,setColor] = useState("#C3CFD9")
const [clicked,setClicked] = useState(false)


function click(seatNumber, seatId){
    if (s.isAvailable == true && clicked == false){
        setColor("#1AAE9E")
        setClicked(true)
        ids.push(s.id)
        setChosenSeats([...chosenSeats,seatNumber])
        setSeatsId([...seatsId,seatId])
        console.log(seatsId)
        console.log(chosenSeats)
    }
    else if(clicked==true){
        setColor("#C3CFD9")
        setClicked(false)
        console.log(clicked)
        ids.remove(s.id)
        console.log(ids)
    }

    else if(s.isAvailable==false){
        alert("Esse assento não está disponível")
    }
}

return (
    <Seat 
    color={color}
    onClick={() => click(s.name,s.id)}
    isAvailable={s.isAvailable}>
        {s.name}
    </Seat>
)

}

const Seat = styled.div`
display: flex;
width: 26px;
height: 26px;
font-size: 11px;
background-color: ${props => props.isAvailable ? props.color : "#FBE192"};
border-radius: 12px;
margin: 0 5px 18px 5px;
justify-content: center;
align-items: center;
cursor: pointer;`