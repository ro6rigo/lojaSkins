import React from 'react'

import mac from '../../data/mac-10'

export default props => {

    function getProdutosListItem() {
        return mac.map(prod => {
            return <li key={prod.id}>
                {prod.id} - {prod.nome} - R$ {prod.preco}
            </li>
        })
    }

    return (
        <div>
            <ul>
                {getProdutosListItem()}    
            </ul>
        </div>
    )
}