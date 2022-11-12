import PropTypes from 'prop-types';

export const InputRangeSliderPropTypes = {
    /**
     * minimum value of the range input
     */
    min: PropTypes.number,
    /**
     * maximum value of the range input
     */
    max: PropTypes.number,
    /**
     * explicit value of the range input
     */
    value: PropTypes.number,
    /**
     * callback function triggers on change of range input
     */
    onChange: PropTypes.func,
};

export const InputRangeSliderDefaultProps = {
    min: 0,
    max: 10,
    value: 0,
    onChange: () => {},
};
