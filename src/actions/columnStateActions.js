export const SET_COLUMN_STATE = 'SET_COLUMN_STATE';

export const setColumnState = (tableId, columnState) => ({
    type: SET_COLUMN_STATE,
    tableId,
    columnState,
});