import React from 'react'

import m4 from '../../data/m4'

export default props => {

    function getProdutosListItem() {
        return m4.map(prod => {
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