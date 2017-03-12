import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import Cell from './Cell';

const expect = chai.expect;

describe('<Cell />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Cell />);
    expect(wrapper.find('div').length).to.be.eql(1);
  });
});
