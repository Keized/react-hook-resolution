import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { useResolution } from './index';

configure({ adapter: new Adapter() });

function TestComponent(props) {
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
}

describe('useResolution', () => {
    it('should render', () => {
        const wrapper = shallow(<TestComponent />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('should set init value', () => {
        const wrapper = shallow(<TestComponent hook={() => useResolution()} />);

        const {
            hook: { mobile, tablet, desktop }
        } = wrapper.find('div').props();

        expect(mobile).toEqual(false);
        expect(tablet).toEqual(false);
        expect(desktop).toEqual(true);
    });
});
