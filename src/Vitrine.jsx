import React from "react";
import { Link } from "react-router-dom";
// import Card from "./components/layout/Card";
// import Armas from "./components/Arma/Armas";
// import Armas1 from "./components/Arma/Armas1";
// import Armas2 from "./components/Arma/Armas2";
// import Armas3 from "./components/Arma/Armas3";
// import Armas4 from "./components/Arma/Armas4";
// import Armas5 from "./components/Arma/Armas5";
// import Armas6 from "./components/Arma/Armas6";
// import Armas7 from "./components/Arma/Armas7";
import { usePageTracking, sendEvent, initializeGA } from "./tracking";
const Vitrine = () => {
    const pageTitle = "Vitrine";
    const session = Date.now().toString(36);

    initializeGA(session);
    usePageTracking(pageTitle);

    return (
    
    <div>
        <h1>CS:GO</h1>       
        <button onClick={() => sendEvent({ category: 'Painel de Armas', action: 'Evento de clique', 
        label: 'Butina Store', value: 1, pageTitle: pageTitle })}> Butina Store</button>     
        <nav>
        <Link to={'contato'}>Contato</Link>
        <br/>
        <Link to={'/sobre'}>Sobre</Link>
        </nav>    
        {/* <div className="Cards">
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
        </div> */}
    </div>
)
}
export default Vitrine;
