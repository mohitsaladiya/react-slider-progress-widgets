import {
    InputRangeSliderDefaultProps,
    InputRangeSliderPropTypes,
} from './InputRangeSlider.propTypes';
import { StyledInputRangeSlider } from './InputRangeSlider.styles';

/**
 * @description Renders a range slider component using an input range type element with some custom styles
 * @example
 *                  <InputRangeSlider
 *                     onChange={onChangeSlider}
 *                     value={Number(progress)}
 *                 />
 * @param {Number} min
 * @param {Number} max
 * @param {Number} value
 * @param {Function} onChange
 * @returns {JSX.Element}
 * @constructor
 */
export const InputRangeSlider = ({
    min = 0,
    max = 10,
    value = 0,
    onChange,
}) => {
    /**
     * The onchange handler for the range input
     * - Triggers the onChange callback with the updated value.
     * @param {React.ChangeEventHandler} event
     */
    const handleOnChange = (event) => {
        const currentValue = event.target.value;
        onChange(currentValue);
    };
    return (
        <StyledInputRangeSlider
            data-testid="inputRangeSliderElement"
            type="range"
            min={min}
            max={max}
            onChange={handleOnChange}
            value={value}
        />
    );
};

InputRangeSlider.propTypes = InputRangeSliderPropTypes;
InputRangeSlider.defaultProps = InputRangeSliderDefaultProps;
