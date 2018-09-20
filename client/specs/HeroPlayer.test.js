import React, {Component} from "react";
import renderer from 'react-test-renderer';
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "../App.jsx";

Enzyme.configure({ adapter: new Adapter()});

describe("HeroPlayer", () => {
  it("should render correctly in debug mode", () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
