import React from "react";

const Attributes = (props) => {
    const { categories, businessModels, trl } = props;

    return(
        <div>
            <ul>
                {categories && categories.length > 0 && categories.map( category => 
                    <li key={category.id} contentEditable={true}>{category?.name || ''}</li>
                )}
            </ul>
            <ul>
                {businessModels && businessModels.length > 0 && businessModels.map( model =>
                    <li key={model.id} contentEditable>{model?.name || ''}</li>
                )}
            </ul>
            <p contentEditable>{trl && trl?.name || ''}</p>
        </div>
    )
}

export default Attributes;