import React from 'react';
import { shallow, configure } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Icon from 'react-native-vector-icons/FontAwesome';

import MenuButton from './menu-button';
import { ICON_NAMES } from '../../../../app/app-constants';
import { BaseStyles } from '../../../../app.styles';

configure({ adapter: new Adapter() });

describe('MenuButton', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<MenuButton />);
            expect(component).toMatchSnapshot();
        });

        it('should contains an icon component', () => {
            const component = shallow(<MenuButton />);
            expect(component.find(Icon).length).toBe(1);
        });

        it('should contains a Menu icon ', () => {
            const component = shallow(<MenuButton />);
            expect(component.find({ name: ICON_NAMES.MENU }).length).toBe(1);
        });

        it('icon size should be large', () => {
            const component = shallow(<MenuButton />);
            expect(component.find({ size: BaseStyles.fontSize.l }).length).toBe(1);
        });

        it('icon color should be white', () => {
            const component = shallow(<MenuButton />);
            expect(component.find({ color: BaseStyles.colors.white }).length).toBe(1);
        });
    });
});
