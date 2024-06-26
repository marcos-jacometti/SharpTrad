import React from "react";
import Header from "../../components/common/header";
import { Announcement, Board, Boards, Container, Content } from "./styles";
import { Link } from "react-router-dom";
import RadialChart from "../../components/specific/charts/radialChart";
import LineChart from "../../components/specific/charts/lineChart";
import ColumnChart from "../../components/specific/charts/columnChart";
import img from "../../assets/images/1.png"

export default function HomeContainer(){
    return(
        <Container>
            <Header />
            <Content>
                <Boards>
                    <Link to="https://trade.avalonbroker.io/register?aff=415320&aff_model=revenue&afftrack="><Announcement /></Link>
                    <Board $height="50vh" $width="50vw"></Board>
                    <Board $height="50vh" $width="17vw">
                        <h5>Assertividade dos últimos 30 dias (Sinais SharpBot)</h5>
                        <RadialChart />
                    </Board>
                    <Board $height="40vh" $width="30vw">
                        <h5>Número de Sinais SharpBot</h5>
                        <LineChart />
                    </Board>
                    <Board $height="40vh" $width="30vw">
                        <h5>Número de Sinais por Plano</h5>
                        <ColumnChart />
                    </Board>
                    <Link to="/bets">
                        <Board $height="70vh" $width="70vw" $background={img} />
                    </Link>
                </Boards>
            </Content>
        </Container>
    );
}