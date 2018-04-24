import axios from 'axios';

export const ProductCreateAction = newProduct => {
    return {
        type: 'Product.Create',
        payload: {
            product: newProduct
        }
    }
};

export const ProductReadAction = products => {
    return {
        type: 'Product.Read',
        payload: {
            products: products
        }
    }
};

export const ProductUpdateAction = newProduct => {
    return {
        type: 'Product.Update',
        payload: {
            product: newProduct
        }
    }
};

export const ProductDeleteAction = product => {
    return {
        type: 'Product.Delete',
        payload: {
            product: product
        }
    }
};

export const apiRequest  = () => {
    const request = axios.get('http://localhost:3000/data.json');
    return dispatch => {
        request.then((response)=>{
            dispatch(
                ProductReadAction(response.data)
            );
        });
    }
};
