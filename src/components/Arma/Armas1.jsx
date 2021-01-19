import React from 'react'

import awp from '../../data/awp'

export default props => {

    function getProdutosListItem() {
        return awp.map(prod => {
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