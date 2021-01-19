import * as appActions from '@actions/appActions';

const initialState = {
    selectedTab: 'Cars',
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appActions.SET_SELECTED_TAB: {
            return {
                ...state,
                selectedTab: action.tabName
            };
        }
        default:
            return state;
    }
}

export default appReducer;