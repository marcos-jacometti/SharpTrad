import React from "react";
import Bet from "..";
import Button from "../../../common/button";

export default function FreePlan(){
    const betComponents = Array.from({ length: 3}, (_, index) => (
        <Bet key={index} index={index }/>
    ));
    return(
        <>
            {betComponents}
            <Button link="/plans" title="MAIS SINAIS" />
        </>
    );
}