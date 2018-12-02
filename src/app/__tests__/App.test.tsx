import * as React from "react";
import * as Adapter from 'enzyme-adapter-react-16'
import ReactTestUtils from 'react-dom/test-utils';
import { configure, shallow, mount, render } from 'enzyme';
import mockData from './mockdata.json';
import parsedJsondata from './parsedJsondata.json';


import App from "../components/App";
import { Input } from '../components/Input';
import { Output } from '../components/Output';

configure({
  adapter: new Adapter(),
});

const TITLE:string  = 'JSON PARSER';

describe('components', () => {
  it("app renders correctly", () => {
    const TEST_PROPS = {
      inputData: jest.fn(),
    }
      const wrapper = mount(<App />);
      expect(wrapper.contains(<h1>{TITLE}</h1>)).toBeTruthy();
      expect(wrapper.find(Input).length).toBe(1);
      expect(wrapper.find(Output).length).toBe(1);
  
  });

  it("Input passes data to a parent component on change", () => {
    const TEST_PROPS = {
      inputData: jest.fn(),
    }
    const wrapper = shallow(<Input {...TEST_PROPS}/>);
    const validJson = '{ "name":"John", "age":30 }'
    const event = { target: { value: validJson } };  
    expect(wrapper.find("textarea").simulate("change", event));
    expect(TEST_PROPS.inputData).toHaveBeenCalledTimes(1);
    expect(TEST_PROPS.inputData).toHaveBeenCalledWith(validJson);
  });

  it("Output renders without crashing", () => {
    const props = {
      OutputData: JSON.stringify(parsedJsondata)
    };
    const wrapper = shallow(<Output {...props}/>);
    expect(wrapper).toBeTruthy();
  });

});