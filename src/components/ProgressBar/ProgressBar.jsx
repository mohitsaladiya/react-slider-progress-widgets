import {
    ProgressBarDefaultProps,
    ProgressBarPropTypes,
} from './ProgressBar.propTypes';
import { StyledProgressBarContainer } from './ProgressBar.styles';

/**
 * @description:
 * Progress bar component displays circular progress using the svgs circle elements.
 * The size of the progress bar can be managed with the help of size prop.
 * @example
 *                          <ProgressBar
 *                             progress={progress * 10}
 *                             trackWidth={1}
 *                             indicatorWidth={2}
 *                             size={100}
 *                             trackColor="#496a7d"
 *                         >
 *                             <div>{"Some element inside progress bar"}</div>
 *                         </ProgressBar>
 * @param {Number} size
 * @param {Number} progress
 * @param {Number} trackWidth
 * @param {String} trackColor
 * @param {Number} indicatorWidth
 * @param {String} indicatorColor
 * @param {ReactNode} children
 * @returns {JSX.Element}
 */

export const ProgressBar = ({
    size,
    progress,
    trackWidth,
    trackColor,
    indicatorWidth,
    indicatorColor,
    children,
}) => {
    /**
     * Calculating the following on the basis of provided props
     * - Center: Calculated by dividing the size by 2.
     * - Radius: Center subtracted by stokeWidth: trackWidth or indicatorWidth which ever is larger.
     * - dashArray: Circumference of the circle. = 2 * π * r
     * - dashOffset: Circumference multiplied By progress percentage
     * @type {number}
     */
    const center = size / 2,
        radius =
            center -
            (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
        /**
         * The stroke-dasharray property allows us to give the SVG stroke a dash-like look.
         *  A higher dasharray value indicates more space between dashes in the stroke until
         *  it reaches a value equal to the perimeter of the related shape.
         *  @type {number}
         */
        dashArray = 2 * Math.PI * radius,
        /**
         * The stroke-dashoffset property works in conjunction with stroke-dasharray
         * to specify where the dash begins along an SVG path.
         * As this number increases, the dashes will appear further along the path.
         * @type {number}
         */
        dashOffset = dashArray * ((100 - progress) / 100);

    return (
        <StyledProgressBarContainer
            style={{ width: size, height: size }}
            data-testid="progressBarContainer"
        >
            <svg
                width={size}
                height={size}
                style={{ transform: 'rotate(-90deg)' }}
            >
                <circle
                    cx={center}
                    cy={center}
                    fill="transparent"
                    r={radius}
                    stroke={trackColor}
                    strokeWidth={trackWidth}
                />
                <circle
                    cx={center}
                    cy={center}
                    fill="transparent"
                    r={radius}
                    stroke={indicatorColor}
                    strokeWidth={indicatorWidth}
                    strokeDasharray={dashArray}
                    strokeDashoffset={dashOffset}
                />
            </svg>
            {children}
        </StyledProgressBarContainer>
    );
};

ProgressBar.propTypes = ProgressBarPropTypes;

ProgressBar.defaultProps = ProgressBarDefaultProps;
