import { createSelector } from 'reselect'

export const isShowTransOnlySelector = state => state.scores.isShowTransOnly;
export const scoreRowsSelector = state => state.scores.scoreRows;

export const filteredScoreRowsSelector = createSelector(
    [isShowTransOnlySelector, scoreRowsSelector],
    (isHide, scoreRows) => {
        if (!isHide) {
            return scoreRows;
        }
        const filteredScoreRows = scoreRows.filter(row => row.gender.toLowerCase().includes('trans'));
        return filteredScoreRows;
    }
);