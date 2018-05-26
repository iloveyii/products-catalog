import axios from 'axios';

export const ProductCreateAction = newProduct => {
    return {
        type: 'Product.Create',
        payload: {
            product: newProduct
        }
    }
};

export const ProductReadActionSuccess = products => {
    return {
        type: 'Product.Read.Success',
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
    const request = axios.get('/data.json',
        {
            headers: {"Access-Control-Allow-Origin":"*"}
        });

    return dispatch => {
        dispatch({type: 'Product.Read.Start'});
        request.then((response)=>{
            if(Array.isArray(response.data)) {
                dispatch( ProductReadActionSuccess(response.data) );
            } else {
                dispatch({type: 'Product.Read.Fail'});
            }
        }).catch(error=>{
            dispatch({type: 'Product.Read.Fail', payload: { error} });
            console.log('Error in read', error);
        });
    }
};
