import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
    describe('when app is running', () => {
        it('should not be empty dom element', () => {
            const { container } = render(<App />);
            expect(container).not.toBeEmptyDOMElement();
        });
        it('should render the circular progress range widget', () => {
            render(<App />);
            const circularRangeWidget = screen.queryByTestId(
                'circularRangeWidgetContainer'
            );
            expect(circularRangeWidget).toBeInTheDocument();
        });
        it('should render the vertical slider widget', () => {
            render(<App />);
            const verticalSliderWidget = screen.queryByTestId(
                'verticalSliderWidgetContainer'
            );
            expect(verticalSliderWidget).toBeInTheDocument();
        });
    });
});
