import { ALL_PEOPLE_CONSTANTS } from '../constants';

const getAllPeopleRequested = () => ({
    type: ALL_PEOPLE_CONSTANTS.GET_ALL_PEOPLE_REQUEST,
});

const getAllPeopleLoaded = data => ({
    type: ALL_PEOPLE_CONSTANTS.GET_ALL_PEOPLE_SUCCESS,
    payload: data,
});

const getAllPeopleError = error => ({
    type: ALL_PEOPLE_CONSTANTS.GET_ALL_PEOPLE_FAILURE,
    payload: error,
});

const getAllPeopleAction = service => () => dispatch => {
    dispatch(getAllPeopleRequested());
    service
        .getAllPeople()
        .then(data => {
            dispatch(getAllPeopleLoaded(data));
        })
        .catch(err => {
            dispatch(getAllPeopleError(err));
        });
};


export default getAllPeopleAction;
