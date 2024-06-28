/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

import './DarkModeProvider.style.scss';

/** @namespace ScandiDarkTheme/Component/DarkModeProvider/Component/mapStateToProps */
export const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace ScandiDarkTheme/Component/DarkModeProvider/Component/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars
export const mapDispatchToProps = (dispatch) => ({
});

/** @namespace ScandiDarkTheme/Component/DarkModeProvider/Component */
export class DarkModeProviderComponent extends PureComponent {
    static propTypes = {
        isDarkModeEnabled: PropTypes.bool.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        children: PropTypes.array.isRequired,
    };

    render() {
        const { children, isDarkModeEnabled } = this.props;

        // we specify a modifier called `isEnabled` in the `mods` prop
        // if isDarkModeEnabled is true, the modifier will be added, otherwise not
        return (
        <div block="DarkModeProvider" mods={ { isEnabled: isDarkModeEnabled } }>
            { children }
        </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DarkModeProviderComponent);
