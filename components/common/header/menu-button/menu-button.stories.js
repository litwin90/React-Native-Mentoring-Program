import React from 'react';
import { storiesOf } from '@storybook/react-native';

import MenuButton from './menu-button';
import CenterView from '../../center-view/center-view';
import { BaseStyles } from '../../../../app.styles';

storiesOf('MenuButton', module)
    .addDecorator(getStory => <CenterView color={BaseStyles.colors.blue}>{getStory()}</CenterView>)
    .add('simple menu button', () => <MenuButton />);
