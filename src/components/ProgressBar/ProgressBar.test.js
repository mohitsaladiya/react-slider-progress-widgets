import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';
import { ProgressBarDefaultProps } from './ProgressBar.propTypes';

describe('<ProgressBar />', () => {
    describe('when rendering ProgressBar component', () => {
        it('should not be an empty dom element when called with default props', () => {
            const { container } = render(
                <ProgressBar {...ProgressBarDefaultProps} />
            );
            expect(container).not.toBeEmptyDOMElement();
        });
        it('should render the height and width of the container as per the size prop', () => {
            render(<ProgressBar {...ProgressBarDefaultProps} />);
            const progressBarContainer = screen.queryByTestId(
                'progressBarContainer'
            );
            const expectedStyles = `width: ${ProgressBarDefaultProps.size}px; height: ${ProgressBarDefaultProps.size}px`;
            expect(progressBarContainer).toHaveStyle(expectedStyles);
        });
        it('should render the height and width of the svg element as per the size prop', () => {
            const { container } = render(
                <ProgressBar {...ProgressBarDefaultProps} />
            );
            const svgElement = container.querySelector('svg');
            expect(svgElement.getAttribute('width')).toBe(
                ProgressBarDefaultProps.size.toString()
            );
            expect(svgElement.getAttribute('height')).toBe(
                ProgressBarDefaultProps.size.toString()
            );
        });
        it('should render the svg circle to have attributes based on provided props', () => {
            const { container } = render(
                <ProgressBar {...ProgressBarDefaultProps} />
            );
            const svgCircleElement = container.querySelector('svg circle');
            expect(svgCircleElement.getAttribute('cx')).toBe('50');
            expect(svgCircleElement.getAttribute('cy')).toBe('50');
            expect(svgCircleElement.getAttribute('r')).toBe('40');
            expect(svgCircleElement.getAttribute('stroke')).toBe(
                ProgressBarDefaultProps.trackColor
            );
            expect(svgCircleElement.getAttribute('stroke-width')).toBe(
                ProgressBarDefaultProps.trackWidth.toString()
            );
        });
        it('should render the sibling svg circle to have attributes based on provided props', () => {
            const { container } = render(
                <ProgressBar {...ProgressBarDefaultProps} />
            );
            const svgProgressCircleElement =
                container.querySelector('svg circle').nextSibling;
            expect(svgProgressCircleElement.getAttribute('cx')).toBe('50');
            expect(svgProgressCircleElement.getAttribute('cy')).toBe('50');
            expect(svgProgressCircleElement.getAttribute('r')).toBe('40');
            expect(svgProgressCircleElement.getAttribute('stroke')).toBe(
                ProgressBarDefaultProps.indicatorColor
            );
            expect(svgProgressCircleElement.getAttribute('stroke-width')).toBe(
                ProgressBarDefaultProps.indicatorWidth.toString()
            );
            expect(
                svgProgressCircleElement.getAttribute('stroke-dasharray')
            ).toBe('251.32741228718345');
            expect(
                svgProgressCircleElement.getAttribute('stroke-dashoffset')
            ).toBe('251.32741228718345');
        });
        it('should render children as per the provided props', () => {
            const { container } = render(
                <ProgressBar {...ProgressBarDefaultProps}>
                    <div>{'some test'}</div>
                </ProgressBar>
            );
            expect(container).toHaveTextContent('some test');
        });
    });
});
