import React from 'react';
import { storiesOf } from '@storybook/react-native';

import RightIconGroup from './right-icon-group';
import CenterView from '../../center-view/center-view';
import { BaseStyles } from '../../../../app.styles';

storiesOf('Right Icons Group', module)
    .addDecorator(getStory => <CenterView color={BaseStyles.colors.blue}>{getStory()}</CenterView>)
    .add('without search icon', () => <RightIconGroup isSearchVisible={true} />)
    .add('with search icon', () => <RightIconGroup isSearchVisible={false} />);
