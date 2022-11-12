import styled from 'styled-components';

export const StyledAppWrapper = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto;
    align-items: center;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;
