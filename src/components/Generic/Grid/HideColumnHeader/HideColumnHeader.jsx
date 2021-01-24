import { useDispatch } from 'react-redux';
import * as Styled from './HideColumnHeader.styled';

const HideColumnHeader = ({ displayName, isHide, onChange }) => {
    const dispatch = useDispatch();

    return <span>
        {displayName}
        <Styled.Icon isHide={isHide}
            onClick={() => dispatch(onChange(!isHide))}
            title={isHide ? 'Show' : 'Hide'} />
    </span>
}

export default HideColumnHeader;