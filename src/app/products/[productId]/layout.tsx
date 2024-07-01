import React, {ReactNode} from 'react';

const ProductDetailsLayout = ({children}: {children: ReactNode}) => {
    return (
        <>
            {children}
            <h2>
                Features products
            </h2>
        </>
    );
};

export default ProductDetailsLayout;