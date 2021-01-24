import * as columnStateActions from '@actions/columnStateActions';

const initialState = {};

const tableStateReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case columnStateActions.SET_COLUMN_STATE:
            return {
                ...state,
                [action.tableId]: {
                    columnState: action.columnState
                }
            };
        default:
            return state;
    }
}

export default tableStateReducer;