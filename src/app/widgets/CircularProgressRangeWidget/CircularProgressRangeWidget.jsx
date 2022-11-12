import { useState } from 'react';
import {
    ProgressScoreCircle,
    StyledCircularRangeWidget,
    StyledCircularRangeWidgetContainer,
    StyledInput,
    StyledProgressBarWrapper,
    StyledSliderWrapper,
} from './CircularProgressRangeWidget.styles';
import { InputRangeSlider, ProgressBar } from '../../../components';

/**
 * @description It renders circular progress bar widget with range and displays the updated value.
 * The progress bar, range can also be updated by entering the value
 * @example
 *  <CircularProgressRangeWidget />
 * @returns {JSX.Element}
 */
export const CircularProgressRangeWidget = () => {
    const [progress, setProgress] = useState(0);
    const onChangeSlider = (sliderValue) => {
        setProgress(sliderValue);
    };

    /**
     * This handler runs on change of range input
     *  - Restricts the value to 10 if the user tries to enter value > 10
     *  - Updates the progress state with the updated input value
     */
    const handleOnInputChange = ({ target: { value } }) => {
        let currentInputValue = value;
        if (Number(value) > 10) {
            currentInputValue = 10;
        }
        setProgress(currentInputValue);
    };
    return (
        <StyledCircularRangeWidget>
            <StyledCircularRangeWidgetContainer data-testid="circularRangeWidgetContainer">
                <svg width="150" height="150">
                    <circle
                        cx="75"
                        cy="75"
                        r="70"
                        strokeDasharray="2, 4"
                        fill="transparent"
                        strokeWidth="1"
                        stroke="#678fa1"
                    />
                    <foreignObject height="125" width="125">
                        <StyledProgressBarWrapper>
                            <ProgressBar
                                progress={progress * 10}
                                trackWidth={1}
                                indicatorWidth={2}
                                size={100}
                                trackColor="#496a7d"
                            >
                                <ProgressScoreCircle>
                                    <StyledInput
                                        data-testid="progressTextInput"
                                        onChange={handleOnInputChange}
                                        value={progress}
                                        type="number"
                                        min="0"
                                        max="10"
                                    />
                                </ProgressScoreCircle>
                            </ProgressBar>
                        </StyledProgressBarWrapper>
                    </foreignObject>
                </svg>
                <StyledSliderWrapper>
                    <InputRangeSlider
                        onChange={onChangeSlider}
                        value={Number(progress)}
                    />
                </StyledSliderWrapper>
            </StyledCircularRangeWidgetContainer>
        </StyledCircularRangeWidget>
    );
};
