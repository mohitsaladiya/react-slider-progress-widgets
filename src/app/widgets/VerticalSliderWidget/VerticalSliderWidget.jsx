import { useState } from 'react';
import {
    StyledBar,
    StyledBarContainer,
    StyledSelectedValue,
    StyledVerticalSliderWidget,
} from './VerticalSliderWidget.styles';

/**
 * @description Vertical Slider Widget renders colorful bars and displays the selected bar value on click
 * @example
 *  <VerticalSliderWidget />
 * @todo Make this component dynamic with custom number of bars
 * @returns {JSX.Element}
 */
export const VerticalSliderWidget = () => {
    // TODO: Make it dynamic and get barCount from props;
    const barCount = 5;
    const [value, setValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(0);

    /**
     * The logic behind the background color change of the bars.
     * The returned boolean value was utilised by Styled Components as a prop to update the background color for each bar.
     * @param {Number} barWeight
     * @returns {boolean}
     */
    const handleBarLightning = (barWeight) => {
        if (!value) {
            // If we don't have any value selected, light those bars whose weight is less or equal to hover value.
            return hoverValue >= barWeight;
        }
        if (value && hoverValue > value) {
            // If we value selected and hovering on other bar, light only those bars whose weight is greater or equal to hover value.
            return barWeight <= hoverValue;
        }
        // Else, light the bars whose weight is less or equal to selected value
        return barWeight <= value;
    };

    return (
        <StyledVerticalSliderWidget data-testid="verticalSliderWidgetContainer">
            <StyledBarContainer barCount={barCount}>
                {[...Array(barCount)].map((bar, index) => {
                    const barWeight = barCount - index;
                    return (
                        <StyledBar
                            data-testid={`verticalBar-${barWeight}`}
                            barCount={barCount}
                            key={barWeight}
                            onClick={() => {
                                setValue(barWeight);
                            }}
                            isLightenUp={handleBarLightning(barWeight)}
                            onMouseEnter={() => {
                                setHoverValue(barWeight);
                            }}
                        />
                    );
                })}
            </StyledBarContainer>
            <StyledSelectedValue>{value}</StyledSelectedValue>
        </StyledVerticalSliderWidget>
    );
};
