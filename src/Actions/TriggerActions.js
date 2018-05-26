import axios from "axios/index";

export const TriggersReadAction = () => {
    return {
        type: 'Triggers.Read'
    };
};

export const TriggersReadActionSuccess = triggers => {
    return {
        type: 'Triggers.Read.Success',
        payload: { triggers }
    };
};

export const apiRequest  = () => {

    const request = axios.get('/triggers.json',
        {
            headers: {"Access-Control-Allow-Origin":"*"}
        });

    return dispatch => {
        // dispatch({type: 'Triggers.Read'});
        dispatch({type: 'Triggers.Read.Start'});
        request.then((response)=>{
            if(Array.isArray(response.data)) {
                console.log('response data: ', response.data);
                dispatch( TriggersReadActionSuccess(response.data) );
            } else {
                dispatch({type: 'Triggers.Read.Fail'});
            }
        }).catch(error=>{
            dispatch({type: 'Triggers.Read.Fail', payload: { error} });
            console.log('Error in read', error);
        });
    }
};