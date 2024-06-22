/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement } from 'react';

import ModeToggleButton from 'Component/ModeToggleButton';

const renderAccountButton = (args, callback) => (
    <>
            { callback(...args) }
            <ModeToggleButton />
    </>
);

export default {
    'Component/NavigationTabs/Component': {
        'member-function': {
            renderAccountButton,
        },
    },
};
