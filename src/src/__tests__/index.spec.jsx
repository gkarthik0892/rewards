import React from 'react';
import { shallow } from "enzyme";
import IndexPage from '../pages/index';


describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    // Cache original functionality
    const initialState = 90

    React.useState = jest.fn().mockReturnValue([initialState , {}])
    const wrapper = shallow(<IndexPage/>);
    expect(wrapper.find("h6").text(initialState)).toEqual("Hello world React!");
  });
});