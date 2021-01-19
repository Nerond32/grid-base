import Tab from '@components/Generic/Tab/Tab';
import * as Styled from './Header.styled';

const Header = () => {
    const tabsNames = ['Cars', 'Scores'];
    return <Styled.Header>
        <Styled.Title className=''>Grid-Base</Styled.Title>
        {tabsNames.map((tabName, index) => <Tab key={index} name={tabName} />)}
    </Styled.Header>
}

export default Header;