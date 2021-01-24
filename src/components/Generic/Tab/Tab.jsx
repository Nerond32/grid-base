import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import * as appActions from '@actions/appActions';
import * as appSelectors from '@selectors/appSelectors';
import * as Styled from './Tab.styled';

const Tab = ({ name }) => {
    const dispatch = useDispatch();
    const selectedTab = useSelector(appSelectors.selectedTabSelector);
    return <Link to={`/${name.toLowerCase()}`}>
        <Styled.Tab isActive={name === selectedTab} onClick={() => dispatch(appActions.setSelectedTab(name))}>{name}</Styled.Tab>
    </Link>
}

export default Tab;