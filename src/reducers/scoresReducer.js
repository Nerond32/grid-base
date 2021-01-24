import * as scoresActions from '@actions/scoresActions';
import scores from '@data/scores';

const initialState = {
    isShowTransOnly: false,
    scoreRows: scores,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case scoresActions.SET_IS_HIDE_MORE_GENDERS: {
            return {
                ...state,
                isShowTransOnly: action.isShowTransOnly,
            }
        }

        default:
            return state;
    }
}

export default appReducer;