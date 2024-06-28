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

import { ColorInverterComponent } from './ColorInverter.component';

/** @namespace ScandiDarkTheme/Component/ColorInverter/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace ScandiDarkTheme/Component/ColorInverter/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars
export const mapDispatchToProps = (dispatch) => ({
});

/** @namespace ScandiDarkTheme/Component/ColorInverter/Container */
export class ColorInverterContainer extends PureComponent {
    static propTypes = {
        isDarkModeEnabled: PropTypes.bool.isRequired,
        // eslint-disable-next-line react/forbid-prop-types
        children: PropTypes.array.isRequired,
    };

    containerProps() {
        const {
            isDarkModeEnabled,
            children,
        } = this.props;

        return {
            isDarkModeEnabled,
            children,
        };
    }

    render() {
        return (
            <ColorInverterComponent
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorInverterContainer);
