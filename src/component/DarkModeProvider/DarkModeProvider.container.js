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

import { DarkModeProviderComponent } from './DarkModeProvider.component';

/** @namespace myApp/Component/DarkModeProvider/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace myApp/Component/DarkModeProvider/Container/mapDispatchToProps */
// eslint-disable-next-line no-unused-vars
export const mapDispatchToProps = (dispatch) => ({
});

/** @namespace myApp/Component/DarkModeProvider/Container */
export class DarkModeProviderContainer extends PureComponent {
    static propTypes = {
        isDarkModeEnabled: PropTypes.bool.isRequired,
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
            <DarkModeProviderComponent
              { ...this.containerProps() }
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DarkModeProviderContainer);
