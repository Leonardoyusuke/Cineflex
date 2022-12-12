import { useState } from "react";
import styled from "styled-components";

export default function SeatsStatus({s, }){
const [color,setColor] = useState("#C3CFD9")
const [clicked,setClicked] = useState(false)

function click(){
    if (s.isAvailable == true && clicked == false){
        setColor("#1AAE9E")
        setClicked(true)
    }
    else if(clicked==true){
        setColor("#C3CFD9")
        setClicked(false)
        console.log(clicked)
    }

    else if(s.isAvailable==false){
        alert("Esse assento não está disponível")
    }
}

return (
    <Seat 
    color={color}
    onClick={click}
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