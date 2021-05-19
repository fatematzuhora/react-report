import { STORE_DATA, SET_PRACTITIONER, UNSET_PRACTITIONER } from 'store/actions/types';

// app actions
export const storeData = (
    appointments: any[],
    practitioners: any[]
) => {
    return {
        type: STORE_DATA,
        payload: {
            appointments,
            practitioners
        }
    }
};


export const setPractitioner = (practitioner_id: number) => {
    return {
        type: SET_PRACTITIONER,
        payload: {
            practitioner_id
        }
    }
};


export const unsetPractitioner = (status: boolean) => {
    return {
        type: UNSET_PRACTITIONER,
        payload: {
            status
        }
    }
};