import React from 'react'

import pistolas from '../../data/pistolas'

export default props => {

    function getProdutosListItem() {
        return pistolas.map(prod => {
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