import React from 'react'

import desert from '../../data/desert'

export default props => {

    function getProdutosListItem() {
        return desert.map(prod => {
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