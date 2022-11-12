import styled from 'styled-components';

export const StyledCircularRangeWidget = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledCircularRangeWidgetContainer = styled.div`
    position: relative;
`;

export const StyledProgressBarWrapper = styled.div`
    position: absolute;
    top: 19%;
    left: 19%;
    background: #496a7d;
    border-radius: 50%;
    height: 100px;
    width: 100px;
`;

export const ProgressScoreCircle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #496a7d;
    position: absolute;
    top: 18%;
    left: 18%;
    background: #6edbe5;
    text-align: center;
`;

export const StyledSliderWrapper = styled.div`
    width: 120px;
    margin: 10px;
`;

export const StyledInput = styled.input`
    position: absolute;
    width: 20px;
    background: transparent;
    border: 0;
    color: #fff;
    top: 30%;
    left: 33%;
    outline: none;
    cursor: pointer;
    font-size: 18px;
    /* Hide number input arrows/spinners */
    /* Chrome, Safari, Edge, Opera */

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */

    [type='number'] {
        -moz-appearance: textfield;
    }
`;
