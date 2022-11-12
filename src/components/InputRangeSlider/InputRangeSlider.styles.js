import styled, { css } from 'styled-components';

export const StyledInputRangeSlider = styled.input(
    ({ value }) => css`
        -webkit-appearance: none;
        width: 100%;
        height: 5px;
        background: rgba(255, 255, 255, 0.6) linear-gradient(#6ddbe6, #6ddbe6)
            no-repeat;
        border-radius: 5px;
        background-size: ${value * 10}% 100%;

        ::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            border: 2px solid #fff;
            background: #6ddbe6;
            box-shadow: 0 0 2px 0 #555;
            transition: background 0.3s ease-in-out;
        }

        ::-webkit-slider-runnable-track {
            -webkit-appearance: none;
            box-shadow: none;
            border: none;
            background: transparent;
        }
    `
);
