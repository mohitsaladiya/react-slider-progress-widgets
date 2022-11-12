import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { VerticalSliderWidget } from './VerticalSliderWidget';

describe('<VerticalSliderWidget />', () => {
    describe('when rendering the VerticalSliderRange widget', () => {
        it('should not be an empty dom element', () => {
            const { container } = render(<VerticalSliderWidget />);
            expect(container).not.toBeEmptyDOMElement();
        });
    });
    describe('when clicking on the widget bar', () => {
        it('should render the value on bar click', () => {
            const { container } = render(<VerticalSliderWidget />);
            const topBarElement = screen.queryByTestId('verticalBar-5');
            fireEvent.click(topBarElement);
            expect(container).toHaveTextContent('5');
        });
        it('should lighten up the bar on click', () => {
            render(<VerticalSliderWidget />);
            const topBarElement = screen.queryByTestId('verticalBar-5');
            fireEvent.click(topBarElement);
            expect(topBarElement).toHaveStyle('background: #ffffff');
        });
    });
    describe('when hover on the bar', () => {
        it('should lighten up the bar on mouse enter', () => {
            render(<VerticalSliderWidget />);
            const topBarElement = screen.queryByTestId('verticalBar-3');
            fireEvent.mouseEnter(topBarElement);
            expect(topBarElement).toHaveStyle('background: #ffffff');
        });
    });
});
