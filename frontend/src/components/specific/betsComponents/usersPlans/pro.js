import React from "react";
import Bet from "..";

export default function ProPlan(){
    const betComponents = Array.from({ length: 5}, (_, index) => (
        <Bet key={index} index={index }/>
    ));
    return(
        <>
            {betComponents}
        </>
    );
}