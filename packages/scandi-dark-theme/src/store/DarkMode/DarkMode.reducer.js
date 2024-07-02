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

import { DARKMODE_ENABLE } from './DarkMode.action';

/** @namespace ScandiDarkTheme/Store/DarkMode/Reducer/getInitialState */
export const getInitialState = () => ({
    enabled: JSON.parse(localStorage.getItem('isDarkModeEnabled') || 'false'),
});

/** @namespace ScandiDarkTheme/Store/DarkMode/Reducer/DarkModeReducer */
export const DarkModeReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case DARKMODE_ENABLE:
        const { enabled } = action;

        return {
            enabled,
        };

    default:
        return state;
    }
};

export default DarkModeReducer;
