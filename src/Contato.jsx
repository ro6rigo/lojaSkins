import React from 'react';
import { usePageTracking, sendEvent, initializeGA } from "./tracking";
const Contato = () => {
    const pageTitle = "Contato";
    usePageTracking(pageTitle);

    return (
    
    <div>
        <h1>Contato</h1>      
        <button onClick={() => sendEvent({ category: 'Pagina Contato', action: 'Evento de contato', 
        label: 'Contato', value: 1, pageTitle: pageTitle })}> Contato</button>     
    </div>
    )
}
export default Contato;