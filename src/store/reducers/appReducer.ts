import {
    STORE_DATA,
    SET_DATE_RANGE,
    UNSET_DATE_RANGE,
    SET_PRACTITIONER,
    UNSET_PRACTITIONER
} from 'store/actions/types';
import moment from 'moment';

// initial state
let initialState = {
    appointments: [],
    practitioners: [],
    practitioner_id: null,
    table_data: [],
    date_range: [],
};

const filterAppointments = (state=initialState) => {
    let data: any [];

    if (state.date_range.length === 2 && state.practitioner_id) {

        data = state.appointments
        .filter((a: any) => {
            if (
                (moment(a.date).isBetween(state.date_range[0], state.date_range[1])) &&
                (a.practitioner_id === state.practitioner_id)
            ) {
                return a;
            }
        });

    } else if (state.date_range.length === 2 && state.practitioner_id === null) {

        data = state.appointments
        .filter((a: any) => {
            if (moment(a.date).isBetween(state.date_range[0], state.date_range[1])) {
                return a;
            }
        });

    } else if (state.date_range.length === 0 && state.practitioner_id) {

        data = state.appointments.filter((a: any) => {
            if (a.practitioner_id === state.practitioner_id) {
                return a;
            }
        });
    } else if (state.date_range.length === 0 && state.practitioner_id === null) {

        data = state.appointments;

    } else {
        
        data = state.appointments;

    }

    data.sort((a: any, b: any) => {
        // @ts-ignore
        return new Date(a.date) - new Date(b.date);
    });

    return data;
}

// app reducer switch case
const appReducer = (state=initialState, action: any) => {

    switch (action.type) {
        // STORE_DATA CASE
        case STORE_DATA:
            state.appointments = action.payload.appointments;
            state.table_data = action.payload.appointments;
            state.practitioners = action.payload.practitioners;

            return Object.assign({}, state);

        // SET_DATE_RANGE CASE
        case SET_DATE_RANGE:
            if (action.payload.dates) {
                state.date_range = [
                    //@ts-ignore
                    moment(action.payload.dates[0]).format("MM/DD/YYYY"),
                    //@ts-ignore
                    moment(action.payload.dates[1]).format("MM/DD/YYYY")
                ]

                //@ts-ignore
                state.table_data = filterAppointments(state);
            }

            return Object.assign({}, state);
        
        // UNSET_DATE_RANGE CASE
        case UNSET_DATE_RANGE:
            if (action.payload.status === true) {
                state.date_range = [];
                //@ts-ignore
                state.table_data = filterAppointments(state);
            }

            return Object.assign({}, state);

        // SET_PRACTITIONER CASE
        case SET_PRACTITIONER:
            if(action.payload.practitioner_id) {
                state.practitioner_id = action.payload.practitioner_id;
                //@ts-ignore
                state.table_data = filterAppointments(state);
            }

            return Object.assign({}, state);
        
        // UNSET_PRACTITIONER CASE
        case UNSET_PRACTITIONER:
            if(action.payload.status === true) {
                state.practitioner_id = null;
                //@ts-ignore
                state.table_data = filterAppointments(state);
            }

            return Object.assign({}, state);
        
        // DEFAULT CASE
        default:
            return state;
    }
}

export default appReducer;