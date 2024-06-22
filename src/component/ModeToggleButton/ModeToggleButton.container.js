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

import { connect } from 'react-redux';

import { enableDarkMode } from '../../store/DarkMode/DarkMode.action';
import ModeToggleButton from './ModeToggleButton.component';

/** @namespace myApp/Component/ModeToggleButton/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isDarkModeEnabled: state.DarkModeReducer.enabled,
});

/** @namespace myApp/Component/ModeToggleButton/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    enableDarkMode: (enabled) => dispatch(enableDarkMode(enabled)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModeToggleButton);
