/* eslint-env jest */

import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Index from '../pages/index.js'
import Parent from '../components/parent.js'
import Room1 from '../components/room1.js'
import Room2 from '../components/room2.js'
import Room3 from '../components/room3.js'
import Room4 from '../components/room4.js'



describe('With Enzyme', () => {
	it('initial', () => {
		const index = shallow(<Index />);
    	expect(index.find(Parent)).toHaveLength(1);
	})
})


describe('With Enzyme', () => {
  it('room1 2 3 4 rendered', () => {

  	const data = {
		checked: '',
		adults1: 1,
		children1: 0,
		adults2: 1,
		children2: 0,
		adults3: 1,
		children3: 0,
		adults4: 1,
		children4: 0
	}

    const parent = shallow(<Parent peter={data} />);
    expect(parent.find(Room1)).toHaveLength(1);
    expect(parent.find(Room2)).toHaveLength(1);
    expect(parent.find(Room3)).toHaveLength(1);
    expect(parent.find(Room4)).toHaveLength(1);
  })
})

describe('With Enzyme', () => {
  it('rooms 4 is checked/ room 3 is checked', () => {
    const room4 = shallow(<Room4 check={true} />);
    const room2 = shallow(<Room2 />);
    room2.find('input').forEach(i => {expect(i.props().checked).toEqual(true)});
	room4.find('input').forEach(i => {expect(i.props().checked).toEqual(true)});
  })
})

describe('With Enzyme', () => {
  it('rooms 2 3 4 are not checked', () => {
    const room2 = shallow(<Room2 check={false} />);
    const room3 = shallow(<Room3 />);
    const room4 = shallow(<Room4 />);
    room3.find('input').forEach(i => {expect(i.props().checked).toEqual(false)});
	room4.find('input').forEach(i => {expect(i.props().checked).toEqual(false)});
  })
})



   


