import React from "react";
import { InputContainer } from "./styles";

export default function Input({icon, type, id, placeholder, readOnly, value, onChange}){
    return(
        <InputContainer>
            {icon}
            <input type={type} id={id} placeholder={placeholder} required readOnly={readOnly} value={value} onChange={onChange} />
        </InputContainer>
    );
}