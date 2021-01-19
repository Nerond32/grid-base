import { Provider } from 'react-redux'
import store from '@store';
import Grid from '@components/Generic/Grid/Grid';
import Header from '@components/Header/Header';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Grid />
        </Provider>
    );
}

export default App;
