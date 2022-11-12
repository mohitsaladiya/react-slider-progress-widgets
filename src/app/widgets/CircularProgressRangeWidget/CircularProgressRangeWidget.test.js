import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { CircularProgressRangeWidget } from './CircularProgressRangeWidget';

describe('<CircularProgressRangeWidget />', () => {
    describe('when rendering the CircularProgressRangeWidget', () => {
        it('should not be an empty dom element', () => {
            const { container } = render(<CircularProgressRangeWidget />);
            expect(container).not.toBeEmptyDOMElement();
        });
        it('should render <ProgressBar /> component', () => {
            render(<CircularProgressRangeWidget />);
            const progressBarContainer = screen.queryByTestId(
                'progressBarContainer'
            );
            expect(progressBarContainer).toBeInTheDocument();
        });
        it('should render <InputRangeSlider /> component', () => {
            render(<CircularProgressRangeWidget />);
            const inputRangeSliderElement = screen.queryByTestId(
                'inputRangeSliderElement'
            );
            expect(inputRangeSliderElement).toBeInTheDocument();
        });
    });
    describe('on change range slider', () => {
        it('should render the expected value in textBox', () => {
            render(<CircularProgressRangeWidget />);
            const textBoxElement = screen.queryByTestId('progressTextInput');
            const inputRangeElement = screen.queryByTestId(
                'inputRangeSliderElement'
            );
            fireEvent.change(inputRangeElement, { target: { value: '5' } });
            expect(textBoxElement.value).toBe('5');
        });
        it('should update the progress bar', () => {
            render(<CircularProgressRangeWidget />);
            const inputRangeElement = screen.queryByTestId(
                'inputRangeSliderElement'
            );
            const svgProgressCircleElement = screen
                .queryByTestId('progressBarContainer')
                .querySelector('svg circle').nextSibling;
            fireEvent.change(inputRangeElement, { target: { value: '5' } });
            expect(
                svgProgressCircleElement.getAttribute('stroke-dashoffset')
            ).toBe('150.79644737231007');
        });
    });
    describe('on change text input', () => {
        it('should render the expected value', () => {
            render(<CircularProgressRangeWidget />);
            const textBoxElement = screen.queryByTestId('progressTextInput');
            fireEvent.change(textBoxElement, { target: { value: '5' } });
            expect(textBoxElement.value).toBe('5');
        });
        it('should update the range input to the entered value', () => {
            render(<CircularProgressRangeWidget />);
            const textBoxElement = screen.queryByTestId('progressTextInput');
            const inputRangeElement = screen.queryByTestId(
                'inputRangeSliderElement'
            );
            fireEvent.change(textBoxElement, { target: { value: '5' } });
            expect(inputRangeElement.value).toBe('5');
        });
        it('should not exceed more than 10', () => {
            render(<CircularProgressRangeWidget />);
            const textBoxElement = screen.queryByTestId('progressTextInput');
            fireEvent.change(textBoxElement, { target: { value: '23' } });
            expect(textBoxElement.value).toBe('10');
        });
        it('should update the progress bar', () => {
            render(<CircularProgressRangeWidget />);
            const textBoxElement = screen.queryByTestId('progressTextInput');
            const svgProgressCircleElement = screen
                .queryByTestId('progressBarContainer')
                .querySelector('svg circle').nextSibling;
            fireEvent.change(textBoxElement, { target: { value: '5' } });
            expect(
                svgProgressCircleElement.getAttribute('stroke-dashoffset')
            ).toBe('150.79644737231007');
        });
    });
});
