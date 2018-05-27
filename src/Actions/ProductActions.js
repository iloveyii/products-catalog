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

function handleResponse(response) {
    console.log(response);
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        // throw error;
    }
}

export const apiRequest  = () => {
    // const request = fetch('http://localhost:4000/api/v1/products');
    // console.log('request', request);

    return dispatch => {


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('Response by ajax: ', this.responseText );
            }
        };
        xhttp.open("GET", "http://localhost:4000/api/v1/products", true);
        xhttp.send();

    };



};
