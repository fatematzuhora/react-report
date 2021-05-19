import { STORE_DATA, SET_PRACTITIONER, UNSET_PRACTITIONER } from 'store/actions/types';

// initial state
let initialState = {
    appointments: [],
    practitioners: [],
    practitioner_id: null
};

// app reducer switch case
const appReducer = (state=initialState, action: any) => {

    switch (action.type) {
        // STORE_DATA CASE
        case STORE_DATA:
            state.appointments = action.payload.appointments;
            state.practitioners = action.payload.practitioners;

            return Object.assign({}, state);

        // SET_PRACTITIONER CASE
        case SET_PRACTITIONER:
            if(action.payload.practitioner_id) {
                state.practitioner_id = action.payload.practitioner_id;
            }

            return Object.assign({}, state);
        
        // UNSET_PRACTITIONER CASE
        case UNSET_PRACTITIONER:
            if(action.payload.status === true) {
                state.practitioner_id = null;
            }

            return Object.assign({}, state);
        
        // DEFAULT CASE
        default:
            return state;
    }
}

export default appReducer;