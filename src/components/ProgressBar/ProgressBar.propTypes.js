import PropTypes from 'prop-types';

export const ProgressBarPropTypes = {
    /**
     * size adds the dimensions to the component
     */
    size: PropTypes.number,

    /**
     *  progress takes numeric data to show the progress information percentage-wise
     */
    progress: PropTypes.number,

    /**
     *  trackWidth takes care of the thickness of the track ring
     */
    trackWidth: PropTypes.number,

    /**
     *  trackColor takes care of the coloring of the track ring
     */
    trackColor: PropTypes.string,

    /**
     *  indicatorWidth manages the thickness of the indication ring
     */
    indicatorWidth: PropTypes.number,

    /**
     *  indicatorColor is the color of the progress indication
     */
    indicatorColor: PropTypes.string,
    /**
     * child Nodes
     */
    children: PropTypes.element,
};

export const ProgressBarDefaultProps = {
    size: 100,
    progress: 0,
    trackWidth: 10,
    trackColor: `#ddd`,
    indicatorWidth: 10,
    indicatorColor: `#fff`,
};
