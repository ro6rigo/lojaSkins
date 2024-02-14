import "./App.css";
import React from "react";
import { useEffect, useState } from 'react';
import GA4 from "react-ga4";
import Card from "./components/layout/Card";
import Armas from "./components/Arma/Armas";
import Armas1 from "./components/Arma/Armas1";
import Armas2 from "./components/Arma/Armas2";
import Armas3 from "./components/Arma/Armas3";
import Armas4 from "./components/Arma/Armas4";
import Armas5 from "./components/Arma/Armas5";
import Armas6 from "./components/Arma/Armas6";
import Armas7 from "./components/Arma/Armas7";
import { usePageTracking } from "./tracking";
export default function App(){
    const pageTitle = "Vitrine";
    usePageTracking(pageTitle);

    function clicar(){
        const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
 
        GA4.reset();
        const options = {
            gaOptions: {
                cookie_update: false,
                send_page_view: false,
                page_title: pageTitle,
            },
        };

        const config = [
            { trackingId: GA_MEASUREMENT_ID },
        ];
        GA4.initialize(config, options);
        GA4.event(
            {
                action: 'Evento de clique',
                category: 'Painel de Armas',
                label: 'Usuario clicou no botão!',
            }
        );
        alert('Clicou!')
        console.log('Clicou!')
    }

    return (
    
    <div className="App">
        <h1>CS:GO</h1>       
        <button onClick={clicar()}>Butina Store!</button>
        {/* <button onClick={() => ReactGA.event({ category: 'Button', action: 'Click', label: 'Butina Store' })}>
            Butina Store</button> */}            
        <div className="Cards">
            <Card titulo="#AK-47" color="#73503C">
                <Armas />
            </Card>
            <Card titulo="#AWP" color="#293E6A">
                <Armas1 />
            </Card>
            <Card titulo="#DESERT EAGLE" color="#9C0F5F">
                <Armas2 />
            </Card>
            <Card titulo="#DEMAIS" color="#000">
                <Armas3 />
            </Card>
            <Card titulo="#FACAS" color="#4298B5">
                <Armas4 />
            </Card>
            <Card titulo="#MAC-10" color="#FA6900">
                <Armas5 />
            </Card>
            <Card titulo="#M4" color="#E94C6F">
                <Armas6 />
            </Card>
            <Card titulo="#PISTOLAS" color="#008BBA">
                <Armas7 />
            </Card>
        </div>
    </div>
);
}
