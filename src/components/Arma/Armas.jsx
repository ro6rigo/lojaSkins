import React from 'react'

import ak from '../../data/ak-47'

export default props => {

    function getProdutosListItem() {
        return ak.map(prod => {
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