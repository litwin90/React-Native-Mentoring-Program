import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
    require('../components/common/header/menu-button/menu-button.stories');
    require('../components/common/header/right-icon-group/right-icon-group.stories');
    require('../components/common/header/left-icon-group/left-icon-group.stories');
}, module);

// configure(require.context('../components', true, /\.stories\.js$/), module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('RMPN', () => StorybookUIRoot);

export default StorybookUIRoot;
