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

import ColorInverter from '../component/ColorInverter/ColorInverter.container';

// wraps the output of the Image.render function in our ColorInverter component
export const render = (args, callback) => (
    <ColorInverter>{ callback(...args) }</ColorInverter>
);

// export a configuration specifying the namespace we want to plug in to
// as well as the type of plugin
export default {
    'Component/Image/Component': {
        'member-function': {
            render,
        },
    },
};
