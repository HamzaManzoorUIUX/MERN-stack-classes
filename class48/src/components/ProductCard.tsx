import React, { FC } from 'react';
import { UsersDetailsProps } from '../config/types';

const ProductCard:FC<{data:UsersDetailsProps}> = ({data}) => {
    return (
        <div className='products-list-item'>
                        <div className="media">
                        <img src={data.thumbnail} alt={data.title} />
                        </div>
                        <p>
                            {data.description}
                        </p>
                    </div>
    );
};

export default ProductCard;