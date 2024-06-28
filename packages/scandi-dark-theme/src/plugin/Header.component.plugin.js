import ModeToggleButton from '../component/ModeToggleButton';

import './Header.style.plugin.css';

const renderAccount = (args, callback) => (
    <>
            <ModeToggleButton />
            { callback(...args) }
    </>
);

export default {
    'Component/Header/Component': {
        'member-function': {
            renderAccount,
        },
    },
};
