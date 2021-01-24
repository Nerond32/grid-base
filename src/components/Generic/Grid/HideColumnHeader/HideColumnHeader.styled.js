import styled from 'styled-components';

export const Icon = styled.div`
    background-color: ${props => props.isHide ? 'green' : 'red'};;
    height: 16px;
    width: 16px;
    position: absolute;
    top: calc(50% - 8px);
    right: 16px;;
`;