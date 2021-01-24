import HideColumnHeader from '@components/Generic/Grid/HideColumnHeader/HideColumnHeader';

export const createColumnDefs = (isShowTransOnly, setIsShowTransOnly) => {
    const columnDefs = [
        { headerName: 'Name', field: 'name' },
        { headerName: 'Score', field: 'score' },
        { headerName: 'Country', field: 'country' },
        { headerName: 'Sponsor', field: 'sponsor' },
        {
            headerName: 'Gender', field: 'gender', headerComponentFramework: HideColumnHeader,
            headerComponentParams: { isHide: isShowTransOnly, onChange: setIsShowTransOnly }
        },
        { headerName: 'Career started', field: 'careerStarted' },
        { headerName: 'Active', field: 'active', valueFormatter: ({ value }) => value === 'true' ? 'Yes' : 'No' },
    ];
    return columnDefs;
}

export const gridOptions = {

};
