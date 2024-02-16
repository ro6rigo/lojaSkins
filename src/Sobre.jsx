import React from 'react';
import { usePageTracking, sendEvent, initializeGA } from "./tracking";
const Sobre = () => {
    const pageTitle = "Sobre";
    usePageTracking(pageTitle);

    return (
    
    <div>
        <h1>Sobre</h1>  
        <button onClick={() => sendEvent({ category: 'Pagina Sobre', action: 'Evento de sobre', 
        label: 'Sobre', value: 1, pageTitle: pageTitle })}> Sobre</button>       
    </div>
    )
}
export default Sobre;