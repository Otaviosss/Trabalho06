import React from 'react';

import FamiliaMembro from './MembroFamilia'

export default props => {

    return(
        <div>
            <FamiliaMembro nome="Otávio" sobrenome="Santana" />
            <FamiliaMembro nome="Vinicius" sobrenome="Santana" />
            <FamiliaMembro nome="Jorjão" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="Luis Carlos" sobrenome={props.sobrenome} />
        </div>
    )
}
