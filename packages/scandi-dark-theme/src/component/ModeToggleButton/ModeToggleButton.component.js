/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable react/no-redundant-should-component-update */
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

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ModeToggleButton.style.scss';

/** @namespace ScandiDarkTheme/Component/ModeToggleButton/Component */
export class ModeToggleButtonComponent extends PureComponent {
    static propTypes = {
        isDarkModeEnabled: PropTypes.bool.isRequired,
        enableDarkMode: PropTypes.func.isRequired,
    };

    render() {
        const { isDarkModeEnabled, enableDarkMode } = this.props;

        return (
          <button
            key="dark"
            className="NavigationTabs-Button"
            onClick={ () => {
                enableDarkMode(!isDarkModeEnabled);
            } }
            aria-label="Switch dark mode"
          >
              <svg className="ModeToggleButton" viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" stroke="#000000" data-is-enabled={ isDarkModeEnabled }>
                  <path d="m32.8,29.3c-8.9-.8-16.2-7.8-17.5-16.6-.3-1.8-.3-3.7,0-5.4.2-1.4-1.4-2.3-2.5-1.6C6.3,9.7,2.1,16.9,2.5,25c.5,10.7,9,19.5,19.7,20.4,10.6.9,19.8-6,22.5-15.6.4-1.4-1-2.6-2.3-2-2.9,1.3-6.1,1.8-9.6,1.5Z" />
              </svg>
          </button>
        );
    }
}

export default ModeToggleButtonComponent;
