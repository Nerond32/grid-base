import styled from 'styled-components';

export const Tab = styled.div`
    color: #${props => props.isActive ? 'F1DABF' : 'FFFBFF'};
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    margin-left: 16px;
    ${props => props.isActive ? 'text-decoration: underline;' : null}
    &:hover {
        text-shadow: #F1DABF 1px 0 6px;
    }
`;