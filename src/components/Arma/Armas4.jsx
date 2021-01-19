import React from 'react'

import facas from '../../data/facas'

export default props => {

    function getProdutosListItem() {
        return facas.map(prod => {
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