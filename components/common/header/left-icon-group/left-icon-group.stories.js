import React from 'react';
import { storiesOf } from '@storybook/react-native';

import LeftIconGroup from './left-icon-group';
import CenterView from '../../center-view/center-view';
import { BaseStyles } from '../../../../app.styles';

storiesOf('Left Icons Group', module)
    .addDecorator(getStory => <CenterView color={BaseStyles.colors.blue}>{getStory()}</CenterView>)
    .add('with menu button', () => <LeftIconGroup needToShowMenuButton={true} />)
    .add('without menu button', () => <LeftIconGroup needToShowMenuButton={false} />);
