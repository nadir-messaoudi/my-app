/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement } from 'react';

import ModeToggleButton from '../component/ModeToggleButton/ModeToggleButton.container';

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
