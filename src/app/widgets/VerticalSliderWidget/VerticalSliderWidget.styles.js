import styled, { css } from 'styled-components';

export const StyledBarContainer = styled.div(
    ({ barCount }) => css`
        // TODO: Use percentages
        width: ${barCount * 35}px;
        height: ${barCount * 30}px;
        // TODO: Handle it with respect to barCount
        clip-path: polygon(50% 115%, 0 0, 100% 0);
    `
);

export const StyledBar = styled.div(
    ({ barCount, isLightenUp }) => css`
        // TODO: Adjust height with respect to barCount
        height: ${barCount * 3}px;
        border: 1px solid #325d6e;
        margin: 10px;
        background: ${isLightenUp ? '#ffffff' : '#819da8'};
        -webkit-tap-highlight-color: transparent;
        padding: 3px;

        :hover {
            background: white;
        }
    `
);

export const StyledVerticalSliderWidget = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StyledSelectedValue = styled.div`
    font-size: 30px;
    color: #eeeeee;
`;
