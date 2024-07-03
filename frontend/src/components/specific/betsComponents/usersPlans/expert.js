import React from "react";
import Bet from "..";

export default function ExpertPlan(){
    const betComponents = Array.from({ length: 10}, (_, index) => (
        <Bet key={index} index={index }/>
    ));
    return(
        <>
            {betComponents}
        </>
    );
}