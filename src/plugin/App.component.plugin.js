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

import DarkModeProviderContainer from 'Component/DarkModeProvider/DarkModeProvider.container';

export const renderRouter = (args, callback) => (
        <DarkModeProviderContainer key="router">{ callback(...args) }</DarkModeProviderContainer>
);

export default {
    'Component/App/Component': {
        'member-function': {
            renderRootComponents: renderRouter,
        },
    },
};
