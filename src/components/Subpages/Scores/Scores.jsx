import { useSelector } from 'react-redux';
import * as scoresActions from '@actions/scoresActions';
import Grid from '@components/Generic/Grid/Grid';
import * as scoresSelectors from '@selectors/scoresSelectors';
import { createColumnDefs, gridOptions } from './scores.config';

const Scores = () => {
    const isShowTransOnly = useSelector(scoresSelectors.isShowTransOnlySelector);
    const scoreRows = useSelector(scoresSelectors.filteredScoreRowsSelector);
    const columnDefs = createColumnDefs(isShowTransOnly, scoresActions.setIsShowTransOnly);
    return <Grid columnDefs={columnDefs} gridOptions={gridOptions} isSaveColumnState rowData={scoreRows} tableId='scores' />
}

export default Scores;