import React from "react";
import Bet from "..";
import Button from "../../../common/button";

export default function FreePlan(){
    return(
        <>
            <Bet />
            <Bet />
            <Bet />
            <Button link="/plans" title="MAIS SINAIS"/>
        </>
    );
}