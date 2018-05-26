
const TriggersReducer = (state = [], action) => {
    let triggers = state.slice(0);

    switch (action.type) {
        case 'Triggers.Read.Success':
            console.log('Inside TiggyReducer', action);
            return action.payload.triggers.slice();

        case 'Triggers.Read.Fail':
            console.log(action);
            return triggers;

        default:
            return [];
    }
}

export default TriggersReducer;