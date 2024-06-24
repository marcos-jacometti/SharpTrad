import React from "react";
import { InputContainer } from "./styles";

export default function Input({icon, type, id, placeholder}){
    return(
        <InputContainer>
            {icon}
            <input type={type} id={id} placeholder={placeholder} required />
        </InputContainer>
    );
}