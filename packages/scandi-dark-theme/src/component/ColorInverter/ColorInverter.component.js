import PropTypes from 'prop-types';

import './ColorInverter.style.scss';

/** @namespace ScandiDarkTheme/Component/ColorInverter/Component */
export class ColorInverterComponent extends PureComponent {
    static propTypes = {
        isDarkModeEnabled: PropTypes.bool.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        children: PropTypes.array.isRequired,
    };

    render() {
        const { isDarkModeEnabled, children } = this.props;

        return (
            <div block="ColorInverter" mods={ { isInverted: isDarkModeEnabled } }>
                { children }
            </div>
        );
    }
}
