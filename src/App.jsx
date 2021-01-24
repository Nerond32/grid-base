import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from '@store';
import Cars from '@components/Subpages/Cars/Cars';
import Scores from '@components/Subpages/Scores/Scores';
import Header from '@components/Header/Header';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    <Route path='/cars'><Cars /></Route>
                    <Route path='/scores'><Scores /></Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
