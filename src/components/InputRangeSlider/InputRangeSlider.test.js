import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { InputRangeSlider } from './InputRangeSlider';
import { InputRangeSliderDefaultProps } from './InputRangeSlider.propTypes';

describe('<InputRangeSlider />', () => {
    describe('when rendering Input Range Slider component with default Props', () => {
        it('should not be an empty dom element', () => {
            const { container } = render(
                <InputRangeSlider {...InputRangeSliderDefaultProps} />
            );
            expect(container).not.toBeEmptyDOMElement();
        });
        it('should have the input element attributes as per the provided props', () => {
            const { container } = render(
                <InputRangeSlider {...InputRangeSliderDefaultProps} />
            );
            const inputElement = container.querySelector('input');
            expect(inputElement).toHaveAttribute(
                'min',
                InputRangeSliderDefaultProps.min.toString()
            );
            expect(inputElement).toHaveAttribute(
                'max',
                InputRangeSliderDefaultProps.max.toString()
            );
            expect(inputElement).toHaveAttribute(
                'value',
                InputRangeSliderDefaultProps.value.toString()
            );
        });
        it('should call the onChange prop func on every onchange event', () => {
            let spy = jest.fn();
            const { container } = render(<InputRangeSlider onChange={spy} />);
            const inputElement = container.querySelector('input');
            fireEvent.change(inputElement, { target: { value: '5' } });
            expect(spy).toHaveBeenCalled();
        });
    });
});
