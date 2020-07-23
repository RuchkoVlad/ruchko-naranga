import { ALL_PEOPLE_CONSTANTS } from '../constants';

const getAllPeople = (state, action) => {
    if (state === undefined) {
        return {
            data: [],
            loading: true,
            error: false,
        };
    }

    switch (action.type) {
    case ALL_PEOPLE_CONSTANTS.GET_ALL_PEOPLE_REQUEST:
        return {
            data: [],
            loading: true,
            error: false,
        };

    case ALL_PEOPLE_CONSTANTS.GET_ALL_PEOPLE_SUCCESS:
        return {
            data: action.payload,
            loading: false,
            error: false,
        };

    case ALL_PEOPLE_CONSTANTS.GET_ALL_PEOPLE_FAILURE:
        return {
            data: [],
            loading: false,
            error: true,
        };

    default:
        return state;
    }
};

export default getAllPeople;
