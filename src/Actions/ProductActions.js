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
        dispatch({type: 'Product.Read.Start'});
        request.then((response)=>{
            if(Array.isArray(response.data)) {
                dispatch({type: 'Product.Read.Success'});
                dispatch( ProductReadAction(response.data) );
            } else {
                dispatch({type: 'Product.Read.Fail'});
            }
        }).catch(error=>{
            dispatch({type: 'Product.Read.Fail', payload: { error} });
            console.log('Error in read', error);
        });
    }
};
