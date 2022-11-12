import { StyledAppWrapper } from './App.styles';
import { CircularProgressRangeWidget, VerticalSliderWidget } from './widgets';

/**
 * @description Renders the main app component which is currently rendering two widgets
 * @example
 *  <App />
 * @returns {JSX.Element}
 */
export const App = () => {
    return (
        <StyledAppWrapper>
            <CircularProgressRangeWidget />
            <VerticalSliderWidget />
        </StyledAppWrapper>
    );
};
