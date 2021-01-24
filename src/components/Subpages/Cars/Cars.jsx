import Grid from '@components/Generic/Grid/Grid';
import cars from '@data/cars';
import { columnDefs } from './cars.config';

const Cars = () => {
    return <Grid columnDefs={columnDefs} rowData={cars} tableId='cars' />
}

export default Cars;