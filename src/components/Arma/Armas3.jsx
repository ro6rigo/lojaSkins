import React from 'react'

import demais from '../../data/demais'

export default props => {

    function getProdutosListItem() {
        return demais.map(prod => {
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