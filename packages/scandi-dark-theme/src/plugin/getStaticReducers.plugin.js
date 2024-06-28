import DarkModeReducer from '../store/DarkMode/DarkMode.reducer';

/** @namespace ScandiDarkTheme/Plugin/App/Component/getStaticReducers */
export const getStaticReducers = (args, callback) => ({
    ...callback(args),
    DarkModeReducer,
});

export default {
    'Store/Index/getStaticReducers': {
        function: getStaticReducers,
    },
};
