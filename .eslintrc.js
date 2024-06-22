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

module.exports = {
    extends: [
        '@scandipwa',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: ['jsx'],
            },
        },
    },
    rules: {
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'react/jsx-no-bind': 'off',
        'react/forbid-dom-props': 'off',
        'react/forbid-prop-types': 'off',
        'fp/no-let': 'error',
        'fp/no-loops': 'error',
        '@scandipwa/scandipwa-guidelines/no-duplicate-namespaces': 'error',
        '@scandipwa/scandipwa-guidelines/jsx-no-conditional': 'off',
        '@scandipwa/scandipwa-guidelines/only-render-in-component': 'off',
        '@scandipwa/scandipwa-guidelines/no-jsx-variables': 'off',
        'max-lines': 'off',
        'max-len': 'off',
    },
    ignorePatterns: [
        'src/store/index.jsx',
        'src/component/NavigationTabs/*',
    ],
};
