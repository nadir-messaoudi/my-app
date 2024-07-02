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

export const DARKMODE_ENABLE = 'DARKMODE_ENABLE';

/** @namespace ScandiDarkTheme/Store/DarkMode/Action/enableDarkMode */
export const enableDarkMode = (enabled) => {
    localStorage.setItem('isDarkModeEnabled', enabled);

    return ({
        type: DARKMODE_ENABLE,
        enabled,
    });
};
