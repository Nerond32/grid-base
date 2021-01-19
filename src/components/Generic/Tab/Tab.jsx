import { useDispatch, useSelector } from 'react-redux';
import * as appActions from '@actions/appActions';
import * as appSelectors from '@selectors/appSelectors';
import * as Styled from './Tab.styled';

const Tab = ({ name }) => {
    const dispatch = useDispatch();
    const selectedTab = useSelector(appSelectors.selectedTabSelector);
    return <Styled.Tab isActive={name === selectedTab} onClick={() => dispatch(appActions.setSelectedTab(name))}>{name}</Styled.Tab>
}

export default Tab;