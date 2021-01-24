import { useDispatch, useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import * as columnStateActions from '@actions/columnStateActions';
import * as columnStateSelectors from '@selectors/columnStateSelectors';
import { defaultGridOptions } from './grid.config';
import * as Styled from './Grid.styled';

const Grid = ({ columnDefs, gridOptions = {}, isSaveColumnState = false, rowData, tableId }) => {
    const dispatch = useDispatch();
    const columnState = useSelector(columnStateSelectors.tableColumnStateSelector(tableId));

    const onGridReady = params => {
        const { api, columnApi } = params;
        if (isSaveColumnState && columnState) {
            columnApi.setColumnState(columnState);
        }
        api.sizeColumnsToFit()
    }

    const onColumnMoved = params => {
        if (isSaveColumnState) {
            const columnState = params.columnApi.getColumnState();
            dispatch(columnStateActions.setColumnState(tableId, columnState));
        }
    }

    const combinedGridOptions = { ...defaultGridOptions, ...gridOptions }

    return <Styled.Container className='ag-theme-balham'>
        <AgGridReact
            columnDefs={columnDefs}
            gridOptions={combinedGridOptions}
            onColumnMoved={onColumnMoved}
            onGridReady={onGridReady}
            rowData={rowData} />
    </Styled.Container>
}

export default Grid;